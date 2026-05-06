import { OrbitControls, Float } from "@react-three/drei";
import { Astronaut } from "../components/Astronaut";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import Loader from "../components/Loader";
import { Suspense } from "react";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section
      className="flex items-start justify-center 
    md:items-start md:justify-start min-h-screen overflow-hidden
    c-space"
    >
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          {/* change scale and position for mobile view */}
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile && 0.2}
                position={isMobile && [0, -1.9, 0]}
              />
            </Float>
          </Suspense>
          <OrbitControls enableZoom={false} />
          <Rig />
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 3, 1 + state.mouse.y / 2, 3],
      0.5,
      delta,
    );
  });
}
export default Hero;
