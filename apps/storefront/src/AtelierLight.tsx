import { useEffect, useRef } from 'react';

export function AtelierLight() {
  const hostRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = hostRef.current;
    if (
      !host ||
      matchMedia('(prefers-reduced-motion: reduce)').matches ||
      matchMedia('(pointer: coarse)').matches
    )
      return;
    const canvas = document.createElement('canvas');
    canvas.className = 'atelier-canvas';
    const gl = canvas.getContext('webgl', { alpha: true, antialias: false });
    if (!gl) return;
    host.append(canvas);
    const vertex = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vertex, 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}');
    gl.compileShader(vertex);
    const fragment = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(
      fragment,
      'precision mediump float;uniform vec2 r;uniform float t;uniform vec2 m;void main(){vec2 u=gl_FragCoord.xy/r;float ray=pow(max(0.,1.-abs(u.x-(.18+m.x*.08+u.y*.32))),3.8);float fade=(1.-u.y)*.22;gl_FragColor=vec4(1.,.78,.4,(ray*.12+fade*.025)*(0.72+sin(t*.2)*.08));}',
    );
    gl.compileShader(fragment);
    const program = gl.createProgram()!;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(program, 'p');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
    const r = gl.getUniformLocation(program, 'r');
    const t = gl.getUniformLocation(program, 't');
    const m = gl.getUniformLocation(program, 'm');
    let frame = 0,
      active = false,
      visible = document.visibilityState === 'visible',
      pointer = { x: 0, y: 0 };
    const resize = () => {
      const box = host.getBoundingClientRect(),
        dpr = Math.min(devicePixelRatio, 1.5);
      if (!box.width || !box.height) return;
      canvas.width = box.width * dpr;
      canvas.height = box.height * dpr;
      canvas.style.width = `${box.width}px`;
      canvas.style.height = `${box.height}px`;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    const draw = (now: number) => {
      if (!active || !visible) return;
      gl.uniform2f(r, canvas.width, canvas.height);
      gl.uniform1f(t, now * 0.001);
      gl.uniform2f(m, pointer.x, pointer.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      frame = requestAnimationFrame(draw);
    };
    const sync = () => {
      cancelAnimationFrame(frame);
      if (active && visible) frame = requestAnimationFrame(draw);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        sync();
      },
      { threshold: 0.05 },
    );
    observer.observe(host);
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    resize();
    const move = (event: PointerEvent) => {
      const box = host.getBoundingClientRect();
      pointer = {
        x: (event.clientX - box.left) / box.width - 0.5,
        y: (event.clientY - box.top) / box.height - 0.5,
      };
    };
    host.addEventListener('pointermove', move);
    const visibility = () => {
      visible = document.visibilityState === 'visible';
      sync();
    };
    document.addEventListener('visibilitychange', visibility);
    const lost = (event: Event) => {
      event.preventDefault();
      cancelAnimationFrame(frame);
    };
    canvas.addEventListener('webglcontextlost', lost);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      host.removeEventListener('pointermove', move);
      document.removeEventListener('visibilitychange', visibility);
      canvas.removeEventListener('webglcontextlost', lost);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
      gl.deleteBuffer(buffer);
      canvas.remove();
    };
  }, []);
  return (
    <div ref={hostRef} className="atelier-light" aria-hidden="true" data-testid="atelier-light" />
  );
}
