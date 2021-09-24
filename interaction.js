

const circle = new mojs.Shape({
  fill:           'none',
  radius:         25,
  scale:          { 0: 1 },
  angle:          { 'rand(-35, -70)': 0 },
  duration:       600,
  left: 0,        top: 0,
  easing: 'cubic.out',
  radius:         { 0 : 25 },
  strokeWidth:    { 8 : 0 },
  stroke:         'rgba(3,17,172,0.1)',
});


document.addEventListener( 'click', function (e) {

   circle
    .tune({ x: e.pageX, y: e.pageY  })
    .replay();

});

//
// document.addEventListener( 'click', shootDots);
//
// function shootDots (e) {
//   const colors = ['#FFC2C2', '#E2F1FF', '#D9DCFF', '#D9FFED', '#FFF0D9', '#EED9FF'];
//
//   const numOfDots = Math.floor(Math.random() * 5 + 3);
//   const randomColor = Math.floor(Math.random() * colors.length);
//
//   const burst = new mojs.Burst({
//     left: 0, top: 0,
//     radius:   { 4 : 32 },
//     angle:    45,
//     count: numOfDots,
//     children: {
//       shape:        'line',
//       radius:       3,
//       scale:        1,
//       stroke:       colors[randomColor],
//       strokeDasharray: '100%',
//       strokeDashoffset: { '-100%' : '100%' },
//       duration:     500,
//       easing:       'ease.out',
//     }
//   });
//
//   burst
//     .tune({ x: e.pageX, y: e.pageY })
//     .replay();
// }
