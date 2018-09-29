const Particles = require('particlesjs');

window.onload = function () {
  Particles.init({
    selector: '.background',
    color: '#99ccff',
    connectParticles: true,
  });
};
