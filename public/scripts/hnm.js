for(var i = 0; i < 8; i++){
  if(i < 5){
    var tempdiv = document.createElement("div");
    tempdiv.classList = "hnm-image-holder";

    var image = document.createElement("div");
    image.classList = "hnm-image";
    image.style.backgroundImage = "url(../images/temp/special_effects/IMG-20151214-WA0003.jpg)";
    image.style.width = "100%";
    tempdiv.append(image);

    document.getElementById("hnm-images").append(tempdiv);
  }else if(i === 5){
    var tempdiv = document.createElement("button");
    tempdiv.innerText = "View More";
    document.getElementById("hnm-images").append(tempdiv);
  }else{
    var tempdiv = document.createElement("div");
    tempdiv.classList = "hnm-image-holder hide-extend";

    var image = document.createElement("div");
    image.classList = "hnm-image";
    image.style.backgroundImage = "url(../images/temp/special_effects/IMG-20151214-WA0003.jpg)";
    image.style.width = "100%";
    tempdiv.append(image);

    document.getElementById("hnm-images").append(tempdiv);
  }
}

/*
function ImageHolder(){
  this.images = [];
  this.index = 0;

  this.addImage = function(imgURL){
    var image = document.createElement("div");
    image.classList = "sfx-image";
    image.style.backgroundImage = "url(" + imgURL + ")";
    image.style.width = (this.images.length === 0) ? "100%" : "0%";
    this.images.push(image);
  }

  this.compile = function(){
    var holder = document.createElement("div");
    holder.classList = "sfx-image-holder";
    this.images.forEach(function(img){holder.append(img);});
    return holder;
  }

  this.showNext = function(){
    this.images[this.index].style.width = "0%";
    this.index = (this.index < this.images.length - 1) ? this.index + 1 : 0;
    this.images[this.index].style.width = "100%";
  }
}
*/
