var windoww = 0;
var windowh = 0;

var canvasw = 0;
var canvash = 0;

function fitAll(){
/*--------------------------------------------------------- GENERAL ---------------------------------------------------------*/
  windoww = $(window).width();
  windowh = $(window).height();
  
/*--------------------------------------------------------- FITALL ---------------------------------------------------------*/
  canvasw = $('canvas.canvas-normal').width();
  canvash = $('canvas.canvas-normal').height();
  
  if ( windoww <= windowh ) {
    $('body').addClass('fit-canvas-height');
    $('body').removeClass('fit-canvas-width');
  } else {
    $('body').addClass('fit-canvas-width');
    $('body').removeClass('fit-canvas-height');
  }
  
  if ( windowh < windoww ) {
    $('body').addClass('fit-canvas-width');
    $('body').removeClass('fit-canvas-height');
  } else {
    $('body').addClass('fit-canvas-height');
    $('body').removeClass('fit-canvas-width');
  }
}



function sceneParallax(){
/*--------------------------------------------------------- PARALLAX ---------------------------------------------------------*/
  if ( $('.scene-parallax').length ) {
    var $sceneparallax = $('.scene-parallax');

  	(resize = function() {
  		$sceneparallax[0].style.width = window.innerWidth + 'px';
  		$sceneparallax[0].style.height = window.innerHeight + 'px';
  	})();

  	window.onresize = _.debounce(resize, 200);
  	window.onscroll = _.debounce(resize, 200);

  	$sceneparallax.parallax();
  }
}



$(document).ready(function(){
/*--------------------------------------------------------- FITALL ---------------------------------------------------------*/
  $(window).on( 'resize', function(){
    fitAll();
  });
  fitAll();
  
/*--------------------------------------------------------- NORMAL MAP JS ---------------------------------------------------------*/
  jQuery(function($){
    var options = {
      color: normalmap.vec3(1.0, 1.0, 1.0)
    };
    $('#symbol-1').normalmap({
      normalMap: 'assets/lib/normalmap/gfx/symbol-1/normal.png',
      baseColor: normalmap.vec3(1.0, 1.0, 1.0),
      ambient: 0.3,
      metalness: 0,
      roughness: 1.0,
      singlePass: true
    }).then(function(lights){
      bindLight(lights, options);
    });
    $('#symbol-2').normalmap({
      normalMap: 'assets/lib/normalmap/gfx/symbol-2/normal.png',
      baseColor: normalmap.vec3(1.0, 1.0, 1.0),
      ambient: 0.3,
      metalness: 0,
      roughness: 1.0,
      singlePass: true
    }).then(function(lights){
      bindLight(lights, options);
    });
    $('#symbol-3').normalmap({
      normalMap: 'assets/lib/normalmap/gfx/symbol-3/normal.png',
      baseColor: normalmap.vec3(1.0, 1.0, 1.0),
      ambient: 0.3,
      metalness: 0,
      roughness: 1.0,
      singlePass: true
    }).then(function(lights){
      bindLight(lights, options);
    });
  });
  
/*--------------------------------------------------------- PARALLAX ---------------------------------------------------------*/
  sceneParallax();
});