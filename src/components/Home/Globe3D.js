import React, { useEffect, useRef } from "react";

// Globe de points en 3D (sphère de Fibonacci) qui tourne lentement et suit la souris.
// Quelques arcs violets relient des points, comme des flux de données.
const N = 1100;
const ARCS = 7;

function fibonacciSphere(n) {
  const pts = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const t = golden * i;
    pts.push([Math.cos(t) * r, y, Math.sin(t) * r]);
  }
  return pts;
}

function Globe3D() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduced =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pts = fibonacciSphere(N);
    const arcs = Array.from({ length: ARCS }, () => [
      Math.floor(Math.random() * N),
      Math.floor(Math.random() * N),
      Math.random(),
    ]);
    let w = 0, h = 0, dpr = 1, raf = 0, angle = 0, visible = true;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

    function size() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // rotation Y (angle) puis X (inclinaison souris), projection en perspective
    function project([x, y, z], R, cx, cy) {
      const ry = angle + mouse.x * 0.6;
      const rx = -0.35 + mouse.y * 0.4;
      let x1 = x * Math.cos(ry) - z * Math.sin(ry);
      let z1 = x * Math.sin(ry) + z * Math.cos(ry);
      let y1 = y * Math.cos(rx) - z1 * Math.sin(rx);
      let z2 = y * Math.sin(rx) + z1 * Math.cos(rx);
      const p = 2.6 / (2.6 + z2);
      return [cx + x1 * R * p, cy + y1 * R * p, z2];
    }

    function slerp(a, b, t) {
      const dot = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
      const om = Math.acos(Math.min(1, Math.max(-1, dot)));
      if (om < 1e-3) return a;
      const s = Math.sin(om);
      const k1 = Math.sin((1 - t) * om) / s;
      const k2 = Math.sin(t * om) / s;
      const lift = 1 + Math.sin(Math.PI * t) * 0.1; // l'arc décolle de la surface
      return [0, 1, 2].map((i) => (a[i] * k1 + b[i] * k2) * lift);
    }

    function frame() {
      ctx.clearRect(0, 0, w, h);
      const R = Math.min(w, h) * 0.36;
      const cx = w / 2;
      const cy = h / 2;
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;

      // halo
      const g = ctx.createRadialGradient(cx, cy, R * 0.2, cx, cy, R * 1.25);
      g.addColorStop(0, "rgba(139,123,255,0.10)");
      g.addColorStop(1, "rgba(139,123,255,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      for (const p of pts) {
        const [sx, sy, z] = project(p, R, cx, cy);
        const front = (1 - z) / 2; // 1 devant, 0 derrière
        ctx.fillStyle = `rgba(196,242,78,${0.1 + front * 0.85})`;
        const s = 0.8 + front * 1.8;
        ctx.fillRect(sx - s / 2, sy - s / 2, s, s);
      }

      ctx.lineWidth = 1.2;
      for (const arc of arcs) {
        const a = pts[arc[0]];
        const b = pts[arc[1]];
        arc[2] += 0.004;
        if (arc[2] >= 1.4) {
          // l'arc s'est effacé : on en relance un entre deux nouveaux points
          arc[0] = Math.floor(Math.random() * N);
          arc[1] = Math.floor(Math.random() * N);
          arc[2] = 0;
        }
        const head = Math.min(arc[2], 1);
        ctx.beginPath();
        for (let i = 0; i <= 32; i++) {
          const t = (i / 32) * head;
          const [sx, sy] = project(slerp(a, b, t), R, cx, cy);
          i ? ctx.lineTo(sx, sy) : ctx.moveTo(sx, sy);
        }
        ctx.strokeStyle = `rgba(139,123,255,${0.55 * (1 - Math.max(0, arc[2] - 1) / 0.4)})`;
        ctx.stroke();
        const [hx, hy] = project(slerp(a, b, head), R, cx, cy);
        ctx.fillStyle = "#c4f24e";
        ctx.beginPath();
        ctx.arc(hx, hy, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      angle += 0.0025;
      if (!reduced && visible) raf = requestAnimationFrame(frame);
    }

    function onMove(e) {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    }

    // pas d'animation quand le globe est hors de l'écran
    const io = new IntersectionObserver(([e]) => {
      const was = visible;
      visible = e.isIntersecting;
      if (visible && !was && !reduced) raf = requestAnimationFrame(frame);
    });
    io.observe(canvas);

    size();
    frame();
    window.addEventListener("resize", size);
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", size);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="arc-globe" aria-hidden="true" />;
}

export default Globe3D;
