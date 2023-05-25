import { Fireworks } from 'fireworks-js';

const container = document.querySelector('.container');
const fireworks = new Fireworks(container, {
  autoresize: false,
  opacity: 0.1,
  acceleration: 1.02,
  friction: 0.97,
  gravity: 1.5,
  particles: 150,
  traceLength: 3,
  traceSpeed: 1,
  explosion: 5,
  intensity: 30,
  flickering: 50,
  lineStyle: 'round',
  hue: {
    min: 0,
    max: 345,
  },
  delay: {
    min: 30,
    max: 60,
  },
  rocketsPoint: {
    min: 50,
    max: 50,
  },
  lineWidth: {
    explosion: {
      min: 1,
      max: 3,
    },
    trace: {
      min: 1,
      max: 2,
    },
  },
  brightness: {
    min: 50,
    max: 80,
  },
  decay: {
    min: 0.015,
    max: 0.03,
  },
  mouse: {
    click: true,
    move: false,
    max: 1,
  },
  sound: {
    enabled: true,
    volume: {
      min: 10,
      max: 10,
    },
  },
});
fireworks.start();
