import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

export default function CodeModel3D() {
  const stageRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(31, 1, 0.1, 60);
    camera.position.set(0, 0.15, 9.4);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.domElement.setAttribute("aria-hidden", "true");
    stage.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xf3f0e8, 0x10150b, 2.2));

    const keyLight = new THREE.DirectionalLight(0xc9ff32, 4.2);
    keyLight.position.set(4, 5, 6);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0xff7048, 18, 18);
    rimLight.position.set(-4, 0, 3);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xf3f0e8, 2.4);
    fillLight.position.set(1, 4, -5);
    scene.add(fillLight);

    const assembly = new THREE.Group();
    assembly.rotation.set(0.08, -0.18, -0.04);
    scene.add(assembly);

    const model = new THREE.Group();
    assembly.add(model);

    const shellMaterial = new THREE.MeshStandardMaterial({
      color: 0x20251b,
      metalness: 0.82,
      roughness: 0.27,
    });
    const platformMaterial = new THREE.MeshStandardMaterial({
      color: 0x34382e,
      metalness: 0.9,
      roughness: 0.32,
    });
    const screenMaterial = new THREE.MeshStandardMaterial({
      color: 0x070908,
      metalness: 0.4,
      roughness: 0.22,
    });
    const limeMaterial = new THREE.MeshStandardMaterial({
      color: 0xc9ff32,
      emissive: 0x789b12,
      emissiveIntensity: 0.55,
      metalness: 0.35,
      roughness: 0.24,
    });
    const paleMaterial = new THREE.MeshStandardMaterial({
      color: 0xe3e7d7,
      emissive: 0x303628,
      emissiveIntensity: 0.3,
      metalness: 0.65,
      roughness: 0.25,
    });
    const orangeMaterial = new THREE.MeshStandardMaterial({
      color: 0xff7048,
      emissive: 0x70210c,
      emissiveIntensity: 0.55,
      metalness: 0.5,
      roughness: 0.26,
    });

    const addRoundedBox = (parent, size, radius, material, position) => {
      const mesh = new THREE.Mesh(
        new RoundedBoxGeometry(...size, 4, radius),
        material
      );
      mesh.position.set(...position);
      parent.add(mesh);
      return mesh;
    };

    addRoundedBox(
      model,
      [3.25, 0.16, 2.55],
      0.055,
      platformMaterial,
      [0, -1.55, 0]
    );

    const core = addRoundedBox(
      model,
      [2.1, 2.1, 2.1],
      0.18,
      shellMaterial,
      [0, 0, 0]
    );

    const coreEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(core.geometry),
      new THREE.LineBasicMaterial({
        color: 0xc9ff32,
        transparent: true,
        opacity: 0.45,
      })
    );
    coreEdges.position.copy(core.position);
    model.add(coreEdges);

    const addScreen = (rotationY) => {
      const screen = new THREE.Group();
      screen.position.set(0, 0, 1.055);
      screen.rotation.y = rotationY;
      model.add(screen);

      addRoundedBox(screen, [1.48, 0.92, 0.1], 0.075, screenMaterial, [0, 0, 0.035]);

      const bar = (x, y, angle, material) => {
        const piece = new THREE.Mesh(
          new THREE.BoxGeometry(0.52, 0.085, 0.095),
          material
        );
        piece.position.set(x, y, 0.13);
        piece.rotation.z = angle;
        screen.add(piece);
      };

      bar(-0.29, 0.17, Math.PI / 4, limeMaterial);
      bar(-0.29, -0.17, -Math.PI / 4, limeMaterial);
      bar(0.29, 0.17, -Math.PI / 4, paleMaterial);
      bar(0.29, -0.17, Math.PI / 4, paleMaterial);

      for (const x of [-0.62, 0.62]) {
        for (const y of [-0.34, 0.34]) {
          const screw = new THREE.Mesh(
            new THREE.SphereGeometry(0.035, 12, 8),
            orangeMaterial
          );
          screw.position.set(x, y, 0.105);
          screen.add(screw);
        }
      }
    };

    addScreen(0);
    addScreen(Math.PI);

    const orbitGroup = new THREE.Group();
    model.add(orbitGroup);

    const addOrbit = (radius, tube, color, rotation) => {
      const orbit = new THREE.Mesh(
        new THREE.TorusGeometry(radius, tube, 10, 160),
        new THREE.MeshStandardMaterial({
          color,
          metalness: 0.82,
          roughness: 0.24,
          emissive: color,
          emissiveIntensity: color === 0xc9ff32 ? 0.22 : 0.06,
        })
      );
      orbit.rotation.set(...rotation);
      orbitGroup.add(orbit);
    };

    addOrbit(2.32, 0.025, 0xc9ff32, [0.88, 0.14, -0.18]);
    addOrbit(2.48, 0.016, 0xd8ddd0, [-0.72, 0.62, 0.34]);
    addOrbit(2.58, 0.012, 0xff7048, [0.22, -0.9, 0.62]);

    const cornerMaterial = new THREE.MeshStandardMaterial({
      color: 0x11140f,
      metalness: 0.8,
      roughness: 0.22,
    });
    for (const x of [-1.48, 1.48]) {
      for (const y of [-1.34, 1.34]) {
        for (const z of [-1.3, 1.3]) {
          const node = addRoundedBox(
            model,
            [0.23, 0.23, 0.23],
            0.035,
            cornerMaterial,
            [x, y, z]
          );
          const marker = new THREE.Mesh(
            new THREE.BoxGeometry(0.08, 0.08, 0.08),
            (x + y + z) % 2 ? limeMaterial : orangeMaterial
          );
          marker.position.set(0, 0, 0.14);
          node.add(marker);
        }
      }
    }

    const traceMaterial = new THREE.MeshStandardMaterial({
      color: 0xc9ff32,
      emissive: 0x506a0c,
      emissiveIntensity: 0.35,
      metalness: 0.65,
      roughness: 0.3,
    });
    for (const x of [-1.05, -0.7, 0.7, 1.05]) {
      const trace = new THREE.Mesh(
        new THREE.BoxGeometry(0.025, 0.02, 1.15),
        traceMaterial
      );
      trace.position.set(x, -1.455, 0);
      model.add(trace);
    }

    const grid = new THREE.GridHelper(18, 36, 0x4b5536, 0x25291f);
    grid.position.y = -2.25;
    grid.material.transparent = true;
    grid.material.opacity = 0.28;
    scene.add(grid);

    const pointerTarget = { x: 0, y: 0 };
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const handlePointerMove = (event) => {
      const bounds = stage.getBoundingClientRect();
      pointerTarget.x = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.42;
      pointerTarget.y = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.7;
    };
    const resetPointer = () => {
      pointerTarget.x = 0;
      pointerTarget.y = 0;
    };

    stage.addEventListener("pointermove", handlePointerMove);
    stage.addEventListener("pointerleave", resetPointer);

    const resize = () => {
      const { width, height } = stage.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.fov = camera.aspect < 1 ? 58 : 31;
      camera.updateProjectionMatrix();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(stage);
    resize();

    let frameId;
    const animate = () => {
      frameId = window.requestAnimationFrame(animate);
      assembly.rotation.x += (pointerTarget.x - assembly.rotation.x) * 0.035;
      assembly.rotation.y += (pointerTarget.y - assembly.rotation.y) * 0.035;
      if (!reducedMotion) {
        assembly.rotation.y += 0.0012;
        orbitGroup.rotation.z += 0.0008;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      stage.removeEventListener("pointermove", handlePointerMove);
      stage.removeEventListener("pointerleave", resetPointer);
      scene.traverse((object) => {
        object.geometry?.dispose();
        if (Array.isArray(object.material)) {
          object.material.forEach((material) => material.dispose());
        } else {
          object.material?.dispose();
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      className="code-model-stage"
      ref={stageRef}
      role="img"
      aria-label="Interactive 3D developer core with rotating metal orbit frames and code brackets"
    />
  );
}