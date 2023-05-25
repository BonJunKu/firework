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
    max: 50,
  },
  sound: {
    enabled: true,
    files: ['explosion0.mp3', 'explosion1.mp3', 'explosion2.mp3'],
    volume: {
      min: 30,
      max: 40,
    },
  },
});
fireworks.start();
