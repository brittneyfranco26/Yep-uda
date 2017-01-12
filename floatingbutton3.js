const button = document.querySelector('.button');

const container = document.querySelector('.container');

const tl = new TimelineMax({
  repeat: -1,
  yoyo: true,
  repeatDelay: 1.2
});

tl.to(button, .6, {
  x: 0,
  rotation: 150,
  transformOrigin: "left bottom",
  ease: Power4.easeInOut, 
  boxShadow: 0
});

tl.set(container, {
  overflow: 'hidden'
}, '-=0.2');

tl.to(button, .3, {
  transformOrigin: 0,
  scale: 10,
  y: '-450%',
  x: '50%'
}, '-=0.2');