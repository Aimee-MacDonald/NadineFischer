var el_hnmsmall1 = document.getElementById("hnmsmall1");
var el_hnmsmall2 = document.getElementById("hnmsmall2");
var el_hnmbig = document.getElementById("hnmbig");
var el_imgsfx = document.getElementById("imgsfx");

el_hnmsmall1.style.backgroundImage = "url(../images/hnmsmall1.jpg)";
el_hnmsmall2.style.backgroundImage = "url(../images/hnmsmall2.jpg)";
el_hnmbig.style.backgroundImage = "url(../images/hnmbig.jpg)";
el_imgsfx.style.backgroundImage = "url(../images/sfx.jpg)";

if(window.innerWidth >= 800){
  var el_artboxes = document.getElementsByClassName("art-box");

  for(var i = 0; i < el_artboxes.length; i++){
    var skew = Math.random() * 20;
    var left = Math.random() * 2;
    if(left < 1) skew = skew * -1;
    el_artboxes[i].childNodes[0].style.transform = "rotateZ(" + skew + "deg)";
  }
}
