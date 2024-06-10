// src/components/ParticlesBackground.js

import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const particlesOptions = {
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        particles: {
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: false
                }
            },
            size: {
                value: 5,
                random: true,
                anim: {
                    enable: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true,
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesOptions}
        />
    );
};

export default ParticlesBackground;
