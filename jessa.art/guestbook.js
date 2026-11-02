/* Guestbook: visitors pin a note; it waits in a private holding area until Jessa approves it
   from guestbook-admin.html. Only approved notes are public. */
(() => {
    const $ = (s, r = document) => r.querySelector(s);
    const form = $('#gform'),
        wall = $('#gwall');
    if (!form || !wall) return;
    const name = form.elements.name,
        text = form.elements.text,
        status = $('.status', form),
        cnt = $('#gcnt'),
        btn = $('.send', form);
    const COLORS = ['var(--butter)', 'var(--blush)', 'var(--mint)', 'var(--sky)', 'var(--lilac)', 'var(--peach)'];
    const hash = s => {
        let h = 7;
        for (const ch of String(s)) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
        return h;
    };
    // first line of defence: no links, no contact details, no slurs. Jessa still reads every note.
    const BAD = /\b(fuck|shit|bitch|cunt|asshole|dick|slut|whore|fag|nigg|retard|kys|kill yourself)\w*/i;
    const LINK = /(https?:\/\/|www\.|\.com\b|\.net\b|\.org\b|\.io\b|@\w+\.\w+|\b\d{3}[-. ]\d{3}[-. ]\d{4}\b)/i;
    text.addEventListener('input', () => cnt.textContent = text.value.length);
    [name, text].forEach(i => {
        i.addEventListener('pointerdown', e => e.stopPropagation());
        i.addEventListener('keydown', e => e.stopPropagation());
    }); // keep the play layer and frame drag out of the fields
    const hint = () => {
        const v = $('#visitorName');
        if (v) name.placeholder = v.textContent;
    }; // the visitor's cursor name as a faded hint; they can type their own
    hint(); {
        const you = document.getElementById('you');
        you && you.addEventListener('click', () => setTimeout(hint, 60));
    } // follows a name shuffle
    // our own stickers stand in for the matching emoji in notes (a ♥ shows as the heart sticker); any other emoji stays as it is
    const EMO = [
        ['star', '⭐🌟'],
        ['sparkles', '✨'],
        ['heart', '❤♥💖💕💗🩷💓💞💛🧡💚💙💜'],
        ['fire', '🔥'],
        ['clap', '👏'],
        ['hearteyes', '😍🥰'],
        ['rainbow', '🌈'],
        ['pup', '🐶🐕'],
        ['eyes', '👀'],
        ['idea', '💡'],
        ['starstruck', '🤩'],
        ['party', '🥳🎉'],
        ['hug', '🤗'],
        ['ok', '👌']
    ];
    const KEY = new Map();
    EMO.forEach(([k, cs]) => [...cs].forEach(c => KEY.set(c, k)));
    const EMO_RE = new RegExp('(' + [...KEY.keys()].join('|') + ')[\\uFE0F\\u{1F3FB}-\\u{1F3FF}]*', 'gu');
    const sticker = k => {
        const i = document.createElement('img');
        i.className = 'gemo';
        i.src = `image/stickers/${k}.png`;
        i.alt = k;
        i.draggable = false;
        return i;
    };

    function withStickers(str) {
        const out = document.createElement('span');
        let last = 0;
        for (const m of str.matchAll(EMO_RE)) {
            out.append(str.slice(last, m.index), sticker(KEY.get(m[1])));
            last = m.index + m[0].length;
        }
        out.append(str.slice(last));
        return out;
    }
    // a little row of our stickers on the pad: tap one to drop it into the note
    const pick = document.createElement('div');
    pick.className = 'gemos';
    pick.setAttribute('aria-label', 'Add a sticker');
    EMO.forEach(([k, cs]) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.title = k;
        b.appendChild(sticker(k));
        b.addEventListener('pointerdown', e => {
            e.stopPropagation();
            e.preventDefault();
        }); // keep the cursor in the note
        b.addEventListener('click', () => {
            const c = [...cs][0];
            if (text.value.length + c.length > text.maxLength) return;
            const a = text.selectionStart ? ? text.value.length,
                z = text.selectionEnd ? ? a;
            text.setRangeText(c, a, z, 'end');
            text.focus();
            text.dispatchEvent(new Event('input'));
        });
        pick.appendChild(b);
    });
    // tucked behind a smiley button in the sign-off row; the tray pops up above it and stays open for a few picks
    const emoBtn = document.createElement('button');
    emoBtn.type = 'button';
    emoBtn.className = 'gemo-btn';
    emoBtn.setAttribute('aria-label', 'Add a sticker');
    emoBtn.setAttribute('aria-expanded', 'false');
    emoBtn.appendChild(sticker('hearteyes'));
    const cntEl = form.querySelector('.gsign .cnt');
    cntEl.before(emoBtn);
    pick.hidden = true;
    form.querySelector('.gpad').appendChild(pick);
    const tray = open => {
        pick.hidden = !open;
        emoBtn.setAttribute('aria-expanded', open);
        emoBtn.classList.toggle('on', open);
    };
    emoBtn.addEventListener('pointerdown', e => {
        e.stopPropagation();
        e.preventDefault();
    });
    emoBtn.addEventListener('click', () => tray(pick.hidden));
    document.addEventListener('pointerdown', e => {
        if (!pick.hidden && !e.target.closest('.gemos, .gemo-btn')) tray(false);
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && !pick.hidden) tray(false);
    });
    // scattered: every page load deals the notes out fresh (new order, tilt and nudge), but they hold still while you're here
    const looks = new Map(),
        rr = (a, b) => a + Math.random() * (b - a);
    const look = key => {
        if (!looks.has(key)) looks.set(key, {
            s: Math.random(),
            r: Math.round(rr(-9, 9)),
            x: Math.round(rr(-24, 24)),
            y: Math.round(rr(-12, 12)),
            o: Math.floor(Math.random() * 1000)
        });
        return looks.get(key);
    };
    const cropTo = (svg, path) => { // frame just the lines: measure them, pad a little, square it up
        const m = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        m.style.cssText = 'position:absolute;left:-9999px;top:0;width:10px;height:10px;visibility:hidden';
        const c = path.cloneNode();
        m.appendChild(c);
        document.body.appendChild(m);
        let b;
        try {
            b = c.getBBox();
        } catch (e) {}
        m.remove();
        if (!b || !(b.width + b.height)) return;
        const size = Math.max(b.width, b.height, 40) * 1.18,
            cx = b.x + b.width / 2,
            cy = b.y + b.height / 2;
        svg.setAttribute('viewBox', `${(cx - size / 2).toFixed(1)} ${(cy - size / 2).toFixed(1)} ${size.toFixed(1)} ${size.toFixed(1)}`);
    };
    const note = (n, mine) => {
        const el = document.createElement('div');
        el.className = 'gnote' + (mine ? ' mine' : '');
        const h = hash(n.name + n.t);
        el.style.setProperty('--c', COLORS[h % COLORS.length]);
        const k = look(n.name + n.t),
            small = matchMedia('(max-width: 860px)').matches;
        el.style.setProperty('--w', Math.round((small ? 112 : 132) + k.s * (small ? 18 : 40) + Math.min(String(n.text || '').length, 160) * (small ? .08 : .16)) + 'px'); // longer notes get a bigger square
        el.style.setProperty('--rot', k.r + 'deg');
        el.style.setProperty('--gx', k.x + 'px');
        el.style.setProperty('--gy', k.y + 'px');
        if (n.d) { // a drawing Jessa shared: the doodle instead of words
            el.classList.add('gdoodle');
            el.style.setProperty('--w', Math.round((small ? 140 : 168) + k.s * 30) + 'px');
            const NS = 'http://www.w3.org/2000/svg',
                svg = document.createElementNS(NS, 'svg'),
                p = document.createElementNS(NS, 'path');
            svg.setAttribute('viewBox', n.vb || '0 0 1000 1000');
            svg.setAttribute('role', 'img');
            svg.setAttribute('aria-label', `A drawing by ${n.name || 'a visitor'}`);
            p.setAttribute('d', n.d);
            svg.appendChild(p);
            cropTo(svg, p);
            if (n.c) svg.setAttribute('viewBox', n.c); // Jessa's own crop, if she made one
            const ph = document.createElement('div');
            ph.className = 'gph';
            ph.appendChild(svg);
            el.appendChild(ph);
        } else el.appendChild(withStickers(String(n.text || '')));
        const s = document.createElement('small');
        s.textContent = n.name;
        el.appendChild(s);
        return el;
    };
    /* big screens: the pad sits in the middle and the notes fill the screen around it, popping in from the middle out,
       then quietly swapping in and out so every note gets a turn. small screens: they stack under the pad and pop in as they scroll into view */
    const big = matchMedia('(min-width: 861px) and (min-height: 600px)'),
        head = $('.ghead');
    let deck = [],
        queue = [],
        hover = false;

    function spots() {
        const W = wall.clientWidth,
            H = wall.clientHeight;
        if (!W || !H) return [];
        const wb = wall.getBoundingClientRect(),
            hb = head.closest('.slot').getBoundingClientRect();
        const keep = {
            l: hb.left - wb.left - 22,
            r: hb.right - wb.left + 22,
            t: hb.top - wb.top - 40,
            b: hb.bottom - wb.top + 14
        }; // room for the frame and its tag
        const w = Math.max(124, Math.min(150, Math.sqrt(W * H / 40))),
            h = w / 2,
            gap = w * .93;
        const cx = (keep.l + keep.r) / 2,
            cy = (keep.t + keep.b) / 2,
            cand = [];
        for (let y = h - 6; y <= H - h + 6; y += 14)
            for (let x = h - 6; x <= W - h + 6; x += 14) {
                if (x + h > keep.l && x - h < keep.r && y + h > keep.t && y - h < keep.b) continue; // leave the pad room to breathe
                cand.push({
                    x,
                    y,
                    w,
                    d: Math.hypot((x - cx) / W, (y - cy) / H) + rr(0, .06)
                });
            }
        cand.sort((a, b) => a.d - b.d); // pack outward from the pad, so they cluster around it and ripple out from the middle
        const out = [];
        for (const c of cand)
            if (out.every(o => Math.abs(o.x - c.x) >= gap || Math.abs(o.y - c.y) >= gap)) out.push(c);
        return out;
    }

    function card(d, sp) {
        const el = note(d.n, d.mine);
        el._d = d;
        if (!sp) return el;
        const len = String(d.n.text || '').length;
        el._sp = sp;
        el.style.setProperty('--x', sp.x + 'px');
        el.style.setProperty('--y', sp.y + 'px');
        el.style.setProperty('--w', Math.round(sp.w + rr(-8, 6)) + 'px');
        el.style.setProperty('--fs', (len < 40 ? 18 : len < 80 ? 15.5 : len < 120 ? 14 : 12.5) + 'px');
        return el;
    }
    const seen = window.IntersectionObserver && new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.remove('wait');
            seen.unobserve(e.target);
        }
    }), {
        rootMargin: '0px 0px -30px 0px'
    });

    function deal(animate) {
        wall.replaceChildren();
        queue = [];
        if (!big.matches) {
            wall.style.setProperty('--cols', Math.max(2, Math.floor((wall.clientWidth || 360) / 160)));
            deck.forEach(d => {
                const el = card(d);
                el.style.animationDelay = Math.round(rr(0, 160)) + 'ms';
                if (seen) {
                    el.classList.add('wait');
                    seen.observe(el);
                }
                wall.append(el);
            });
            return;
        }
        const sp = spots(),
            n = Math.min(sp.length, deck.length);
        queue = deck.slice(n);
        // drawings get spread out across the wall (every so many spots), not bunched together by the pad
        const shown = deck.slice(0, n),
            dz = shown.filter(d => d.n.d),
            rest = shown.filter(d => !d.n.d),
            order = new Array(n);
        dz.forEach((d, j) => {
            let k = Math.min(n - 1, Math.round((j + .5) * n / dz.length));
            while (order[k]) k = (k + 1) % n;
            order[k] = d;
        });
        for (let k = 0, r = 0; k < n; k++)
            if (!order[k]) order[k] = rest[r++];
        order.forEach((d, i) => {
            const el = card(d, sp[i]);
            if (animate) el.style.animationDelay = Math.round(120 + i * 55 + rr(0, 90)) + 'ms';
            else el.style.animation = 'none';
            wall.append(el);
        });
    }
    // every few seconds one note steps out and a waiting one takes its spot (held while you're reading one)
    document.addEventListener('pointerover', e => {
        hover = !!e.target.closest('.gwall .gnote');
    });
    setInterval(() => {
        if (!big.matches || hover || document.hidden || !queue.length || !wall.offsetParent) return;
        const live = [...wall.children].filter(el => !el.classList.contains('mine') && !el.classList.contains('out') && !el.classList.contains('gdoodle')); // drawings stay put if (!live.length) return;
        const old = live[Math.floor(Math.random() * live.length)];
        old.classList.add('out');
        setTimeout(() => {
            if (!old.isConnected) return;
            const d = queue.shift();
            queue.push(old._d);
            old.replaceWith(card(d, old._sp));
        }, 300);
    }, 2600);
    // arriving on the guestbook page: deal them fresh once the frame is drawn, so you see them pop in
    document.addEventListener('page:change', () => setTimeout(() => {
        if (wall.offsetParent && deck.length) deal(true);
    }, 1100));
    // and if the page wasn't on screen yet when the notes arrived, deal the moment the wall gets a size
    window.ResizeObserver && new ResizeObserver(() => {
        if (!wall.children.length && deck.length && wall.clientWidth) deal(true);
    }).observe(wall);
    let sized = 0;
    addEventListener('resize', () => {
        clearTimeout(sized);
        sized = setTimeout(() => wall.offsetParent && deal(false), 200);
    });
    let mine = [];
    let order = new Map(); // a fresh shuffle each page load, steady while you're here
    const rank = n => {
        const k = n.name + n.t;
        if (!order.has(k)) order.set(k, Math.random());
        return order.get(k);
    };
    let latest = {};

    function render(all) {
        if (all !== undefined) latest = all;
        const list = Object.values(latest || {}).sort((x, y) => (y.t || 0) - (x.t || 0)).slice(0, 60).sort((x, y) => (!!y.d - !!x.d) || rank(x) - rank(y)); // shared drawings always get a spot on the wall
        deck = [...mine.map(n => ({
            n,
            mine: true
        })), ...list.map(n => ({
            n
        }))];
        deal(!wall.children.length);
        // the count is everything in the guestbook, not just the 60 pieces the wall has room for
        const nn = noteKeys.size || list.filter(n => !n.d).length,
            dd = drawCount || list.filter(n => n.d).length;
        const c = $('#gcount');
        if (c) c.textContent = nn || dd ? [nn && `${nn} ${nn === 1 ? 'note' : 'notes'}`, dd && `${dd} ${dd === 1 ? 'drawing' : 'drawings'}`].filter(Boolean).join(' and ') + ' so far' : '';
    }
    // a note you just pinned pops in right next to the pad (or at the top of the stack)
    function pinMine(entry) {
        const d = {
            n: entry,
            mine: true
        };
        deck.unshift(d);
        const near = [...wall.children].find(el => el._sp && !el.classList.contains('mine'));
        if (near) {
            queue.push(near._d);
            near.replaceWith(card(d, near._sp));
        } else wall.prepend(card(d));
    }
    let notes = {},
        doodles = {},
        live = {
            notes: false,
            doodles: false
        };
    const noteKeys = new Set();
    let drawCount = 0; // every approved note and shared drawing, for the count
    // only 3 drawings on the wall, a random 3 picked fresh on each page load (and steady while you're here)
    const luckOf = new Map(),
        luck = k => {
            if (!luckOf.has(k)) luckOf.set(k, Math.random());
            return luckOf.get(k);
        };
    const three = () => Object.entries(doodles).sort(([a], [b]) => luck(a) - luck(b)).slice(0, 3);
    const both = () => render({ ...notes,
        ...Object.fromEntries(three().map(([k, v]) => ['d_' + k, v]))
    });
    const lastN = (o, n) => Object.fromEntries(Object.entries(o || {}).sort(([a], [b]) => a < b ? -1 : 1).slice(-n));
    // the saved copy (data/snapshot.json) fills the wall instantly; Firebase takes over with anything newer when it answers
    (window.__snap = window.__snap || fetch('data/snapshot.json', {
        cache: 'no-cache'
    }).then(r => r.json()).catch(() => ({})))
    .then(s => {
        Object.keys(s['guestbook/approved'] || {}).forEach(k => noteKeys.add(k));
        drawCount = Object.keys(s['drawings_shared'] || {}).length;
        if (!live.notes) notes = lastN(s['guestbook/approved'], 60);
        if (!live.doodles) doodles = { ...SAMPLE,
            ...lastN(s['drawings_shared'], 30)
        };
        both();
    });
    // on a local copy only: one sample drawing, so the wall can be previewed (never on the live site)
    const SAMPLE = /^(localhost|127\.)/.test(location.hostname) ? {
        sample: {
            name: 'Friend (sample)',
            t: Date.now(),
            vb: '0 0 1000 760',
            d: 'M180 420 C 180 250, 330 170, 500 300 C 670 170, 820 250, 820 420 C 820 560, 640 650, 500 720 C 360 650, 180 560, 180 420 Z M380 400 l0.1 0 M620 400 l0.1 0 M410 520 Q 500 600 590 520'
        }
    } : {};
    window.__fbReady && window.__fbReady.then(db => {
        // Firebase only sends what's newer than the saved copy (usually nothing), so a visit costs almost no database downloads.
        // Drawings come from the saved copy alone: the admin re-saves it the moment one is approved.
        window.__snap.then(s => {
            const keys = Object.keys(s['guestbook/approved'] || {}).sort();
            if (!keys.length) {
                db.ref('guestbook/approved').limitToLast(60).on('value', snap => {
                    live.notes = true;
                    notes = snap.val() || {};
                    Object.keys(notes).forEach(k => noteKeys.add(k));
                    both();
                });
                return;
            } // no saved copy: the old way
            db.ref('guestbook/approved').orderByKey().startAfter(keys[keys.length - 1]).on('child_added', c => {
                noteKeys.add(c.key);
                notes = lastN({ ...notes,
                    [c.key]: c.val()
                }, 60);
                both();
            });
        });
        form.addEventListener('submit', async e => {
            e.preventDefault();
            status.className = 'status';
            const n = (name.value.trim() || name.placeholder || 'Someone').slice(0, 24),
                t = text.value.trim().replace(/\s+/g, ' ').slice(0, 160);
            if (!t) {
                status.textContent = 'Write a little something first.';
                status.classList.add('bad');
                return;
            }
            if (LINK.test(t) || LINK.test(n)) {
                status.textContent = 'No links or contact details in the guestbook, sorry.';
                status.classList.add('bad');
                return;
            }
            if (BAD.test(t) || BAD.test(n)) {
                status.textContent = 'Let’s keep it kind. Try again?';
                status.classList.add('bad');
                return;
            }
            let sent = 0;
            try {
                sent = +sessionStorage.getItem('gsent') || 0;
            } catch (_) {}
            if (sent >= 3) {
                status.textContent = 'That’s plenty for one visit. Thank you!';
                return;
            }
            btn.disabled = true;
            try {
                const entry = {
                    name: n,
                    text: t,
                    t: Date.now()
                };
                await db.ref('guestbook/pending').push(entry);
                try {
                    sessionStorage.setItem('gsent', String(sent + 1));
                } catch (_) {}
                mine.unshift(entry);
                pinMine(entry);
                text.value = '';
                cnt.textContent = '0';
                status.textContent = 'Pinned. Jessa reads every note before it goes up.';
            } catch (err) {
                status.textContent = 'That didn’t go through. Try again in a moment.';
                status.classList.add('bad');
            }
            btn.disabled = false;
        });
    });
})();