<<<<<<< Updated upstream
(function(_0x236ab4,_0x1d9017){var _0x46b97c=_0x3869,_0x56545f=_0x236ab4();while(!![]){try{var _0x2a9e63=-parseInt(_0x46b97c(0x11e))/0x1*(-parseInt(_0x46b97c(0x128))/0x2)+parseInt(_0x46b97c(0x124))/0x3*(parseInt(_0x46b97c(0x122))/0x4)+parseInt(_0x46b97c(0x11d))/0x5*(parseInt(_0x46b97c(0x11b))/0x6)+parseInt(_0x46b97c(0x11c))/0x7+-parseInt(_0x46b97c(0x11f))/0x8+-parseInt(_0x46b97c(0x121))/0x9+-parseInt(_0x46b97c(0x11a))/0xa*(parseInt(_0x46b97c(0x120))/0xb);if(_0x2a9e63===_0x1d9017)break;else _0x56545f['push'](_0x56545f['shift']());}catch(_0x16bcc1){_0x56545f['push'](_0x56545f['shift']());}}}(_0x40b6,0x3bf2b));var strand,hello,strandX;function preload(){var _0x28db99=_0x3869;strand=loadImage(_0x28db99(0x123));}function setup(){var _0x2660a8=_0x3869;canvas=createCanvas(0x258,0x190),canvas[_0x2660a8(0x126)]('processing'),strandX=0x0,hello=0x1,fill(_0x2660a8(0x129)),textFont(_0x2660a8(0x125)),textSize(0xe);}function _0x3869(_0x3c76de,_0x5d244f){var _0x40b616=_0x40b6();return _0x3869=function(_0x3869cb,_0x424ad8){_0x3869cb=_0x3869cb-0x11a;var _0x5d92de=_0x40b616[_0x3869cb];return _0x5d92de;},_0x3869(_0x3c76de,_0x5d244f);}function _0x40b6(){var _0x41f3ea=['163408wtLMbv','images/backgrounds/strand.jpg','3HqlULA','Verdana','parent','grey','700142MwRMef','black','10VkYBYs','12uoEOna','2958585ZEmcLI','113040iBcaKG','1VEEmDX','357184nNUDwI','3611465ZAakRQ','2162556KRNhKH'];_0x40b6=function(){return _0x41f3ea;};return _0x40b6();}function draw(){var _0x826bc7=_0x3869;background(_0x826bc7(0x127)),image(strand,strandX,0x0),strandX>0x0?image(strand,strandX-width,0x0):(0x0,image(strand,strandX+width,0x0)),strandX==width&&(strandX=0x0),strandX==-width&&(strandX=0x0),keyIsDown(RIGHT_ARROW)?strandX++:strandX--,text('strandX='+strandX,0x14,0x14);}
=======
var strand;
var hello;
var strandX;

function preload() {
  strand = loadImage("images/backgrounds/strand.jpg");
}

function setup() {
  canvas = createCanvas(600,400);
  canvas.parent('processing');
  strandX=0;
  hello=1
  fill('black');
  textFont("Verdana");
  textSize(14);  
}

function draw() {
  background('grey');
  image(strand, strandX, 0);
  if (strandX > 0) {
    image(strand, strandX - width, 0);
  } else {0
    image(strand, strandX + width, 0);
  }
  if (strandX == width ) {
    strandX = 0;
  }
  if (strandX == -width) {
    strandX = 0;
  }
  
  if (keyIsDown(RIGHT_ARROW)) {
    strandX++;
  } 
  else {
    strandX--; 
  }

  
  text("strandX=" + strandX,20,20);
}
>>>>>>> Stashed changes
