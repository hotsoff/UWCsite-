$(window).load(function() {
$('#slider').nivoSlider({
  effect:'random',
  slices:15,
  boxCols:8,
  boxRows:8,
  animSpeed:500,
  pauseTime:4000,
  directionNav:false,
  directionNavHide:false,
  controlNav:false,
  captionOpacity:1
});
});


var m = document.querySelector("main"),
    h = document.querySelector("header"),
    hHeight;
 
function setTopPadding() {
  hHeight = h.offsetHeight;
  m.style.paddingTop = hHeight + "px";
}



window.onload = function() {
  setTopPadding();
  onScroll();
};
 
window.onresize = function() {
  setTopPadding();
};



