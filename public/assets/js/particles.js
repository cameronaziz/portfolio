if (typeof window !== 'undefined') {
  window.onload = () => {
    const Particles = require('particlesjs');
    // eslint-disable-next-line no-undef
    Particles.init({
      selector: '.background',
      color: '#99ccff',
      connectParticles: true,
    });
  };
}