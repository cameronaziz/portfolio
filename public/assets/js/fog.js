const c = document.getElementById('fog');
let pCount = 0;
const canvasHeight = 200;
const pCollection = [];
const puffs = 100;
const particlesPerPuff = 1000;
const img = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/85280/smoke2.png';
const smokeImage = new Image();
smokeImage.src = img;

const randBetween = (n1, n2) => {
  const r = Math.random() * (n2 - n1) + n1;
  return r;
};

const addNewParticle = delay => {
  const p = {};
  p.top = canvasHeight;
  p.left = randBetween(-200, 800);
  p.start = new Date().getTime() + delay;
  p.life = 10000;
  p.speedUp = 20;
  p.speedRight = randBetween(0, 20);
  p.rot = randBetween(-1, 1);
  p.red = Math.floor(randBetween(0, 255));
  p.blue = Math.floor(randBetween(0, 255));
  p.green = Math.floor(randBetween(0, 255));
  p.startOpacity = 0.2;
  p.newTop = p.top;
  p.newLeft = p.left;
  p.size = 100;
  p.growth = 3;
  pCollection[pCount] = p;
  pCount += 1;
};

for (let i = 0; i < puffs; i += 1) {
  const puffDelay = i * 13500;
  for (let j = 0; j < particlesPerPuff; j += 1) {
    addNewParticle(j * 10 + puffDelay);
  }
}

function draw(start) {
  // Timing
  const timeDelta = new Date().getTime() - start;
  let stillAlive = false;

  // Grab and clear the canvas
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, c.width, c.height);
  c.width = c.width;

  // Loop through particles
  for (let i = 0; i < pCount; i += 1) {
    // Grab the particle
    const p = pCollection[i];
    // Timing
    const td = new Date().getTime() - p.start;
    const frac = td / p.life;

    if (td > 0) {
      if (td <= p.life) {
        stillAlive = true;
      }

      // attributes that change over time
      const newTop = p.top - p.speedUp * (td / 1000);
      const newLeft = p.left + p.speedRight * (td / 1000);
      const newOpacity = Math.max(p.startOpacity * (1 - frac), 0);
      const newSize = p.size + p.growth * (td / 1000);
      p.newTop = newTop;
      p.newLeft = newLeft;

      // Draw!
      ctx.fillStyle = `rgba(200,200,200,${newOpacity})`;
      ctx.globalAlpha = newOpacity;
      ctx.drawImage(smokeImage, newLeft, newTop, newSize, newSize);
    }
  }

  // Repeat if there's still a living particle
  if (stillAlive) {
    window.requestAnimationFrame(() => {
      draw(start + 100);
    });
  }
}

draw(new Date().getTime(), 300);
