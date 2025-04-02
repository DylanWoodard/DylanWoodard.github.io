particlesJS("particle-canvas", {
  "particles": {
    "number": {
      // Adjust for desired density. More particles = more computation. Start lower.
      "value": 250, // Maybe start with 150-250 and increase if performance allows
      "density": {
        "enable": true,
        "value_area": 800 // Higher value = particles are more spread out
      }
    },
    "color": {
      "value": "#ffffff" // Color of the dots
    },
    "shape": {
      "type": "circle", // Can be "star", "edge", "triangle", "polygon"
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.9, // Opacity of dots
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.8,
        "opacity_min": 0.4,
        "sync": false
      }
    },
    "size": {
      "value": 3, // Size of dots (keep small for 'tiny dots')
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true, // This creates the network connection effect
      "distance": 120, // How close particles need to be to link
      "color": "#4db8ff", // Color of the connecting lines (matches accent)
      "opacity": 0.8, // Opacity of the lines (keep subtle)
      "width": 1.5
    },
    "move": {
      "enable": true,
      "speed": 1.5, // Speed particles move around
      "direction": "none", // Particles move in random directions
      "random": true,
      "straight": false,
      "out_mode": "out", // Particles leave the canvas boundaries
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas", // Interactions trigger within the canvas area
    "events": {
      "onhover": {
        "enable": true, // Enable mouse hover interaction
        "mode": "grab" // "grab", "repulse", "bubble"
      },
      "onclick": {
        "enable": true, // Enable click interaction
        "mode": "push" // "push" (adds particles), "remove", "bubble"
      },
      "resize": true // Recalculate particle positions on window resize
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_opacity": 0.8 // Make grabbed lines slightly more visible
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4 // Number of particles to add on click
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true // Adjusts particle density for high-DPI screens
});

// Note: The "shift and move as users scroll" effect is primarily achieved
// by having the #particle-canvas set to 'position: fixed' in CSS.
// The content scrolls over the continuously animating background, creating
// a parallax-like effect where the background seems to shift relative
// to the content. More complex scroll-linked animation speed changes
// would require custom JavaScript listening to scroll events.