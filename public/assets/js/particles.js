const Particles = require('particlesjs');

window.onload = () => {
  // eslint-disable-next-line no-undef
  Particles.init({
    selector: '.background',
    color: '#99ccff',
    connectParticles: true,
  });
};
