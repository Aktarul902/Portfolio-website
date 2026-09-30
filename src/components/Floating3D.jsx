import { useRef } from "react";

export default function Floating3D() {
  const sceneRef = useRef(null);

  const handleMove = (event) => {
    const scene = sceneRef.current;
    if (!scene) return;

    const rect = scene.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    scene.style.setProperty("--rx", `${-y * 16}deg`);
    scene.style.setProperty("--ry", `${x * 22}deg`);
  };

  const reset = () => {
    const scene = sceneRef.current;
    if (!scene) return;

    scene.style.setProperty("--rx", "0deg");
    scene.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      className="floating-3d"
      ref={sceneRef}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <div className="three-d-shadow" />

      <div className="cube-scene">
        <div className="cube">
          <div className="cube-face cube-front">
            <span>AKTARUL</span>
            <small>BUILD</small>
          </div>

          <div className="cube-face cube-back">
            <span>&lt;/&gt;</span>
          </div>

          <div className="cube-face cube-right">
            <span>JS</span>
          </div>

          <div className="cube-face cube-left">
            <span>REACT</span>
          </div>

          <div className="cube-face cube-top">
            <span>API</span>
          </div>

          <div className="cube-face cube-bottom">
            <span>DB</span>
          </div>
        </div>
      </div>

      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="floating-pill pill-one">REACT</div>
      <div className="floating-pill pill-two">NODE</div>
      <div className="floating-pill pill-three">MONGO</div>
    </div>
  );
}