;(function(){
  
  var base = { w : 1160 , h : 752 },
  header = document.querySelector("body > header"),
  footer = document.querySelector("body > footer"),
  svg = document.querySelector("body > svg"),
  layout = function() {
    var width = window.innerWidth,
      height = window.innerHeight,
      marginHeight = height / 10,
      svgHeight = marginHeight * 8;
    header.style.height = marginHeight + "px";
    footer.style.height = marginHeight + "px"; 
    svg.style.top = marginHeight + "px";
    svg.setAttribute("height", svgHeight);
    svg.setAttribute("width", svgHeight * (1160 / 752));
  };

  window.onresize = layout;

  layout();
}());
