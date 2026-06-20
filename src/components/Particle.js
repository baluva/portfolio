import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        fpsLimit: 60,
        particles: {
          number: {
            value: 26,
            density: {
              enable: true,
              value_area: 900,
            },
          },
          color: {
            value: ["#c4f24e", "#ffffff"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.18,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.04,
              sync: false,
            },
          },
          size: {
            value: 2,
            random: true,
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 0.45,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false,
            },
            resize: true,
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;

