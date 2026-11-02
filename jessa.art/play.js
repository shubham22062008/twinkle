/* Every inner page lives inside the host (index.html), which carries the music player.
   If someone lands on a page directly, send them through the host so the player persists. */
(() => {
    try {
        if (/nohost/.test(location.search)) {
            try {
                sessionStorage.setItem('nohost', '1');
            } catch (e) {}
        }
        if (window.top === window && !/nohost/.test(location.search) && !(() => {
                try {
                    return sessionStorage.getItem('nohost');
                } catch (e) {
                    return false;
                }
            })()) {
            const page = location.pathname.split('/').pop() || 'app.html';
            const want = page === 'app.html' ? location.hash.slice(1) : page + location.hash;
            location.replace(location.pathname.replace(/[^/]*$/, '') + '#' + want);
        }
    } catch (e) {}
})();
/* If this page came out of the browser cache (an old copy from before the no-cache server), fetch it fresh once. */
(() => {
    try {
        const nav = performance.getEntriesByType('navigation')[0];
        const key = 'fresh:' + location.pathname;
        if (nav && nav.transferSize === 0 && nav.type !== 'reload' && !sessionStorage.getItem(key)) {
            sessionStorage.setItem(key, '1');
            location.reload();
        }
    } catch (e) {}
})();
/* Play layer: stamps, drawing, notes, text and shapes for visitors. Nothing is saved. */
(() => {
    const $ = (s, r = document) => r.querySelector(s),
        $$ = (s, r = document) => [...r.querySelectorAll(s)];
    const canvas = $('.canvas');
    if (!canvas) return;
    const rnd = (a, b) => a + Math.random() * (b - a);
    // custom stickers in the studio's style (made in Higgsfield), with a name for screen readers
    const EMOJI = [
        ['star', 'Star'],
        ['sparkles', 'Sparkles'],
        ['heart', 'Heart'],
        ['fire', 'Fire'],
        ['clap', 'Clapping'],
        ['hearteyes', 'Heart eyes'],
        ['rainbow', 'Rainbow'],
        ['pup', 'Puppy'],
        ['eyes', 'Eyes'],
        ['idea', 'Idea']
    ];
    const stickerImg = ([k, label]) => `<img src="image/stickers/${k}.png" alt="${label}" draggable="false">`;
    EMOJI.forEach(([k]) => {
        const i = new Image();
        i.src = `image/stickers/${k}.png`;
    }); // warm the cache so stamps appear instantly
    let emoji = EMOJI[0];

    const play = document.createElement('div');
    play.className = 'play';
    play.id = 'play';
    play.innerHTML = '<svg class="ink" aria-hidden="true"></svg>';
    canvas.appendChild(play);
    const ink = $('.ink', play);

    // follow the visitor's cursor tint
    const visitor = $('#visitor');
    const syncTint = () => {
        play.classList.remove('lilac', 'sky');
        if (visitor) {
            if (visitor.classList.contains('lilac')) play.classList.add('lilac');
            if (visitor.classList.contains('sky')) play.classList.add('sky');
        }
        document.documentElement.style.setProperty('--ucs', getComputedStyle(play).getPropertyValue('--ucs'));
    };
    syncTint();
    if (visitor) new MutationObserver(syncTint).observe(visitor, {
        attributes: true,
        attributeFilter: ['class']
    });

    // tray of emojis above the star, and a hint
    const tray = document.createElement('div');
    tray.className = 'tray';
    tray.setAttribute('aria-label', 'Pick a stamp');
    EMOJI.forEach(e => {
        const b = document.createElement('button');
        b.innerHTML = stickerImg(e);
        b.setAttribute('aria-label', e[1]);
        b.type = 'button';
        if (e === emoji) b.classList.add('on');
        b.addEventListener('click', () => {
            emoji = e;
            $$('button', tray).forEach(x => x.classList.toggle('on', x === b));
            held();
        });
        tray.appendChild(b);
    });
    document.body.appendChild(tray);
    const hint = document.createElement('div');
    hint.className = 'hint';
    document.body.appendChild(hint);
    const HINTS = {
        sticker: 'Click anywhere to stamp it. Pick a different one above.',
        pen: 'Draw anywhere. Jessa can see what you draw. Esc when you’re done.',
        comment: 'Click to leave a note.',
        text: 'Click to type on the page.',
        frame: 'Drag to draw a shape.'
    };

    // the visitor's held tool badge
    let heldEl = visitor && $('.held', visitor);
    if (visitor && !heldEl) {
        heldEl = document.createElement('div');
        heldEl.className = 'held';
        visitor.appendChild(heldEl);
    }
    const ICONS = {};
    $$('.tool').forEach(b => {
        ICONS[b.dataset.tool] = $('svg', b).outerHTML;
    });

    function held() {
        if (!heldEl) return;
        if (tool === 'move') {
            heldEl.classList.remove('on');
            return;
        }
        heldEl.innerHTML = tool === 'sticker' ? `<span class="em">${stickerImg(emoji)}</span>` : (ICONS[tool] || '');
        heldEl.classList.add('on');
    }

    let tool = 'move';

    function pick(name) {
        if (name === 'hand') name = 'move';
        tool = name === tool && name !== 'move' ? 'move' : name;
        $$('.tool').forEach(b => b.classList.toggle('picked', b.dataset.tool === tool && tool !== 'move'));
        document.body.className = document.body.className.replace(/\btool-\S+/g, '').trim() + ' tool-' + tool;
        tray.classList.toggle('on', tool === 'sticker');
        hint.textContent = HINTS[tool] || '';
        hint.classList.toggle('on', !!HINTS[tool] && tool !== 'sticker');
        held();
    }
    $$('.tool').forEach(b => b.addEventListener('click', e => {
        e.preventDefault();
        pick(b.dataset.tool);
    }));
    pick('move');
    addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            const ed = document.activeElement;
            if (ed && ed.isContentEditable) ed.blur();
            else pick('move');
        }
    });

    const toCanvas = (x, y) => {
        const r = canvas.getBoundingClientRect();
        return [x - r.left, y - r.top];
    };
    // keep notes off the page's buttons and links: slide a note up (or down) until it no longer covers one
    window.__avoidButtons = el => {
        const r = el.getBoundingClientRect();
        if (!r.width) return;
        const hits = [...document.querySelectorAll('.canvas a, .canvas button, .canvas .wob, .canvas .send')].filter(b => !b.closest('.play, .shared')).map(b => b.getBoundingClientRect())
            .filter(b => b.width && b.left < r.right - 6 && b.right > r.left + 6 && b.top < r.bottom - 6 && b.bottom > r.top + 6);
        if (!hits.length) return;
        const top = Math.min(...hits.map(b => b.top)),
            bottom = Math.max(...hits.map(b => b.bottom));
        const up = r.bottom - top + 10,
            down = bottom - r.top + 10;
        const dy = (r.top - up > 60 || up <= down) ? -up : down;
        el.style.top = (parseFloat(el.style.top) + dy) + 'px';
    };
    const isChrome = t => t.closest('.pages, .toolbar, .people, .tray, .hint, .hlabel, .lb, .subfloat, .fan, .fan-scrim, .studio-back, .cpanel, .shared .unote'); // the comments bubble and its pins are not the page
    // with a drawing tool picked, a click on the page places things; it never follows a link or presses a button underneath
    let armed = null,
        drew = false;
    addEventListener('click', e => {
        if (drew) {
            drew = false;
            e.preventDefault();
            e.stopPropagation();
        }
    }, true);

    function item(cls, x, y) {
        const el = document.createElement('div');
        el.className = 'uitem pop ' + cls;
        el.style.left = x + 'px';
        el.style.top = y + 'px';
        const x_ = document.createElement('button');
        x_.className = 'x';
        x_.type = 'button';
        x_.textContent = '×';
        x_.setAttribute('aria-label', 'Remove');
        x_.addEventListener('pointerdown', e => e.stopPropagation());
        x_.addEventListener('click', e => {
            e.stopPropagation();
            el.remove();
        });
        el.appendChild(x_);
        play.appendChild(el);
        return el;
    }

    function editable(el, cls) {
        const ed = document.createElement('div');
        ed.className = 'ed';
        ed.contentEditable = 'true';
        ed.spellcheck = false;
        el.appendChild(ed);
        el.classList.add('editing');
        ed.focus();
        setTimeout(() => {
            if (el.classList.contains('editing')) ed.focus();
        }, 0);
        ed.addEventListener('blur', () => {
            el.classList.remove('editing');
            if (!ed.textContent.trim()) {
                el.remove();
                return;
            }
            if (cls === 'unote' && !el.dataset.sent) {
                el.dataset.sent = '1';
                document.dispatchEvent(new CustomEvent('play:note', {
                    detail: {
                        el,
                        text: ed.textContent
                    }
                }));
            }
        });
        ed.addEventListener('keydown', e => {
            if ((e.key === 'Enter' && !e.shiftKey && cls === 'utext') || e.key === 'Escape') {
                e.preventDefault();
                ed.blur();
            }
            e.stopPropagation();
        });
        // each letter you type pops in: a ghost of it springs from the caret while the item gives a tiny bump
        ed.addEventListener('input', e => {
            if (e.inputType && e.inputType.startsWith('insert') && e.data) popChar(ed, el, e.data);
        });
        return ed;
    }

    function popChar(ed, el, ch) {
        try {
            const sel = getSelection();
            if (!sel.rangeCount) return;
            const r = sel.getRangeAt(0).cloneRange();
            r.collapse(true);
            let rect = r.getBoundingClientRect();
            if (!rect.width && !rect.height) rect = ed.getBoundingClientRect();
            const cs = getComputedStyle(ed);
            const g = document.createElement('span');
            g.className = 'popch';
            g.textContent = ch === ' ' ? '·' : ch;
            g.style.font = cs.font;
            g.style.color = cs.color;
            g.style.left = (rect.left - parseFloat(cs.fontSize) * 0.55) + 'px';
            g.style.top = (rect.top + (rect.height || parseFloat(cs.fontSize)) * 0.5) + 'px';
            document.body.appendChild(g);
            setTimeout(() => g.remove(), 520);
            el.classList.remove('bump');
            void el.offsetWidth;
            el.classList.add('bump');
        } catch (_) {}
    }

    // ---- placing / drawing ----
    let drag = null,
        stroke = null,
        shape = null;
    addEventListener('pointerdown', e => {
        if (e.button !== 0 || isChrome(e.target)) return;
        const onItem = e.target.closest('.uitem');
        if (onItem) {
            if (e.target.closest('.x')) return; // the remove button handles itself
            const ed = e.target.closest('.ed');
            if (ed && document.activeElement === ed && onItem.classList.contains('editing')) return; // already editing: let the caret move
            if (e.pointerType === 'touch') {
                e.stopImmediatePropagation();
                if (ed) {
                    onItem.classList.add('editing');
                    ed.focus();
                }
                return;
            } // no dragging on touch: a tap on text edits it, that's all
            // press and drag moves the item, whatever tool is picked; a plain click on text edits it
            const [cx, cy] = toCanvas(e.clientX, e.clientY);
            drag = {
                el: onItem,
                dx: cx - parseFloat(onItem.style.left),
                dy: cy - parseFloat(onItem.style.top),
                sx: e.clientX,
                sy: e.clientY,
                moved: false,
                ed: ed || null
            };
            onItem.classList.add('grab');
            e.preventDefault();
            e.stopImmediatePropagation();
            return;
        }
        if (tool === 'move') return;
        const [x, y] = toCanvas(e.clientX, e.clientY);
        if (e.target.closest('a, button, input, textarea, label')) {
            // on a link or button: a tap still works like a tap; only a real drag with the pen or frame tool draws over it
            if (tool === 'pen' || tool === 'frame') armed = {
                x,
                y,
                cx: e.clientX,
                cy: e.clientY
            };
            return;
        }
        e.preventDefault();
        e.stopImmediatePropagation();
        startTool(x, y);
    }, true);

    function startTool(x, y) {
        if (tool === 'sticker') {
            const el = item('ustamp', x - 34, y - 34); // centered on the click (60px sticker + 4px padding) el.style.setProperty('--rot', rnd(-18, 18) + 'deg');
            const s = document.createElement('span');
            s.innerHTML = stickerImg(emoji);
            el.appendChild(s);
            document.dispatchEvent(new CustomEvent('play:stamp', {
                detail: {
                    k: emoji[0],
                    x: x / (play.offsetWidth || 1),
                    y,
                    r: parseFloat(el.style.getPropertyValue('--rot')) || 0
                }
            })); // presence.js shares it for a few seconds
        } else if (tool === 'comment') {
            const el = item('unote', x - 20, y - 16);
            el.style.setProperty('--rot', rnd(-6, 5) + 'deg');
            editable(el, 'unote');
            requestAnimationFrame(() => window.__avoidButtons(el));
        } else if (tool === 'text') {
            const el = item('utext', x - 8, y - 14);
            editable(el, 'utext');
        } else if (tool === 'pen') {
            stroke = {
                pts: [
                    [x, y, performance.now()]
                ],
                el: document.createElementNS('http://www.w3.org/2000/svg', 'path')
            };
            stroke.el.classList.add('live', 'butter');
            ink.appendChild(stroke.el);
        } else if (tool === 'frame') {
            const el = item('ushape', x, y);
            el.classList.remove('pop');
            el.classList.add('drawing');
            el.insertAdjacentHTML('beforeend', '<i class="h tl"></i><i class="h tr"></i><i class="h bl"></i><i class="h br"></i><span class="pill">0 × 0</span>');
            const fills = ['--blush', '--butter', '--mint', '--sky', '--lilac', '--peach'];
            el.style.setProperty('--fillc', `var(${fills[Math.floor(Math.random() * fills.length)]})`);
            shape = {
                el,
                x,
                y
            };
        }
    }
    addEventListener('pointermove', e => {
        if (armed) {
            if (Math.hypot(e.clientX - armed.cx, e.clientY - armed.cy) < 6) return;
            const a = armed;
            armed = null;
            drew = true;
            startTool(a.x, a.y);
        }
        if (drag) {
            if (drag.sx != null && !drag.moved && Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy) < 4) return;
            drag.moved = true;
            const [cx, cy] = toCanvas(e.clientX, e.clientY);
            drag.el.style.left = (cx - drag.dx) + 'px';
            drag.el.style.top = (cy - drag.dy) + 'px';
            return;
        }
        if (stroke) {
            const [x, y] = toCanvas(e.clientX, e.clientY);
            const last = stroke.pts[stroke.pts.length - 1];
            if (Math.hypot(x - last[0], y - last[1]) < 2) return;
            stroke.pts.push([x, y, performance.now()]);
            stroke.el.setAttribute('d', butter(stroke.pts, false));
            return;
        }
        if (shape) {
            const [x, y] = toCanvas(e.clientX, e.clientY);
            const l = Math.min(shape.x, x),
                t = Math.min(shape.y, y),
                w = Math.abs(x - shape.x),
                h = Math.abs(y - shape.y);
            Object.assign(shape.el.style, {
                left: l + 'px',
                top: t + 'px',
                width: w + 'px',
                height: h + 'px'
            });
            $('.pill', shape.el).textContent = `${Math.round(w)} × ${Math.round(h)}`;
        }
    }, true);
    addEventListener('pointerup', e => {
        armed = null;
        if (drag) {
            const d = drag;
            drag = null;
            d.el.classList.remove('grab');
            if (d.moved) {
                d.el.classList.add('settle');
                window.__avoidButtons(d.el);
                setTimeout(() => d.el.classList.remove('settle'), 400);
            }
            if (d.ed && !d.moved) {
                d.el.classList.add('editing');
                d.ed.focus();
                const r = document.createRange();
                r.selectNodeContents(d.ed);
                r.collapse(false);
                const s = getSelection();
                s.removeAllRanges();
                s.addRange(r);
            }
        }
        if (stroke) {
            if (stroke.pts.length < 2) {
                const [x, y] = stroke.pts[0];
                stroke.el.setAttribute('d', `M${x-3} ${y} a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0`);
            } else stroke.el.setAttribute('d', butter(stroke.pts, true));
            stroke.el.classList.remove('live');
            document.dispatchEvent(new CustomEvent('play:draw', {
                detail: {
                    pts: stroke.pts.map(([px, py]) => [px / (play.offsetWidth || 1), py])
                }
            })); // presence.js saves it privately for Jessa
            stroke = null;
        }
        if (shape) {
            const el = shape.el;
            el.classList.remove('drawing');
            if (parseFloat(el.style.width) < 12 || parseFloat(el.style.height) < 12) el.remove();
            shape = null;
        }
    }, true);
    /* Brush stroke: a filled ribbon whose width swells where you slow down and tapers at both ends, like ink from a soft pen */
    function butter(raw, finished) {
        // resample to evenly spaced points so the ribbon is smooth
        const pts = [];
        let acc = 0;
        for (let i = 0; i < raw.length; i++) {
            if (i === 0) {
                pts.push({
                    x: raw[0][0],
                    y: raw[0][1],
                    t: raw[0][2]
                });
                continue;
            }
            const a = raw[i - 1],
                b = raw[i];
            const seg = Math.hypot(b[0] - a[0], b[1] - a[1]);
            const dt = Math.max(1, b[2] - a[2]);
            let d = acc;
            while (d < seg) {
                const k = d / seg;
                pts.push({
                    x: a[0] + (b[0] - a[0]) * k,
                    y: a[1] + (b[1] - a[1]) * k,
                    v: seg / dt
                });
                d += 3;
            }
            acc = d - seg;
        }
        if (pts.length < 2) return '';
        if (finished && pts.length > 6) {
            const a = pts[0],
                z = pts[pts.length - 1];
            if (Math.hypot(a.x - z.x, a.y - z.y) < 14) pts.splice(-2, 2);
        } // closed loops: drop the last tick so the ends don't spike
        // smooth the speed so width changes gently
        let s = pts[1] && pts[1].v || 0.3;
        const lens = [0];
        for (let i = 1; i < pts.length; i++) lens.push(lens[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y));
        const total = lens[lens.length - 1],
            BASE = 9,
            MIN = 1;
        const width = i => {
            s += ((pts[i].v == null ? s : pts[i].v) - s) * 0.08;
            const slow = Math.max(0, Math.min(1, 1 - s / 1.8)); // slower = fatter
            let w = MIN + (BASE - MIN) * (0.22 + 0.78 * slow * slow);
            const inRamp = Math.min(1, lens[i] / 54); // thin start
            const outRamp = finished ? Math.min(1, (total - lens[i]) / 54) : 1; // thin finish once the stroke is done
            const wob = 1 + 0.12 * Math.sin(lens[i] / 11); // a little breathing along the line
            return w * Math.pow(inRamp, 0.8) * Math.pow(outRamp, 0.8) * wob + 0.4;
        };
        const left = [],
            right = [];
        for (let i = 0; i < pts.length; i++) {
            const p0 = pts[Math.max(0, i - 1)],
                p1 = pts[Math.min(pts.length - 1, i + 1)];
            let nx = -(p1.y - p0.y),
                ny = p1.x - p0.x;
            const n = Math.hypot(nx, ny) || 1;
            nx /= n;
            ny /= n;
            const w = width(i) / 2;
            left.push([pts[i].x + nx * w, pts[i].y + ny * w]);
            right.push([pts[i].x - nx * w, pts[i].y - ny * w]);
        }
        const seq = left.concat(right.reverse());
        let d = `M${seq[0][0].toFixed(1)} ${seq[0][1].toFixed(1)}`;
        for (let i = 1; i < seq.length; i++) {
            const m = seq[i - 1],
                c = seq[i];
            d += ` Q${m[0].toFixed(1)} ${m[1].toFixed(1)} ${((m[0] + c[0]) / 2).toFixed(1)} ${((m[1] + c[1]) / 2).toFixed(1)}`;
        }
        return d + ' Z';
    }

    function smooth(p) {
        if (p.length < 3) return `M${p[0][0]} ${p[0][1]} L${p[p.length - 1][0]} ${p[p.length - 1][1]}`;
        let d = `M${p[0][0]} ${p[0][1]}`;
        for (let i = 1; i < p.length - 1; i++) {
            const mx = (p[i][0] + p[i + 1][0]) / 2,
                my = (p[i][1] + p[i + 1][1]) / 2;
            d += ` Q${p[i][0]} ${p[i][1]} ${mx} ${my}`;
        }
        const l = p[p.length - 1];
        d += ` L${l[0]} ${l[1]}`;
        return d;
    }

    // Clear pill beside the tools, shown once there's something to clear
    const clearBtn = document.createElement('button');
    clearBtn.className = 'clear-pill wob';
    clearBtn.type = 'button';
    clearBtn.textContent = 'Clear';
    $('.toolbar').appendChild(clearBtn);

    function clearAll() {
        $$('.uitem', play).forEach((el, i) => {
            el.classList.add('bye');
            setTimeout(() => el.remove(), 300 + i * 20);
        });
        $$('path', ink).forEach((p, i) => {
            p.classList.add('bye');
            setTimeout(() => p.remove(), 300 + i * 20);
        });
        setTimeout(refresh, 600);
    }
    clearBtn.addEventListener('click', clearAll);

    function refresh() {
        const has = $$('.uitem:not(.bye)', play).length + $$('path:not(.bye)', ink).length > 0;
        clearBtn.classList.toggle('on', has);
    }
    new MutationObserver(refresh).observe(play, {
        childList: true,
        subtree: true
    });

    // the main site switches pages: Jessa clears the canvas, so the play layer clears too
    document.addEventListener('page:change', () => {
        $$('.uitem', play).forEach(e => e.remove());
        ink.innerHTML = '';
    });
    // sparkle trail behind the pointer
    const SPARKS = ['<svg viewBox="0 0 24 24"><path d="M12 2.5c.8 4.6 2.9 6.7 7.5 7.5-4.6.8-6.7 2.9-7.5 7.5-.8-4.6-2.9-6.7-7.5-7.5 4.6-.8 6.7-2.9 7.5-7.5z"/></svg>', '<svg viewBox="0 0 24 24"><path d="M12 3l6.5 9-6.5 9-6.5-9z"/></svg>', '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>', '<svg viewBox="0 0 24 24"><path d="M12 3a3 3 0 0 1 3 3c0 .4 0 .7-.1 1 .3-.1.6-.1 1-.1a3 3 0 1 1 0 6c-.4 0-.7 0-1-.1.1.3.1.6.1 1a3 3 0 1 1-6 0c0-.4 0-.7.1-1-.3.1-.6.1-1 .1a3 3 0 1 1 0-6c.4 0 .7 0 1 .1-.1-.3-.1-.6-.1-1a3 3 0 0 1 3-3z"/></svg>'];
    const SPARK_COLORS = ['var(--pink)', 'var(--sky-deep)', 'var(--butter-deep)', 'var(--mint-deep)', 'var(--lilac-deep)', 'var(--coral)'];
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches,
        fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
    let lx = 0,
        ly = 0,
        lt = 0;
    if (fine && !reduced) addEventListener('pointermove', e => {
        const now = performance.now();
        const d = Math.hypot(e.clientX - lx, e.clientY - ly);
        if (d < 16 || now - lt < 30) return;
        lx = e.clientX;
        ly = e.clientY;
        lt = now;
        const s = document.createElement('span');
        s.className = 'spark trail';
        s.innerHTML = SPARKS[Math.floor(Math.random() * SPARKS.length)];
        const size = rnd(10, 17);
        s.style.width = s.style.height = size + 'px';
        s.style.left = (e.clientX + rnd(-10, 10)) + 'px';
        s.style.top = (e.clientY + rnd(-10, 10)) + 'px';
        s.style.setProperty('--sc', SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)]);
        s.style.setProperty('--dx', rnd(-14, 14) + 'px');
        s.style.setProperty('--dy', rnd(6, 26) + 'px');
        s.style.setProperty('--spin', rnd(-120, 120) + 'deg');
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 1150);
    }, {
        passive: true
    });
    /* Phone nav: tap the pill, pages fan out as a hand of frames */
    const pages = $('#pages');
    if (pages) {
        const scrim = document.createElement('div');
        scrim.className = 'fan-scrim';
        document.body.appendChild(scrim);
        const fan = document.createElement('nav');
        fan.className = 'fan';
        fan.setAttribute('aria-label', 'Pages');
        document.body.appendChild(fan);
        const FILLS = ['var(--blush)', 'var(--sky)', 'var(--lilac)', 'var(--mint)', 'var(--butter)', 'var(--peach)'];
        const TILTS = [-2.2, 1.6, -1.2, 2, -1.8, 1.2];

        function buildFan() {
            fan.innerHTML = '';
            let i = 0;
            const chips = $$('.chip:not(.crumb)', pages).filter(c => !c.closest('.subfloat'));
            chips.forEach((c, k) => {
                const card = document.createElement(c.tagName === 'A' ? 'a' : 'button');
                card.className = 'fcard' + (c.classList.contains('active') ? ' on' : '');
                if (c.tagName === 'A') card.href = c.getAttribute('href');
                else card.type = 'button';
                card.style.setProperty('--i', i++);
                card.style.setProperty('--fc', FILLS[k % FILLS.length]);
                card.style.setProperty('--tilt', TILTS[k % TILTS.length] + 'deg');
                card.style.setProperty('--nx', (k % 2 ? 10 : 0) + 'px');
                card.innerHTML = `<span class="n">${String(k + 1).padStart(2, '0')}</span>${c.textContent.trim()}`;
                card.addEventListener('click', e => {
                    if (c.tagName !== 'A') {
                        e.preventDefault();
                        c.click();
                    }
                    close();
                });
                fan.appendChild(card);
            });
            const secs = $$('.subfloat a', pages).length ? $$('.subfloat a', pages) : $$('.cs-title .subnav a[href^="#"]');
            if (secs.length) {
                const h = document.createElement('div');
                h.className = 'fhead';
                h.textContent = 'On this page';
                h.style.setProperty('--i', i++);
                fan.appendChild(h);
                const wrap = document.createElement('div');
                wrap.className = 'fsec';
                secs.forEach((a, k) => {
                    const card = document.createElement('a');
                    card.className = 'fcard';
                    card.href = a.getAttribute('href');
                    card.style.setProperty('--i', i++);
                    card.style.setProperty('--tilt', (k % 2 ? 1 : -1) + 'deg');
                    card.innerHTML = `<span class="n">·</span>${a.textContent.trim()}`;
                    card.addEventListener('click', () => {
                        close();
                        if (a.href.startsWith('#') || a.getAttribute('href').startsWith('#')) a.click();
                    });
                    wrap.appendChild(card);
                });
                fan.appendChild(wrap);
            }
        }
        const open = () => {
            buildFan();
            document.body.classList.add('pages-open');
        };
        const close = () => document.body.classList.remove('pages-open');
        pages.addEventListener('click', e => {
            if (!matchMedia('(max-width: 860px)').matches) return;
            if (e.target.closest('a.crumb, .subfloat')) return;
            e.preventDefault();
            e.stopPropagation();
            document.body.classList.contains('pages-open') ? close() : open();
        });
        scrim.addEventListener('click', close);
        addEventListener('keydown', e => {
            if (e.key === 'Escape') close();
        });
        document.addEventListener('page:change', close);
    }
    /* inside the music host: keep the host's address bar in sync */
    if (window.top !== window) {
        const tell = () => {
            try {
                window.top.postMessage({
                    type: 'host:nav',
                    url: location.pathname.split('/').pop() + location.hash
                }, '*');
            } catch (e) {}
        };
        tell();
        addEventListener('hashchange', tell);
        document.addEventListener('page:change', () => setTimeout(tell, 50));
    }
    window.playPick = pick;
})();
/* Over anything that can be moved (draggable cards, stamped stickers and notes), the visitor's cursor becomes an open hand
   in their colour; while dragging, it closes into a fist */
