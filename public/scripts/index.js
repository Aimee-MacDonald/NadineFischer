if(window.innerWidth >= 800){
  var el_artboxes = document.getElementsByClassName("art-box");

  for(var i = 0; i < el_artboxes.length; i++){
    var skew = Math.random() * 20;
    var left = Math.random() * 2;
    if(left < 1) skew = skew * -1;
    el_artboxes[i].childNodes[0].style.transform = "rotateZ(" + skew + "deg)";
  }
}
