/* Comments on the work: a visitor drops a note with the comment tool, it goes to Jessa's holding area pinned to
   the frame it sits on, and once approved it lists in the Comments panel for everyone (and pins to that spot). */
(() => {
    const $ = (s, r = document) => r.querySelector(s),
        $$ = (s, r = document) => [...r.querySelectorAll(s)];
    const canvas = $('.canvas');
    if (!canvas) return;
    const layer = document.createElement('div');
    layer.className = 'shared';
    layer.id = 'shared';
    canvas.appendChild(layer);
    const COLORS = ['var(--butter)', 'var(--blush)', 'var(--mint)', 'var(--sky)', 'var(--lilac)', 'var(--peach)'];
    const hash = s => {
        let h = 7;
        for (const ch of String(s)) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
        return h;
    };
    const BAD = /\b(fuck|shit|bitch|cunt|asshole|dick|slut|whore|fag|nigg|retard|kys|kill yourself)\w*/i;
    const LINK = /(https?:\/\/|www\.|\.com\b|\.net\b|\.org\b|\.io\b|@\w+\.\w+|\b\d{3}[-. ]\d{3}[-. ]\d{4}\b)/i;
    const file = (location.pathname.split('/').pop() || 'app.html').replace(/\.html$/, '').replace(/^app$/, 'home');
    const pageKey = () => (file === 'home' ? 'home-' + (location.hash.slice(1) || 'home') : file).replace(/[^a-z0-9-]/gi, '-');
    const pageOf = () => file === 'home' ? $(`.page[data-page="${location.hash.slice(1) || 'home'}"]`) || canvas : canvas;
    const crect = () => canvas.getBoundingClientRect();
    // the sketchbook's pages are its frames; a note on a page that's turned away waits until it's open again
    const FR = document.body.classList.contains('book') ? '.face[data-name]' : '.slot',
        onPage = s => !window.__bookOpen || window.__bookOpen(s);

    // where a note sits, as a fraction of the frame under it (so it lands in the same place on any screen)
    function anchorFor(el) {
        const r = el.getBoundingClientRect(),
            cx = r.left + r.width / 2,
            cy = r.top + r.height / 2;
        const slots = $$(FR, pageOf()).filter(s => s.dataset.name && onPage(s));
        let best = null,
            bd = Infinity;
        for (const s of slots) {
            const b = s.getBoundingClientRect();
            if (!b.width) continue;
            const dx = Math.max(b.left - cx, 0, cx - b.right),
                dy = Math.max(b.top - cy, 0, cy - b.bottom);
            const d = Math.hypot(dx, dy);
            if (d < bd) {
                bd = d;
                best = s;
            }
        }
        if (best && bd < 240) {
            const b = best.getBoundingClientRect();
            return {
                anchor: best.dataset.name,
                fx: (cx - b.left) / b.width,
                fy: (cy - b.top) / b.height
            };
        }
        const c = crect();
        return {
            anchor: '',
            fx: (cx - c.left) / c.width,
            fy: cy - c.top
        };
    }

    function place(el, n) {
        const slot = n.anchor ? $$(FR, pageOf()).find(s => s.dataset.name === n.anchor) : null;
        const c = crect();
        if (FR !== '.slot') {
            el.style.display = slot && onPage(slot) ? '' : 'none';
            if (!slot || !onPage(slot)) return;
        }
        let x, y;
        if (slot && slot.getBoundingClientRect().width) {
            const b = slot.getBoundingClientRect();
            x = b.left + b.width * n.fx - c.left;
            y = b.top + b.height * n.fy - c.top;
        } else {
            x = c.width * n.fx;
            y = n.anchor ? c.height * .3 : n.fy;
        }
        // a note left in the margin on a wide screen can land off a narrower one: slide it in to the nearest edge
        const half = (el.offsetWidth || 222) / 2 + 14,
            vw = document.documentElement.clientWidth; // measured while hidden it reads 0
        const lo = half - c.left,
            hi = vw - half - c.left;
        x = hi < lo ? (lo + hi) / 2 : Math.min(Math.max(x, lo), hi);
        el.style.left = x + 'px';
        el.style.top = y + 'px';
        window.__avoidButtons && window.__avoidButtons(el);
    }

    function when(t) {
        if (!t) return '';
        const d = new Date(t),
            y = d.getFullYear() !== new Date().getFullYear();
        return d.toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            ...(y ? {
                year: 'numeric'
            } : {})
        }) + ' · ' + d.toLocaleTimeString(undefined, {
            hour: 'numeric',
            minute: '2-digit'
        });
    }
    const frameName = n => (n.anchor || '').replace(/^\d+\s*·\s*/, '');
    // on the canvas each comment is a small numbered pin where it was left; the one picked in the panel opens up into the full note
    function note(n, num, id) {
        const el = document.createElement('div');
        el.className = 'unote';
        el.dataset.id = id;
        const h = hash(n.name + n.t);
        el.style.setProperty('--c', COLORS[h % COLORS.length]);
        el.style.setProperty('--rot', ((h % 7) - 3) + 'deg');
        const nm = document.createElement('b');
        nm.className = 'nm';
        nm.textContent = num;
        const tx = document.createElement('span');
        tx.className = 'tx';
        tx.textContent = n.text;
        const s = document.createElement('small');
        s.textContent = when(n.t);
        el.append(nm, tx, s);
        el.addEventListener('click', () => pick(id, 'pin'));
        return el;
    }
    let notes = {},
        ref = null,
        db = null,
        open = false,
        active = null,
        likes = {},
        likeRef = null;
    const quiet = navigator.webdriver || /^(localhost|127\.|192\.168\.|10\.|\[::1\])/.test(location.hostname) || location.protocol === 'file:'; // tests and local copies never write
    const likedKey = id => 'liked:' + pageKey() + ':' + id;
    const iLiked = id => {
        try {
            return localStorage.getItem(likedKey(id)) === '1';
        } catch (_) {
            return false;
        }
    };
    const list = () => Object.entries(notes).sort((a, b) => (a[1].t || 0) - (b[1].t || 0)); // oldest first: numbers stay put as new ones arrive

    /* the panel: every comment on this page, newest on top, with its date and the frame it's on */
    const tb = $('.toolbar');
    const toggle = document.createElement('button');
    toggle.className = 'clear-pill cm-pill wob';
    toggle.type = 'button';
    tb && tb.appendChild(toggle);
    const panel = document.createElement('aside');
    panel.className = 'cpanel';
    panel.setAttribute('aria-label', 'Comments');
    panel.hidden = true;
    panel.innerHTML = '<div class="cp-head"><h3>Comments <span class="cp-n"></span></h3><button class="cp-x" type="button" aria-label="Close comments">×</button></div><div class="cp-list"></div>' +
        '<form class="cp-new"><div class="cp-box"><span class="cp-me" aria-hidden="true"></span><textarea name="t" maxlength="160" rows="1" placeholder="Let me know what you think" aria-label="Your comment"></textarea>' +
        '<button type="submit" class="cp-send" aria-label="Send comment"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 11.2 20 4l-6.6 16.4-2.6-6.7z"/><path d="M10.8 13.7 20 4"/></svg></button></div>' +
        '<div class="cp-row"><span class="cp-msg" aria-live="polite"></span><span class="cp-count"></span></div></form>';
    document.body.appendChild(panel);
    const plist = $('.cp-list', panel);

    function setOpen(v) {
        open = v;
        if (!v) active = null;
        // room at the bottom of the page while the bubble is open, so any comment can scroll up above it
        document.body.style.paddingBottom = v ? Math.round((panel.offsetHeight || 470) + 60) + 'px' : '';
        // the composer wears your cursor: its colour and its name bubble
        if (v) {
            const vis = $('#visitor'),
                tint = vis && vis.classList.contains('lilac') ? 'lilac' : vis && vis.classList.contains('sky') ? 'sky' : 'mint';
            panel.style.setProperty('--me-c', `var(--${tint})`);
            panel.style.setProperty('--me-cs', `var(--${tint}-deep)`);
            $('.cp-me', panel).textContent = ((($('#visitorName') || {}).textContent || '').trim()[0] || '♡').toUpperCase();
        }
        if (v) {
            panel.hidden = false;
            aim();
            requestAnimationFrame(() => panel.classList.add('in'));
        } else {
            panel.classList.remove('in');
            setTimeout(() => {
                if (!open) panel.hidden = true;
            }, 300);
        }
        sync();
        paintPins();
    }
    // sit just above the toolbar, centered on the Comments button where there's room, tail pointing at it
    function aim() {
        const b = toggle.getBoundingClientRect(),
            t = (tb || toggle).getBoundingClientRect(),
            w = panel.offsetWidth || 360,
            vw = document.documentElement.clientWidth;
        const left = Math.min(Math.max(b.left + b.width / 2 - w / 2, 18), vw - w - 18);
        panel.style.setProperty('--px', left + 'px');
        panel.style.setProperty('--pb', (innerHeight - t.top + 16) + 'px');
        panel.style.setProperty('--tx', Math.min(Math.max(b.left + b.width / 2 - left, 30), w - 30) + 'px');
    }
    addEventListener('resize', () => open && aim());
    toggle.addEventListener('click', () => setOpen(!open));
    $('.cp-x', panel).addEventListener('click', () => setOpen(false));
    addEventListener('keydown', e => {
        if (e.key === 'Escape' && open) setOpen(false);
    });
    // a click anywhere else closes it (clicks on the bubble, the button, or a comment's pin keep it open)
    document.addEventListener('pointerdown', e => {
        if (open && !e.target.closest('.cpanel, .cm-pill, .shared .unote')) setOpen(false);
    }, true);
    // the Comments button is always there (just "Comments" when empty), so anyone can open the bubble and leave the first one
    const sync = () => {
        const n = Object.keys(notes).length;
        toggle.classList.add('on');
        toggle.textContent = n ? 'Comments · ' + n : 'Comments';
        toggle.setAttribute('aria-expanded', open);
        layer.classList.toggle('off', !open);
        $('.cp-n', panel).textContent = n;
    };

    function renderPanel() {
        const items = list();
        plist.replaceChildren();
        if (!items.length) {
            const e = document.createElement('p');
            e.className = 'cp-empty';
            e.textContent = 'No comments here yet. Grab the comment tool and leave one.';
            plist.appendChild(e);
            return;
        }
        items.map((x, i) => [x, i + 1]).reverse().forEach(([
            [id, n], num
        ]) => {
            const c = document.createElement('div');
            c.className = 'cp-card';
            c.dataset.id = id;
            c.tabIndex = 0;
            c.setAttribute('role', 'button');
            c.style.setProperty('--c', COLORS[hash(n.name + n.t) % COLORS.length]);
            const top = document.createElement('span');
            top.className = 'cp-meta';
            const pin = document.createElement('b');
            pin.textContent = num;
            top.appendChild(pin);
            top.appendChild(document.createTextNode(when(n.t) + (frameName(n) ? ' · on ' + frameName(n) : '')));
            const tx = document.createElement('span');
            tx.className = 'cp-tx';
            tx.textContent = n.text;
            const lk = document.createElement('button');
            lk.type = 'button';
            lk.className = 'cp-like';
            lk.dataset.id = id;
            lk.addEventListener('click', e => {
                e.stopPropagation();
                like(id);
            });
            c.append(top, tx, lk);
            c.addEventListener('click', () => pick(id, 'card'));
            c.addEventListener('keydown', e => {
                if (e.key === 'Enter') pick(id, 'card');
            });
            plist.appendChild(c);
        });
    }
    // likes: one per person per comment (remembered on this device); the database only lets a count go up by one
    function paintLikes() {
        $$('.cp-like', plist).forEach(b => {
            const n = likes[b.dataset.id] || 0,
                mine = iLiked(b.dataset.id);
            b.classList.toggle('mine', mine);
            b.textContent = '♥' + (n ? ' ' + n : '');
            b.setAttribute('aria-label', (mine ? 'You liked this' : 'Like this') + (n ? ` (${n})` : ''));
            b.setAttribute('aria-pressed', mine);
        });
    }

    function like(id) {
        if (iLiked(id)) return;
        try {
            localStorage.setItem(likedKey(id), '1');
        } catch (_) {}
        if (!quiet && db) db.ref('comments/likes/' + pageKey() + '/' + id).transaction(n => (n || 0) + 1);
        else {
            likes[id] = (likes[id] || 0) + 1;
        }
        paintLikes();
        const b = $(`.cp-like[data-id="${id}"]`, plist);
        if (b) {
            b.classList.remove('pop');
            void b.offsetWidth;
            b.classList.add('pop');
        }
    }

    function paintPins() {
        $$('.unote', layer).forEach(el => {
            el.classList.toggle('pin', el.dataset.id !== active);
            el.classList.toggle('open', el.dataset.id === active);
        });
        $$('.cp-card', plist).forEach(c => c.classList.toggle('on', c.dataset.id === active));
        relayout();
    }
    // pick a comment: from the panel, scroll to where it was left (landing above the bubble); from a pin, find its card
    function pick(id, from) {
        active = active === id ? null : id;
        paintPins();
        if (!active) return;
        if (from === 'card') {
            const el = $(`.unote[data-id="${id}"]`, layer);
            if (el) {
                const r = el.getBoundingClientRect();
                scrollTo({
                    top: Math.max(0, scrollY + r.top - Math.min(innerHeight * .28, panel.getBoundingClientRect().top - r.height - 30)),
                    behavior: 'smooth'
                });
            }
        } else {
            const c = $(`.cp-card[data-id="${id}"]`, plist);
            c && c.scrollIntoView({
                block: 'nearest',
                behavior: 'smooth'
            });
        }
    }

    function render() {
        layer.replaceChildren();
        const items = list();
        if (active && !notes[active]) active = null;
        items.forEach(([id, n], i) => {
            const el = note(n, i + 1, id);
            layer.appendChild(el);
        });
        renderPanel();
        paintLikes();
        paintPins();
        sync();
    }

    function relayout() {
        $$('.unote', layer).forEach(el => {
            const n = notes[el.dataset.id];
            if (n) place(el, n);
        });
    }
    // demo for trying the panel on a local copy (add ?cdemo to the address): sample comments, nothing is read or written
    const DEMO = quiet && /[?&]cdemo\b/.test(location.search);

    function demo() {
        const fr = $$(FR, pageOf()).filter(s => s.dataset.name),
            at = i => (fr[Math.min(i, fr.length - 1)] || {}).dataset || {},
            now = Date.now();
        const S = [
            ['Wanderer', 'This is so thoughtful, the little details got me', 3 * 864e5, 1, .3, .4],
            ['Dreamer', 'love how calm this feels', 5 * 36e5, 4, .8, .5],
            ['Explorer', 'okay the illustrations are adorable', 4 * 6e4, 7, .2, .6],
            ['Hiring?', 'Would love to chat about a role!', 26 * 6e4, 2, .6, .7]
        ];
        notes = {};
        S.forEach(([name, text, ago, f, fx, fy], i) => {
            notes['demo' + i] = {
                name,
                text,
                t: now - ago,
                page: pageKey(),
                anchor: at(f).name || '',
                fx,
                fy
            };
        });
        likes = {
            demo0: 6,
            demo1: 2,
            demo3: 1
        };
        render();
    }
    // the saved copy (data/snapshot.json) shows this page's comments straight away; Firebase takes over when it answers
    const snap = window.__snap = window.__snap || fetch('data/snapshot.json', {
        cache: 'no-cache'
    }).then(r => r.json()).catch(() => ({}));

    function fromSnap() {
        const key = pageKey();
        snap.then(s => {
            if (pageKey() !== key) return;
            if (liveFor !== key) {
                notes = { ...((s['comments/approved'] || {})[key] || {}),
                    ...notes
                };
                render();
            }
            if (likesFor !== key) {
                likes = (s['comments/likes'] || {})[key] || {};
                paintLikes();
            }
        });
    }
    let liveFor = '',
        likesFor = ''; // which page's comments / likes Firebase has already answered for (the saved copy never overwrites those)
    fromSnap();

    function listen() {
        if (DEMO) {
            demo();
            return;
        }
        liveFor = '';
        likesFor = '';
        notes = {};
        fromSnap();
        if (!db) return;
        if (ref) ref.off();
        const key = pageKey();
        snap.then(s => {
            if (pageKey() !== key) return;
            const saved = (s['comments/approved'] || {})[key],
                keys = Object.keys(saved || {}).sort();
            if (!s.saved) {
                ref = db.ref('comments/approved/' + key);
                ref.on('value', v => {
                    liveFor = key;
                    notes = v.val() || {};
                    render();
                });
                return;
            } // no saved copy: the old way
            // only comments newer than the saved copy (usually none)
            ref = db.ref('comments/approved/' + key).orderByKey();
            if (keys.length) ref = ref.startAfter(keys[keys.length - 1]);
            ref.on('child_added', c => {
                if (pageKey() !== key) return;
                notes = { ...notes,
                    [c.key]: c.val()
                };
                render();
            });
        });
        if (likeRef) likeRef.off();
        likeRef = db.ref('comments/likes/' + pageKey());
        likeRef.on('value', s => {
            likesFor = key;
            likes = s.val() || {};
            paintLikes();
        });
    }
    addEventListener('resize', relayout);
    document.addEventListener('page:change', () => setTimeout(listen, 50));
    // frames build over time, so keep notes glued to their frame as the page settles
    // (moves of the notes themselves don't count, or placing a note would trigger placing it again forever)
    let queued = false;
    new MutationObserver(rs => {
        if (queued || rs.every(r => layer.contains(r.target))) return;
        queued = true;
        requestAnimationFrame(() => {
            queued = false;
            relayout();
        });
    }).observe(canvas, {
        attributes: true,
        subtree: true,
        attributeFilter: ['class', 'style']
    });

    window.__fbReady && window.__fbReady.then(d => {
        db = d;
        listen();
    });
    if (DEMO) setTimeout(listen, 300);

    const form = $('.cp-new', panel),
        ta0 = form.t,
        count = $('.cp-count', panel);
    const grow = () => {
        ta0.style.height = 'auto';
        ta0.style.height = Math.min(ta0.scrollHeight, 96) + 'px';
        const n = ta0.value.length;
        count.textContent = n > 110 ? n + '/160' : '';
        form.classList.toggle('has', !!ta0.value.trim());
        roomRow();
    };
    // the row under the box only takes room while it has something to say, so the box settles back down after
    const roomRow = () => form.classList.toggle('row-on', $('.cp-msg', panel).classList.contains('on') || !!count.textContent);
    ta0.addEventListener('input', grow);
    ta0.addEventListener('keydown', e => {
        if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
            e.preventDefault();
            form.requestSubmit();
        }
    }); // Shift+Enter for a new line
    const hearts = () => {
        const b = $('.cp-send', panel);
        for (let i = 0; i < 5; i++) {
            const h = document.createElement('i');
            h.className = 'cp-heart';
            h.textContent = '♥';
            h.style.setProperty('--dx', (Math.random() * 60 - 30) + 'px');
            h.style.setProperty('--d', (i * 70) + 'ms');
            b.appendChild(h);
            setTimeout(() => h.remove(), 1200);
        }
    };
    let msgTimer = 0;
    form.addEventListener('submit', async e => {
        e.preventDefault();
        const ta = e.target.t,
            msg = $('.cp-msg', panel),
            say = (m, ok) => {
                msg.textContent = m;
                msg.classList.toggle('bad', !ok);
                msg.classList.add('on');
                roomRow();
                clearTimeout(msgTimer);
                msgTimer = setTimeout(() => {
                    msg.classList.remove('on');
                    setTimeout(roomRow, 300);
                }, 5000);
            };
        const t = ta.value.trim().replace(/\s+/g, ' ').slice(0, 160);
        if (!t) {
            ta.focus();
            return;
        }
        const probe = document.createElement('div');
        probe.style.cssText = `position:fixed;left:${innerWidth / 2 - 1}px;top:${innerHeight / 2 - 1}px;width:2px;height:2px;`;
        document.body.appendChild(probe);
        const spot = anchorFor(probe);
        probe.remove();
        const r = await submit(t, spot);
        say(r.msg, r.ok);
        if (r.ok) {
            ta.value = '';
            grow();
            if (r.sent) hearts();
        }
    });
    // one path for every new comment (dropped on the canvas or typed in the panel): checks, limits, then Jessa's holding area
    const THANKS = 'Thanks for the comment! I’ll take a look ♡';
    async function submit(t, spot) {
        if (quiet) return {
            ok: true,
            sent: true,
            msg: DEMO ? THANKS : THANKS + ' (test: not really sent)'
        }; // tests and local copies never write
        if (!db) return {
            ok: false,
            msg: 'couldn’t send right now'
        };
        if (LINK.test(t)) return {
            ok: false,
            msg: 'no links in comments, sorry'
        };
        if (BAD.test(t)) return {
            ok: false,
            msg: 'let’s keep it kind'
        };
        let sent = 0;
        try {
            sent = +sessionStorage.getItem('csent') || 0;
        } catch (_) {}
        if (sent >= 5) return {
            ok: true,
            msg: 'that’s plenty for one visit, thank you'
        };
        const name = (($('#visitorName') || {}).textContent || 'Someone').slice(0, 24);
        try {
            await db.ref('comments/pending').push({
                name,
                text: t,
                t: Date.now(),
                page: pageKey(),
                ...spot
            });
            try {
                sessionStorage.setItem('csent', String(sent + 1));
            } catch (_) {}
            return {
                ok: true,
                sent: true,
                msg: THANKS
            };
        } catch (err) {
            return {
                ok: false,
                msg: 'that didn’t go through'
            };
        }
    }
    document.addEventListener('play:note', async e => {
        const {
            el,
            text
        } = e.detail;
        const t = text.trim().replace(/\s+/g, ' ').slice(0, 160);
        const tag = (msg, ok) => {
            const w = document.createElement('span');
            w.className = 'wait';
            w.textContent = msg;
            if (!ok) w.style.color = '#d4663f';
            el.appendChild(w);
        };
        const r = await submit(t, anchorFor(el));
        if (r.sent) el.classList.add('mine');
        tag(r.sent ? 'thanks! I’ll take a look ♡' : r.msg, r.ok);
    });
})();