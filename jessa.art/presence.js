/* Presence: show other people looking at the site right now, as cursors with names,
   and as extra dots beside the J / you circles.
   Transport: BroadcastChannel (other tabs in this browser) always; Firebase Realtime Database
   (everyone, anywhere) when window.PRESENCE_FIREBASE holds a project config. */
(() => {
    const $ = (s, r = document) => r.querySelector(s),
        $$ = (s, r = document) => [...r.querySelectorAll(s)];
    const canvas = $('.canvas'),
        play = $('#play') || $('.play');
    if (!canvas) return;
    const page = location.pathname.split('/').pop() + (location.pathname.endsWith('app.html') ? location.hash : '');
    const me = {
        id: Math.random().toString(36).slice(2, 10),
        name: ($('#visitorName') || {}).textContent || 'Someone',
        tint: 'mint',
        x: 0,
        y: 0,
        page,
        t: 0
    };
    const touchOnly = !matchMedia('(hover: hover) and (pointer: fine)').matches; // phones/tablets: a dot, never a cursor
    me.touch = touchOnly;
    // how long this visit has lasted (Jessa's admin page shows it). Counted from the first page of the visit, on this computer's own clock, so a wrong clock can't skew it
    let visitStart = Date.now();
    try {
        visitStart = +sessionStorage.getItem('visitStart') || visitStart;
        sessionStorage.setItem('visitStart', visitStart);
    } catch (_) {}
    const tintOf = () => {
        const v = $('#visitor');
        return v && v.classList.contains('lilac') ? 'lilac' : v && v.classList.contains('sky') ? 'sky' : 'mint';
    };
    const peers = new Map();

    /* ---- transports ---- */
    const subs = [];
    const on = fn => subs.push(fn);
    const bc = ('BroadcastChannel' in window) ? new BroadcastChannel('jessa-presence') : null;
    if (bc) bc.onmessage = e => subs.forEach(fn => fn(e.data));
    /* Automated browsers (tests, most bots) and local copies of the site stay invisible: they can read
       the live data (cursors, comments, counts) but never show up as a visitor or bump a counter. */
    const quiet = navigator.webdriver || /^(localhost|127\.|192\.168\.|10\.|\[::1\])/.test(location.hostname) || location.protocol === 'file:';
    let skew = 0;
    const clock = () => Date.now() + skew;
    let fb = null,
        fbRef = null,
        listenCur = () => {};
    const curKey = () => (me.page || 'app.html').replace(/[.#$\[\]\/]/g, '-').slice(0, 60);
    let dbResolve;
    window.__fbReady = new Promise(r => dbResolve = r);

    function send(msg) {
        if (bc) bc.postMessage(msg);
        if (fb) fb.push(msg);
    }
    async function connectFirebase(cfg) {
        const load = src => new Promise(r => {
            const s = document.createElement('script');
            s.src = src;
            s.onload = r;
            document.head.appendChild(s);
        });
        await load('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
        await load('https://www.gstatic.com/firebasejs/10.12.0/firebase-database-compat.js');
        const app = firebase.initializeApp(cfg);
        const db = firebase.database();
        dbResolve(db);
        db.ref('.info/serverTimeOffset').on('value', snap => {
            skew = snap.val() || 0;
        }); // judge freshness on Firebase's clock, not this computer's
        // leaving marks the record 'bye' instead of deleting it: the database only lets a record be deleted once it's a minute stale
        // presence2: the visitor list moved here on Oct 20 2026, so tabs still running the old code (which re-downloaded the whole list
        // on every change) were cut off by closing the old 'presence' path
        const ref = db.ref('presence2/' + me.id);
        if (!quiet) ref.onDisconnect().update({
            type: 'bye'
        });
        fbRef = db.ref('presence2');
        // 'dur' (visit length) needs the newer database rules; if they aren't published yet, drop it and carry on
        let noDur = false;
        const put = msg => {
            const v = msg.type === 'bye' ? {
                id: me.id,
                type: 'bye',
                t: clock()
            } : (noDur ? (({
                dur,
                ...rest
            }) => rest)(msg) : msg);
            return ref.set(v);
        };
        const sendNow = msg => put(msg).catch(() => {
            if (noDur || msg.dur == null) return;
            noDur = true;
            put(msg).catch(() => {});
        });
        // Two streams. The site-wide list (presence/<id>: who, which page, away or not) only changes when something about
        // you changes, or every 8s to say you're still here; that's all the dots need. Your mouse goes to cursors/<page>/<id>
        // at most 5 times a second, so only people on the same page (the only ones who can see your cursor) download it.
        // If the database rules don't allow cursors/ yet, it quietly falls back to sending everything in your presence record.
        const throttle = (fn, gap) => {
            let last = 0,
                later = 0,
                next = null;
            return v => {
                next = v;
                const wait = gap - (performance.now() - last);
                if (wait <= 0) {
                    last = performance.now();
                    next = null;
                    fn(v);
                } else if (!later) later = setTimeout(() => {
                    later = 0;
                    if (next) {
                        last = performance.now();
                        const n = next;
                        next = null;
                        fn(n);
                    }
                }, wait);
            };
        };
        const sendFull = throttle(sendNow, 200);
        let curOK = null,
            curAt = '',
            rosterSig = '',
            rosterAt = 0;
        const sendCur = throttle(v => {
            const r = db.ref('cursors/' + curAt + '/' + me.id);
            r.set(v).then(() => {
                if (curOK === null) {
                    curOK = true;
                    r.onDisconnect().remove();
                }
            }).catch(() => {
                curOK = false;
                sendFull({
                    type: 'here',
                    ...me
                });
            });
        }, 200);
        const leaveCur = () => {
            if (curAt && curOK) db.ref('cursors/' + curAt + '/' + me.id).remove().catch(() => {});
        };
        if (!quiet) fb = {
            push: msg => {
                if (msg.type === 'bye') {
                    leaveCur();
                    sendNow(msg);
                    return;
                }
                if (curOK === false) {
                    sendFull(msg);
                    return;
                } // the old way, until the new rule is published
                const key = curKey();
                if (key !== curAt) {
                    leaveCur();
                    curAt = key;
                    if (curOK) db.ref('cursors/' + curAt + '/' + me.id).onDisconnect().remove();
                }
                if (!msg.touch) sendCur({
                    x: Math.round(msg.x * 10000) / 10000,
                    y: Math.round(msg.y),
                    t: clock()
                });
                const {
                    x,
                    y,
                    ...roster
                } = msg, sig = [roster.name, roster.tint, roster.page, roster.touch, !!roster.bg, (roster.idle || 0) > 60000].join('|');
                if (sig !== rosterSig || performance.now() - rosterAt > 8000) {
                    rosterSig = sig;
                    rosterAt = performance.now();
                    sendNow(curOK === null ? msg : roster);
                }
            }
        };
        // visits: +1 once per browser session, shown on the home page
        const views = db.ref('stats/views');
        // visits per day too (the day in Jessa's time zone, on Firebase's clock), for the admin page's today / yesterday / day before
        function countDay() {
            setTimeout(() => {
                const day = new Date(clock()).toLocaleDateString('en-CA', {
                    timeZone: 'America/New_York'
                });
                db.ref('stats/daily/' + day).transaction(n => (n || 0) + 1).catch(() => {});
            }, 1500);
        }
        try {
            if (quiet) {} else if (!sessionStorage.getItem('counted')) {
                sessionStorage.setItem('counted', '1');
                views.transaction(n => (n || 0) + 1);
                countDay();
            }
        } catch (_) {
            if (!quiet) {
                views.transaction(n => (n || 0) + 1);
                countDay();
            }
        }
        views.on('value', snap => {
            const el = document.getElementById('views');
            if (!el) return;
            const n = snap.val() || 0;
            el.textContent = n.toLocaleString() + (n === 1 ? ' visit so far' : ' visits so far');
            el.classList.add('on');
        });
        // views per page: +1 once per session per page (harbor, somnar, home ...)
        const pageKey = (location.pathname.split('/').pop() || 'app.html').replace(/\.html$/, '').replace(/^app$/, 'home');
        try {
            if (!quiet && !sessionStorage.getItem('pv:' + pageKey)) {
                sessionStorage.setItem('pv:' + pageKey, '1');
                db.ref('stats/pages/' + pageKey).transaction(n => (n || 0) + 1);
            }
        } catch (_) {}
        // résumé downloads: +1 once per session when someone clicks a download link (Jessa sees the total on the admin page)
        document.addEventListener('click', e => {
            if (quiet || !e.target.closest('a[href$="Jessa-Wolfe-Resume.pdf"]')) return;
            try {
                if (sessionStorage.getItem('dl:resume')) return;
                sessionStorage.setItem('dl:resume', '1');
            } catch (_) {}
            db.ref('stats/downloads/resume').transaction(n => (n || 0) + 1);
        });
        // work tiles: a little view count, and a hand-drawn fire on the most viewed
        const FIRE = '<svg class="fire" viewBox="0 0 24 24" aria-hidden="true"><path class="f1" d="M12 2.5c.4 3.2-1.2 4.9-2.6 6.4C7.8 10.6 6 12.1 6 15a6 6 0 0 0 12 0c0-2.4-1.3-3.9-2.4-5.3-.5 1.3-1.2 2-2 2.5.3-3.2-.3-6-1.6-9.7Z"/><path class="f2" d="M12 11.8c-1.6 1.6-2.8 2.8-2.8 4.6a2.8 2.8 0 0 0 5.6 0c0-1.8-1.2-3-2.8-4.6Z"/></svg>';
        db.ref('stats/pages').on('value', snap => {
            const all = snap.val() || {};
            const tiles = [...document.querySelectorAll('#grid .tile[href]')];
            if (!tiles.length) return;
            let best = null,
                bestN = 0;
            tiles.forEach(t => {
                const k = t.getAttribute('href').replace(/\.html.*$/, '');
                const n = all[k] || 0;
                let v = t.querySelector('.tv');
                if (!v) {
                    v = document.createElement('span');
                    v.className = 'tv';
                    t.appendChild(v);
                }
                v.textContent = n === 1 ? '1 view' : n.toLocaleString() + ' views';
                v.classList.toggle('on', n > 0);
                if (n > bestN) {
                    bestN = n;
                    best = t;
                }
            });
            tiles.forEach(t => {
                const h = t.querySelector('.hot');
                if (t === best && bestN > 0) {
                    if (!h) {
                        const b = document.createElement('span');
                        b.className = 'hot';
                        b.innerHTML = FIRE + '<i>most viewed</i>';
                        t.appendChild(b);
                        requestAnimationFrame(() => requestAnimationFrame(() => b.classList.add('in')));
                    }
                } else if (h) h.remove();
            });
        });
        // one visitor moving sends just their own record to everyone, not the whole list
        const pres = db.ref('presence2'),
            got = c => {
                const m = c.val();
                if (m && m.id !== me.id) subs.forEach(fn => fn({ ...m,
                    viaFb: 1
                }));
                const p = peers.get(c.key);
                if (p && p.viaFb) p.missing = 0;
            };
        pres.on('child_added', got);
        pres.on('child_changed', got);
        pres.on('child_removed', c => {
            const p = peers.get(c.key);
            if (p && p.viaFb) p.missing = p.missing || Date.now();
        });
        // cursors: only the page I'm on
        const gotCur = c => {
            const v = c.val(),
                p = peers.get(c.key);
            if (!v || c.key === me.id || !p || !p.data) return;
            p.data = { ...p.data,
                x: v.x,
                y: v.y
            };
            paint(c.key, p);
        };
        let curSub = null;
        listenCur = () => {
            if (curSub) curSub.off();
            curSub = db.ref('cursors/' + curKey());
            curSub.on('child_added', gotCur, () => {});
            curSub.on('child_changed', gotCur, () => {});
        };
        listenCur();
    }
    if (window.PRESENCE_FIREBASE) connectFirebase(window.PRESENCE_FIREBASE).catch(() => {});

    /* ---- shared stickers: a stamp shows up for everyone on the same page for a few seconds, then fades ---- */
    const STICKERS = /^(star|sparkles|heart|fire|clap|hearteyes|rainbow|pup|eyes|idea)$/;
    const stampKey = () => (location.pathname.split('/').pop() + (location.pathname.endsWith('app.html') ? (location.hash || '#home') : '')).replace(/[.#$\[\]\/]/g, '-').slice(0, 60);
    let stampRef = null,
        stampDb = null,
        lastStamp = 0,
        sentStamps = 0;
    const mineStamps = new Set();

    function showStamp(v) {
        const layer = $('#play') || $('.play');
        if (!layer || !STICKERS.test(v.k || '')) return;
        const el = document.createElement('div');
        el.className = 'ustamp shared-stamp';
        el.style.left = (v.x * layer.offsetWidth - 34) + 'px';
        el.style.top = (v.y - 34) + 'px';
        el.style.setProperty('--rot', (v.r || 0) + 'deg');
        const img = document.createElement('img');
        img.src = `image/stickers/${v.k}.png`;
        img.alt = '';
        el.appendChild(img);
        if (v.n) {
            const tag = document.createElement('span');
            tag.className = 'who';
            tag.textContent = v.n;
            el.appendChild(tag);
        }
        layer.appendChild(el);
        setTimeout(() => el.classList.add('bye'), 5200);
        setTimeout(() => el.remove(), 6200);
    }

    function listenStamps() {
        if (!stampDb) return;
        if (stampRef) stampRef.off();
        stampRef = stampDb.ref('stamps/' + stampKey());
        const t0 = clock();
        stampRef.limitToLast(20).on('child_added', snap => {
            const v = snap.val() || {};
            const age = clock() - (v.t || 0);
            if (age > 120000) {
                snap.ref.remove().catch(() => {});
                return;
            } // tidy old ones (the rules allow it after a minute)
            if (mineStamps.has(snap.key) || v.t < t0 - 2000 || age > 8000) return; // only fresh ones, never my own echo
            showStamp(v);
        });
    }
    window.__fbReady && window.__fbReady.then(db => {
        stampDb = db;
        listenStamps();
    });
    // demo for a local copy (add ?sdemo to the address): pretend visitors stamp stickers every so often. Nothing is read or written.
    if (quiet && /[?&]sdemo\b/.test(location.search)) {
        const K = ['star', 'sparkles', 'heart', 'fire', 'clap', 'hearteyes', 'rainbow', 'pup', 'eyes', 'idea'],
            N = ['Dreamer', 'Wanderer', 'Hiring?', 'Designer?', 'Curious one', 'Explorer', 'Maker'];
        const any = a => a[Math.floor(Math.random() * a.length)];
        setInterval(() => showStamp({
            k: any(K),
            x: .15 + Math.random() * .7,
            y: scrollY + 120 + Math.random() * (innerHeight - 320),
            r: Math.round(Math.random() * 36 - 18),
            n: any(N)
        }), 1400);
    }
    document.addEventListener('page:change', () => setTimeout(listenStamps, 120));
    // pen drawings: saved privately for Jessa (the database lets anyone add one, but only she can read them)
    let sentStrokes = 0,
        lastStroke = 0;
    document.addEventListener('play:draw', e => {
        const pts = (e.detail || {}).pts || [],
            now = Date.now();
        if (quiet || !stampDb || pts.length < 1 || sentStrokes >= 80 || now - lastStroke < 150) return;
        lastStroke = now;
        sentStrokes++;
        const step = Math.max(1, Math.ceil(pts.length / 240)); // at most ~240 points a stroke
        const p = pts.filter((_, i) => i % step === 0 || i === pts.length - 1).map(([x, y]) => Math.round(Math.min(Math.max(x, 0), 1) * 1000) + ',' + Math.max(Math.round(y), 0)).join(' ');
        stampDb.ref('drawings/' + stampKey()).push().set({
            s: me.id,
            n: (me.name || '').slice(0, 24),
            p: p.slice(0, 4000),
            w: Math.round(canvas.getBoundingClientRect().width),
            t: clock()
        }).catch(() => {});
    });
    document.addEventListener('play:stamp', e => {
        const d = e.detail || {},
            now = Date.now();
        if (quiet || !stampDb || !STICKERS.test(d.k || '') || now - lastStamp < 200 || sentStamps >= 60) return; // a little rate limit
        lastStamp = now;
        sentStamps++;
        const ref = stampDb.ref('stamps/' + stampKey()).push();
        mineStamps.add(ref.key);
        ref.set({
            k: d.k,
            x: Math.min(Math.max(d.x, 0), 1),
            y: Math.max(Math.round(d.y), 0),
            r: Math.round(d.r || 0),
            t: clock(),
            n: (me.name || '').slice(0, 24)
        }).catch(() => {});
    });

    /* ---- my broadcast ---- */
    const rect = () => canvas.getBoundingClientRect();
    let lastSend = 0,
        dirty = false;
    addEventListener('pointermove', e => {
        if (touchOnly) return;
        const r = rect();
        me.x = (e.clientX - r.left) / r.width;
        me.y = e.clientY - r.top;
        dirty = true;
    }, {
        passive: true
    });
    // away: no mouse, touch, keys or scrolling for a minute. Others hide my cursor (my dot stays) until I'm back.
    const AFK = 60000;
    let lastAct = Date.now();
    ['pointermove', 'pointerdown', 'keydown', 'wheel', 'scroll', 'touchstart'].forEach(ev => addEventListener(ev, () => {
        if (Date.now() - lastAct > AFK) dirty = true;
        lastAct = Date.now();
    }, {
        passive: true
    }));

    function beat(force) {
        const now = performance.now();
        if (!force && !dirty && now - lastSend < 2000) return;
        if (!force && dirty && now - lastSend < 70) return;
        lastSend = now;
        dirty = false;
        me.tint = tintOf();
        me.name = ($('#visitorName') || {}).textContent || me.name;
        me.t = clock();
        me.idle = Date.now() - lastAct;
        me.dur = Date.now() - visitStart;
        send({
            type: 'here',
            ...me
        });
    }
    setInterval(() => beat(false), 70);
    addEventListener('pagehide', () => send({
        type: 'bye',
        id: me.id
    }));
    document.addEventListener('visibilitychange', () => {
        me.bg = document.hidden;
        beat(true);
    });
    document.addEventListener('page:change', () => setTimeout(() => {
        me.page = location.pathname.split('/').pop() + location.hash;
        beat(true);
        listenCur();
        peers.forEach((p, id) => p.data && paint(id, p));
    }, 100));

    /* ---- others ---- */
    on(m => {
        if (!m || m.id === me.id) return;
        if (m.type === 'bye') {
            drop(m.id);
            if (fbRef && m.t && clock() - m.t > 120000) fbRef.child(m.id).remove().catch(() => {});
            return;
        }
        if ((m.idle || 0) > 86400000) {
            drop(m.id);
            return;
        } // a tab left open but untouched for over a day: not really here, so no dot
        const age = m.t ? clock() - m.t : 0;
        if (age > limit(m)) {
            drop(m.id);
            if (fbRef && age > 120000) fbRef.child(m.id).remove().catch(() => {});
            return;
        } // left without saying bye: hide now, tidy the record once it's clearly abandoned
        let p = peers.get(m.id);
        if (!p) {
            p = {
                el: null,
                dot: null,
                seen: 0,
                first: Date.now()
            };
            peers.set(m.id, p);
        }
        p.seen = Date.now();
        p.data = { ...(p.data || {}),
            ...m
        }; // a presence record without a position keeps the last one from cursors/
        if (m.viaFb && !m.bot) p.viaFb = true; // heard through Firebase: judged by its own timestamp, not by how often it updates
        paint(m.id, p);
    });
    const away = m => (m.idle || 0) > 60000 || !!m.bg;
    const limit = m => m.bg ? 150000 : 20000;

    function paint(id, p) {
        const m = p.data;
        const same = m.page === me.page;
        // dot beside the people circles
        const people = $('.people');
        if (people && !p.dot) {
            p.dot = document.createElement('div');
            p.dot.className = 'dot peer';
            p.dot.innerHTML = '<span></span><span class="lbl"></span>';
            people.appendChild(p.dot);
            crowd();
        }
        if (p.dot && !p.dot.dataset.id) {
            p.dot.dataset.id = id;
            p.dot.setAttribute('role', 'button');
            p.dot.tabIndex = 0;
            p.dot.addEventListener('click', () => find(id));
            p.dot.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    find(id);
                }
            });
        }
        if (p.dot) {
            p.dot.className = 'dot peer ' + m.tint + (p.dot.classList.contains('over') ? ' over' : '') + (away(m) ? ' away' : '');
            $('span', p.dot).textContent = (m.name || '?')[0];
            $('.lbl', p.dot).textContent = `${m.touch ? m.name + ' is ' : 'Find ' + m.name + ' '}${same ? (m.touch ? 'here' : 'on this page') : 'on ' + pageName(m.page)}${m.touch ? ' (on a phone)' : ''}${away(m) ? ' (away)' : ''}`;
        }
        if (p.wasAway !== away(m)) {
            p.wasAway = away(m);
            if (p.dot) p.dot.classList.toggle('away', p.wasAway);
            crowd();
        } // active people up front, away ones to the back
        // cursor on the canvas, only when on the same page
        if (!same || m.touch || m.x == null) {
            if (p.el) {
                p.el.remove();
                p.el = null;
            }
            return;
        } // other page, or on a phone: dot only
        if (!p.el) {
            p.el = document.createElement('div');
            p.el.className = 'cur peer-cur';
            p.el.innerHTML = $('#visitor .tipv').outerHTML + '<div class="bub"></div>';
            (play || canvas).appendChild(p.el);
        }
        p.el.className = 'cur peer-cur show ' + m.tint + (p.el.classList.contains('found') ? ' found' : '') + (p.el.classList.contains('tap') ? ' tap' : '');
        $('.bub', p.el).textContent = m.name;
        p.el.style.opacity = away(m) && !p.el.classList.contains('found') ? '0' : ''; // away: cursor fades out, comes back when they move
        const r = rect();
        p.el.style.transform = `translate(${m.x * r.width}px, ${m.y}px)`;
        if (pending() === id) {
            try {
                sessionStorage.removeItem('find');
            } catch (_) {}
            setTimeout(() => locate(id), 350);
        }
    }

    /* ---- click a person's dot: go to their page, scroll to their cursor, give it a wave ---- */
    const NAMES = {
        'app.html': 'Home',
        'resume.html': 'my résumé',
        'acv-drops.html': 'ACV Drops',
        'fisher-price.html': 'Fisher-Price',
        'harbor-flows.html': 'Harbor flows',
        'somnar-flows.html': 'Somnar flows',
        'indent-flows.html': 'Indent flows'
    };

    function pageName(pg) {
        pg = pg || '';
        const [file, hash] = pg.split('#');
        if (file === 'app.html' && hash) return {
            about: 'About',
            work: 'Work',
            talks: 'Talks',
            hi: 'Say hi',
            guestbook: 'the guestbook',
            home: 'Home'
        }[hash] || hash;
        if (NAMES[file]) return NAMES[file];
        const b = file.replace(/\.html$/, '');
        return b ? b[0].toUpperCase() + b.slice(1) : 'the site';
    }

    function pending() {
        try {
            const v = JSON.parse(sessionStorage.getItem('find') || 'null');
            return v && Date.now() - v.t < 15000 ? v.id : null;
        } catch (_) {
            return null;
        }
    }

    function locate(id) {
        const p = peers.get(id);
        if (!p || !p.el) return;
        const r = rect(),
            y = scrollY + r.top + p.data.y;
        scrollTo({
            top: Math.max(0, y - innerHeight / 2),
            behavior: 'smooth'
        });
        p.el.classList.remove('found');
        void p.el.offsetWidth;
        p.el.classList.add('found');
        p.el.style.opacity = '';
        clearTimeout(p.foundT);
        p.foundT = setTimeout(() => {
            if (!p.el) return;
            p.el.classList.remove('found');
            if (away(p.data)) p.el.style.opacity = '0';
        }, 3200);
    }

    function find(id) {
        const p = peers.get(id);
        if (!p) return;
        const m = p.data;
        if (m.page === me.page) {
            locate(id);
            return;
        }
        try {
            sessionStorage.setItem('find', JSON.stringify({
                id,
                t: Date.now()
            }));
        } catch (_) {}
        const [file, hash] = (m.page || '').split('#');
        const here = location.pathname.split('/').pop();
        if (file === 'app.html' && here === 'app.html') { // same app, different section: use the page pill
            const chip = document.querySelector(`.pages .chip[data-page="${hash || 'home'}"]`);
            if (chip) {
                chip.click();
                return;
            }
        }
        location.href = file + (hash ? '#' + hash : '') + location.search;
    }
    // arriving on their page: wait for them to show up, then find them
    if (pending()) {
        const id = pending();
        const tick = setInterval(() => {
            const p = peers.get(id);
            if (p && p.el) {
                clearInterval(tick);
                try {
                    sessionStorage.removeItem('find');
                } catch (_) {}
                setTimeout(() => locate(id), 600);
            }
        }, 250);
        setTimeout(() => clearInterval(tick), 15000);
    }
    // keep the people row short: J + you + a few others, then a "+N" bubble for the rest (3 dots total on phones)
    function crowd() {
        const people = $('.people');
        if (!people) return;
        const rank = d => {
            const p = peers.get(d.dataset.id) || {};
            return [p.data && away(p.data) ? 1 : 0, -(p.first || 0)];
        };
        const dots = [...people.querySelectorAll('.dot.peer')].sort((a, b) => {
            const x = rank(a),
                y = rank(b);
            return x[0] - y[0] || x[1] - y[1];
        });
        dots.forEach((d, i) => {
            d.style.order = i + 1;
        }); // reorder with flex order, not DOM moves (moving would replay each dot's pop-in)
        const room = matchMedia('(max-width: 860px)').matches ? 1 : 8; // phones: J + you + 1, desktop: up to 10 dots, then +N
        dots.forEach((d, i) => d.classList.toggle('over', i >= room));
        const extra = Math.max(0, dots.length - room);
        let more = people.querySelector('.dot.more');
        if (!extra) {
            more && more.remove();
            return;
        }
        if (!more) {
            more = document.createElement('div');
            more.className = 'dot more';
            more.innerHTML = '<span></span><span class="lbl"></span>';
        }
        more.style.order = 9999;
        people.appendChild(more);
        more.firstChild.textContent = '+' + extra;
        more.querySelector('.lbl').textContent = extra + (extra === 1 ? ' other person is' : ' other people are') + ' here too';
    }
    addEventListener('resize', crowd);

    function drop(id) {
        const p = peers.get(id);
        if (!p) return;
        p.el && p.el.remove();
        p.dot && p.dot.remove();
        peers.delete(id);
        crowd();
    }
    setInterval(() => {
        const now = Date.now();
        peers.forEach((p, id) => {
            if (p.viaFb) {
                if ((p.data && p.data.t && clock() - p.data.t > limit(p.data)) || (p.missing && now - p.missing > 6000)) drop(id);
            } else if (now - p.seen > 6000) drop(id);
        });
    }, 2000);

    /* ---- pretend visitors: a few made-up people drift around and wander between pages. They live only in this
       browser (fed straight to the same painter real visitors use), never touch Firebase, never count as a visit. ---- */
    (() => {
        const POOL = ['Dreamer', 'Seeker', 'Wanderer', 'Maker', 'Curious one', 'Friend', 'New here', 'Explorer', 'Hiring?', 'Designer?', 'Lurker', 'Night owl', 'Pixel fan', 'Tinkerer', 'Builder', 'Visitor', 'Quiet one', 'Admirer', 'Researcher', 'Kindred'];
        const PAGES = ['app.html#home', 'app.html#about', 'app.html#work', 'app.html#talks', 'app.html#hi', 'app.html#guestbook', 'harbor.html', 'somnar.html', 'indent.html', 'resume.html', 'acv-drops.html', 'flourish.html', 'fisher-price.html', 'harbor-flows.html'];
        const TINTS = ['mint', 'lilac', 'sky'];
        const any = a => a[Math.floor(Math.random() * a.length)],
            rnd = (a, b) => a + Math.random() * (b - a);
        // each bot is on a page of its own; it only shares yours when it happens to be on the same one (it never follows you around)
        const norm = pg => /^app\.html#?$/.test(pg || '') ? 'app.html#home' : pg;
        const herePage = () => norm(me.page),
            isHere = b => norm(b.page) === herePage();
        const elsewhere = (not = herePage()) => {
            let pg;
            do pg = any(PAGES); while (pg === not);
            return pg;
        };

        function born() {
            const used = new Set(bots.map(b => b.name[0]));
            let name, n = 0;
            do name = any(POOL); while (used.has(name[0]) && ++n < 20); // different first letters, so the dots don't all say D
            return {
                id: 'b' + Math.random().toString(36).slice(2, 9),
                name,
                tint: any(TINTS),
                page: Math.random() < .5 ? herePage() : elsewhere(),
                x: rnd(.15, .85),
                y: 0,
                tx: .5,
                ty: 0,
                v: rnd(.03, .07),
                pause: 0,
                idleUntil: 0,
                next: Date.now() + rnd(8000, 30000)
            };
        }
        let bots = [];
        try {
            bots = JSON.parse(sessionStorage.getItem('bots') || '[]');
        } catch (_) {} // same crowd follows you from page to page
        const fresh = !bots.length;
        if (fresh) {
            const n = 1 + Math.floor(Math.random() * 5);
            for (let i = 0; i < n; i++) bots.push(born());
        }
        const f = pending();
        bots.forEach(b => {
            if (b.id === f) b.page = herePage();
        }); // clicked a bot's dot on another page: you went to them
        const save = () => {
            try {
                sessionStorage.setItem('bots', JSON.stringify(bots));
            } catch (_) {}
        };
        const view = () => {
            const r = rect(),
                h = canvas.offsetHeight || innerHeight;
            const top = Math.max(0, -r.top);
            return [top + 60, Math.min(h - 40, top + innerHeight - 120)];
        };
        const aim = b => {
            const [a, z] = view();
            b.tx = rnd(.08, .92);
            b.ty = rnd(a, Math.max(a + 40, z));
        };
        bots.forEach(b => {
            if (!b.y) {
                aim(b);
                b.x = b.tx;
                b.y = b.ty;
            }
            b.m = null;
            b.pause = 0;
        });
        const W = () => rect().width || innerWidth;
        // things worth hovering: what's on screen and clickable, never another cursor or the people dots
        const HOV = 'a[href], button, .chip, .tile, [role="button"]';

        function target() {
            const els = $$(HOV).filter(e => {
                if (e.closest('.cur, .people, [hidden]')) return false;
                const q = e.getBoundingClientRect();
                return q.width > 14 && q.height > 14 && q.width < innerWidth * .8 && q.top > 50 && q.bottom < innerHeight - 10 && q.left > 0 && q.right < innerWidth && getComputedStyle(e).visibility !== 'hidden';
            });
            return els.length ? any(els) : null;
        }
        // where a link goes, as a page name the dots understand (app.html#about, harbor.html ...)
        function dest(e) {
            const pg = e.dataset && e.dataset.page;
            if (pg) return 'app.html#' + pg;
            const h = (e.getAttribute && e.getAttribute('href')) || '';
            if (!h || /^(https?:|mailto:|tel:)/.test(h) || /\.pdf$/.test(h)) return null;
            const f = h.split(/[?#]/)[0];
            if (/\.html$/.test(f)) return f === 'app.html' && h.includes('#') ? 'app.html#' + h.split('#')[1] : f;
            if (h.startsWith('#') && h.length > 1) return 'app.html' + h;
            return null;
        }

        function tap(b) {
            const p = peers.get(b.id);
            if (!p || !p.el) return;
            p.el.classList.remove('tap');
            void p.el.offsetWidth;
            p.el.classList.add('tap');
            clearTimeout(p.tapT);
            p.tapT = setTimeout(() => p.el && p.el.classList.remove('tap'), 520);
        }

        function stroke(b, now) {
            const w = W(),
                [a, z] = view(),
                sx = b.x * w,
                sy = b.y;
            let ex, ey;
            const roll = Math.random(),
                r = rect(),
                h = canvas.offsetHeight || innerHeight;
            if (roll < .22 && h > innerHeight * 1.3) { // just scrolling: the arrow rides down (or back up) the page with the content
                const dy = rnd(250, 900) * (Math.random() < .75 ? 1 : -1),
                    ey2 = Math.min(Math.max(sy + dy, 20), h - 40);
                b.m = {
                    sx,
                    sy,
                    ex: sx + rnd(-30, 30),
                    ey: ey2,
                    cx: sx + rnd(-20, 20),
                    cy: (sy + ey2) / 2,
                    t0: now,
                    dur: rnd(900, 2400),
                    scroll: true
                };
                return;
            }
            const el = roll < .45 && target();
            if (el) {
                const q = el.getBoundingClientRect();
                ex = q.left - r.left + q.width * rnd(.3, .7);
                ey = q.top - r.top + q.height * rnd(.3, .7);
            } // drift over a button, a tile, the toolbar
            else if (Math.random() < .4) {
                ex = sx + rnd(-140, 140);
                ey = sy + rnd(-90, 90);
            } // a nudge nearby
            else {
                ex = rnd(.06, .94) * w;
                ey = rnd(a, Math.max(a + 40, z));
            } // or a dash across the page
            ex = Math.min(Math.max(ex, 10), w - 10);
            ey = Math.max(ey, 10);
            const d = Math.hypot(ex - sx, ey - sy) || 1,
                k = rnd(-.22, .22) * d;
            b.m = {
                sx,
                sy,
                ex,
                ey,
                cx: (sx + ex) / 2 - (ey - sy) / d * k,
                cy: (sy + ey) / 2 + (ex - sx) / d * k,
                t0: now,
                dur: Math.min(160 + d * rnd(.3, .6), 900),
                el
            };
        }
        const emit = b => subs.forEach(fn => fn({
            type: 'here',
            bot: true,
            id: b.id,
            name: b.name,
            tint: b.tint,
            x: b.x,
            y: b.y,
            page: isHere(b) ? me.page : b.page,
            t: clock(),
            touch: false,
            idle: Date.now() < b.idleUntil ? 61000 : 0,
            bg: false
        }));
        setInterval(() => {
            const now = Date.now();
            bots.forEach((b, i) => {
                if (now > b.next) { // every so often: change pages, step away, or leave and someone new arrives
                    const r = Math.random();
                    if (r < .12) {
                        subs.forEach(fn => fn({
                            type: 'bye',
                            id: b.id
                        }));
                        bots[i] = born();
                        save();
                        return;
                    }
                    if (r < .25) b.idleUntil = now + rnd(20000, 70000);
                    else {
                        b.page = Math.random() < .3 ? herePage() : elsewhere(norm(b.page));
                        aim(b); // wander to a new page (now and then, the one you're on)
                        b.x = b.tx;
                        b.y = b.ty;
                        b.m = null;
                    }
                    b.next = now + rnd(8000, 30000);
                    save();
                }
                if (isHere(b) && now > b.idleUntil) {
                    if (b.m) { // mid-flick: a quick curved stroke that speeds up then settles, like a hand
                        const m = b.m,
                            q = Math.min(1, (now - m.t0) / m.dur),
                            e = m.scroll ? q + Math.sin(q * Math.PI * 6) * .012 : q * q * q * (10 - 15 * q + 6 * q * q),
                            u = 1 - e; // scrolling: steady, a little wheel-notchy
                        const px = u * u * m.sx + 2 * u * e * m.cx + e * e * m.ex,
                            py = u * u * m.sy + 2 * u * e * m.cy + e * e * m.ey;
                        b.x = px / W();
                        b.y = py;
                        if (q >= 1) {
                            b.on = m.el && m.el.isConnected ? m.el : null;
                            b.m = null;
                            b.pause = now + (b.on ? rnd(900, 3200) : Math.random() < .55 ? rnd(60, 450) : rnd(700, 2600));
                        } // often a quick follow-up, sometimes a read; on a button, a longer hover
                    } else if (now > b.pause) {
                        const go = b.on && dest(b.on);
                        if (go && go !== me.page && !(go === 'app.html#home' && me.page === 'app.html') && Math.random() < .35) { // sometimes they click it and head off there
                            tap(b);
                            b.on = null;
                            b.pause = now + 1e9;
                            setTimeout(() => {
                                b.page = norm(go);
                                b.pause = 0;
                                b.next = Date.now() + rnd(8000, 30000);
                                save();
                            }, 380);
                        } else {
                            if (b.on && Math.random() < .25) tap(b);
                            b.on = null;
                            stroke(b, now);
                        } // or a click that stays put, then move on
                    } else if (Math.random() < .15) {
                        b.x += rnd(-.6, .6) / W();
                        b.y += rnd(-.6, .6);
                    } // a resting hand still twitches a little
                }
                emit(b);
            });
        }, 40);
        if (fresh && !bots.some(isHere)) any(bots).page = herePage(); // a brand new crowd: someone's already here when you arrive
        save();
        document.addEventListener('page:change', () => setTimeout(() => {
            bots.forEach(b => {
                aim(b);
                b.x = b.tx;
                b.y = b.ty;
                b.m = null;
            });
            save();
        }, 120)); // you moved; they didn't
        addEventListener('pagehide', save);
    })();
    beat(true);
})();