import { useEffect, useRef } from "react";

export default function TopographicLines() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const LOOP = 20;
    const CELL = 24;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    function field(x, y, t) {
      return (
        Math.sin(x * 0.012 + t) +
        Math.cos(y * 0.013 - t * 0.8) +
        Math.sin((x + y) * 0.008 + t * 0.5) +
        Math.cos(
          Math.hypot(
            x - canvas.width / 2,
            y - canvas.height / 2
          ) *
          0.01 -
          t
        )
      );
    }

    function lerp(a, b, v1, v2, level) {
      const p = (level - v1) / (v2 - v1);
      return a + (b - a) * p;
    }

    function contour(level, t) {
      const w = canvas.width;
      const h = canvas.height;

      for (let y = 0; y < h + CELL; y += CELL) {
        for (let x = 0; x < w + CELL; x += CELL) {
          const v0 = field(x, y, t);
          const v1 = field(x + CELL, y, t);
          const v2 = field(x + CELL, y + CELL, t);
          const v3 = field(x, y + CELL, t);

          let idx = 0;

          if (v0 > level) idx |= 1;
          if (v1 > level) idx |= 2;
          if (v2 > level) idx |= 4;
          if (v3 > level) idx |= 8;

          if (idx === 0 || idx === 15) continue;

          const top = [lerp(x, x + CELL, v0, v1, level), y];
          const right = [x + CELL, lerp(y, y + CELL, v1, v2, level)];
          const bottom = [lerp(x, x + CELL, v3, v2, level), y + CELL];
          const left = [x, lerp(y, y + CELL, v0, v3, level)];

          const draw = (a, b) => {
            ctx.beginPath();
            ctx.moveTo(a[0], a[1]);
            ctx.lineTo(b[0], b[1]);
            ctx.stroke();
          };

          switch (idx) {
            case 1:
            case 14:
              draw(left, top);
              break;

            case 2:
            case 13:
              draw(top, right);
              break;

            case 3:
            case 12:
              draw(left, right);
              break;

            case 4:
            case 11:
              draw(right, bottom);
              break;

            case 5:
              draw(left, bottom);
              draw(top, right);
              break;

            case 6:
            case 9:
              draw(top, bottom);
              break;

            case 7:
            case 8:
              draw(left, bottom);
              break;

            case 10:
              draw(left, top);
              draw(right, bottom);
              break;
          }
        }
      }
    }

    let animationFrame;
    let start;

    const animate = (ts) => {
      if (!start) start = ts;

      const progress = (((ts - start) / 1000) % LOOP) / LOOP;
      const phase = progress * Math.PI * 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // fundo escuro
      ctx.fillStyle = "#543b73";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let l = -2.2; l <= 2.2; l += 0.18) {
        const centerDist = Math.abs(l) / 2.2;

        ctx.strokeStyle = `rgba(255,255,255,${0.08 + (1 - centerDist) * 0.12
          })`;

        ctx.lineWidth =
          Math.round(l * 10) % 5 === 0 ? 1.4 : 1;

        contour(l, phase);
      }

      ctx.save();
      ctx.globalCompositeOperation = "destination-out";

      ctx.beginPath();
      ctx.ellipse(
        canvas.width / 2,
        canvas.height / 2,
        380,
        180,
        0,
        0,
        Math.PI * 2
      );

      ctx.fill();
      ctx.restore();

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
      />

      <div className="corner tl" />
      <div className="corner tr" />
      <div className="corner bl" />
      <div className="corner br" />
    </>
  );
}