(() => {
    const vis = document.getElementById('visitor');
    if (!vis) return;
    vis.insertAdjacentHTML('beforeend', '<svg class="grabhand open" viewBox="0 0 34 34" aria-hidden="true"><g class="o"><rect x="8.5" y="15" width="19.5" height="16" rx="7"/><rect x="8" y="4.2" width="5" height="15.5" rx="2.5" transform="rotate(-8 10.5 19)"/><rect x="13.2" y="1.2" width="5" height="17.5" rx="2.5"/><rect x="18.4" y="2.2" width="5" height="16.5" rx="2.5"/><rect x="23.4" y="5.6" width="4.6" height="14" rx="2.3" transform="rotate(8 25.7 19)"/><rect x="7.6" y="15.5" width="3.8" height="9" rx="1.9" transform="rotate(-42 9.5 24)"/></g><g class="f"><rect x="8.5" y="15" width="19.5" height="16" rx="7"/><rect x="8" y="4.2" width="5" height="15.5" rx="2.5" transform="rotate(-8 10.5 19)"/><rect x="13.2" y="1.2" width="5" height="17.5" rx="2.5"/><rect x="18.4" y="2.2" width="5" height="16.5" rx="2.5"/><rect x="23.4" y="5.6" width="4.6" height="14" rx="2.3" transform="rotate(8 25.7 19)"/><rect x="7.6" y="15.5" width="3.8" height="9" rx="1.9" transform="rotate(-42 9.5 24)"/></g></svg>' +
        '<svg class="grabhand fist" viewBox="0 0 34 34" aria-hidden="true"><g class="o"><rect x="7.5" y="13" width="21" height="17" rx="7.5"/><circle cx="11" cy="13.6" r="3"/><circle cx="16" cy="12.6" r="3"/><circle cx="21" cy="12.8" r="3"/><circle cx="25.4" cy="14.4" r="2.7"/><rect x="6" y="17" width="12" height="5" rx="2.5" transform="rotate(-12 12 19.5)"/></g><g class="f"><rect x="7.5" y="13" width="21" height="17" rx="7.5"/><circle cx="11" cy="13.6" r="3"/><circle cx="16" cy="12.6" r="3"/><circle cx="21" cy="12.8" r="3"/><circle cx="25.4" cy="14.4" r="2.7"/><rect x="6" y="17" width="12" height="5" rx="2.5" transform="rotate(-12 12 19.5)"/></g></svg>');
    // not over things you type in or press: fields, buttons and links keep the normal cursor
    const movable = el => el && el.closest && !el.closest('input, textarea, select, button, a, label, [contenteditable="true"], .ed, .editing') && (el.closest('.uitem') || el.closest('.slot.draggable.done'));
    let over = false;
    const sync = () => {
        const dragging = !!document.querySelector('.uitem.grab, .slot.grab');
        const moveTool = !document.body.className.match(/\btool-(pen|frame|text|sticker|comment)\b/);
        vis.classList.toggle('grabby', (over || dragging) && moveTool);
        vis.classList.toggle('grabbing', dragging && moveTool);
    };
    // over anything you can type in: a text cursor (an I-beam) in their colour
    vis.insertAdjacentHTML('beforeend', '<svg class="ibeam" viewBox="0 0 16 32" aria-hidden="true"><g class="o"><path d="M3 3c3 0 5 1 5 3v20c0 2-2 3-5 3M13 3c-3 0-5 1-5 3v20c0 2 2 3 5 3M5 16h6"/></g><g class="f"><path d="M3 3c3 0 5 1 5 3v20c0 2-2 3-5 3M13 3c-3 0-5 1-5 3v20c0 2 2 3 5 3M5 16h6"/></g></svg>');
    const typable = el => el && el.closest && el.closest('input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=submit]):not([type=button]), textarea, [contenteditable="true"], .ed');
    document.addEventListener('pointerover', e => {
        over = !!movable(e.target);
        vis.classList.toggle('texting', !!typable(e.target));
        sync();
    });
    document.addEventListener('pointerdown', () => setTimeout(sync, 0), true);
    document.addEventListener('pointerup', () => setTimeout(sync, 0), true);
    document.addEventListener('pointermove', e => {
        if (e.buttons) sync();
    }, {
        passive: true
    });
})();