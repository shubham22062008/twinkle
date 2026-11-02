/* The favicon floats: the little Jessa on her pink square bobs up and down with a tiny tilt, looping.
   Only the top window does it (pages inside the host frame don't own the tab). */
(() => {
    if (window.top !== window) return;
    const fav = document.querySelector('link[rel="icon"]');
    if (!fav) return;
    const img = new Image();
    img.onload = () => {
        const S = 64,
            N = 24,
            size = 52,
            frames = [];
        for (let k = 0; k < N; k++) {
            const a = k / N * Math.PI * 2,
                c = document.createElement('canvas');
            c.width = c.height = S;
            const g = c.getContext('2d');
            g.translate(S / 2, S / 2 + Math.sin(a) * 4.5);
            g.rotate(Math.sin(a + .9) * .06);
            g.drawImage(img, -size / 2, -size / 2, size, size);
            frames.push(c.toDataURL('image/png'));
        }
        // the tab shows the bobbing one: the other icons (favicon.ico and friends, which Google reads from the page as sent) step aside
        document.querySelectorAll('link[rel="icon"]').forEach(l => l !== fav && l.remove());
        fav.type = 'image/png';
        let k = 0;
        setInterval(() => {
            fav.href = frames[k = (k + 1) % N];
        }, 90);
    };
    img.src = new URL('image/favicon.svg?v=2', document.baseURI).href;
})();