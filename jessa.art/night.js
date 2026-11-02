/* Night mode switch: a moon button; remembers the choice; follows the visitor's system setting until they pick. */
(() => {
    const KEY = 'jw-night',
        root = document.documentElement;
    let saved = null;
    try {
        saved = localStorage.getItem(KEY);
    } catch (e) {}
    const q = new URLSearchParams(location.search);
    const sys = matchMedia('(prefers-color-scheme: dark)').matches;
    const on = q.has('night') ? true : q.has('day') ? false : saved ? saved === '1' : sys;
    root.classList.toggle('night', on);
    try {
        if (window.parent !== window) window.parent.postMessage({
            type: 'jw-night',
            on
        }, '*');
    } catch (e) {}
    const MOON = '<svg viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>';
    const SUN = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/></svg>';

    function stars() {
        for (let i = 0; i < 14; i++) {
            const s = document.createElement('i');
            s.className = 'night-star';
            s.style.left = Math.random() * innerWidth + 'px';
            s.style.top = Math.random() * innerHeight * .7 + 'px';
            s.style.animationDelay = (i * .05) + 's';
            document.body.appendChild(s);
            setTimeout(() => s.remove(), 2400);
        }
    }
    // colorful frames and pills get an outline in their own color (.tint + --tc); white and dark things stay plain dark
    const parse = c => {
        c = String(c).trim();
        let m = c.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
        if (m) {
            let h = m[1];
            if (h.length === 3) h = [...h].map(x => x + x).join('');
            return [0, 2, 4].map(k => parseInt(h.slice(k, k + 2), 16));
        }
        m = c.match(/rgba?\(([^)]+)\)/);
        if (m) {
            const v = m[1].split(',').map(parseFloat);
            if (v[3] !== undefined && v[3] < .3) return null;
            return v.slice(0, 3);
        }
        return null;
    };
    const colorful = c => {
        const v = parse(c);
        if (!v) return false;
        return Math.max(...v) - Math.min(...v) > 35;
    };
    let mark = function() {
        const on = root.classList.contains('night');
        document.querySelectorAll('.slot, .wob').forEach(el => {
            const v = on ? getComputedStyle(el).getPropertyValue(el.classList.contains('slot') ? '--fill' : '--wb') : '';
            const t = on && colorful(v);
            el.classList.toggle('tint', t);
            if (t) el.style.setProperty('--tc', v.trim());
            else el.style.removeProperty('--tc');
        });
        // plain frames (white in the day) take the next pastel, so every box has a colored edge at night
        const P = ['#f4a9c6', '#9cc4f2', '#8fd2ae', '#c0abf5', '#ecd57a', '#f6b998'];
        let k = 0;
        document.querySelectorAll('.slot:not(.tint):not(.tile):not(.screen)').forEach(el => {
            const auto = on && !el.classList.contains('bare') && el.offsetWidth > 60;
            el.classList.toggle('tint-auto', auto);
            if (auto) {
                if (!el.dataset.nc) el.dataset.nc = P[k % P.length];
                k++;
                el.style.setProperty('--tc', el.dataset.nc);
            }
        });
    };
    // small solid-color pills and labels: outlined at night, words in their color (the color is read once, in the day look)
    const PILLS = '.kicker, .favtags span, .flow-sec .sec-title, .chain span, .row .st, .sk span, .lines .note-ish, .hs-bar button.on, .mposter small';

    function pills() {
        const on = root.classList.contains('night');
        document.querySelectorAll(PILLS).forEach(el => {
            if (!el.dataset.pc && on && !el.classList.contains('ol')) el.dataset.pc = getComputedStyle(el).backgroundColor; // the bright night color, read before it's outlined
            const c = el.dataset.pc || '',
                t = on && colorful(c);
            el.classList.toggle('ol', t);
            if (t) el.style.setProperty('--tc', c);
        });
    }
    const mark0 = mark;
    mark = () => {
        mark0();
        pills();
    };
    window.__nightMark = mark;
    addEventListener('DOMContentLoaded', () => {
        mark();
        setTimeout(mark, 800);
        setInterval(mark, 1500);
        // a moon/sun tool at the end of the toolbar (falls back to a floating button on pages without one)
        const bar = document.querySelector('.toolbar');
        const b = document.createElement('button');
        b.className = bar ? 'tool night-tool' : 'night-toggle';
        b.setAttribute('aria-label', 'Night mode');
        const paint = () => {
            const n = root.classList.contains('night');
            b.innerHTML = (bar ? `<span class="tip">${n ? 'Lights on' : 'Lights off'}</span>` : '') + (n ? SUN : MOON);
            b.title = bar ? '' : (n ? 'Back to day' : 'Night mode');
        };
        b.onclick = e => {
            e.stopPropagation();
            const n = !root.classList.contains('night');
            root.classList.toggle('night', n);
            try {
                localStorage.setItem(KEY, n ? '1' : '0');
            } catch (e2) {}
            if (n) stars();
            paint();
            setTimeout(mark, 50);
            try {
                if (window.parent !== window) window.parent.postMessage({
                    type: 'jw-night',
                    on: n
                }, '*');
            } catch (e2) {}
        };
        paint();
        if (bar) {
            const sep = document.createElement('span');
            sep.className = 'tbsep';
            const pill = bar.querySelector('.cm-pill');
            if (pill) {
                bar.insertBefore(sep, pill);
                bar.insertBefore(b, pill);
            } else {
                bar.appendChild(sep);
                bar.appendChild(b);
            }
        } else document.body.appendChild(b);
    });
})();