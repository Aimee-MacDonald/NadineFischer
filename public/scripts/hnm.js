var image_holder = [new ImageHolder("row", 2500), new ImageHolder("row", 2500),
                    new ImageHolder("row", 5000), new ImageHolder("row", 5000),
                    new ImageHolder("column", 1000), new ImageHolder("row", 5000),
                    new ImageHolder("column", 1000)];

image_holder.forEach(function(ih, i){
  ih.addImage("IMG-20150709-WA0008.jpg");
  ih.addImage("IMG-20150709-WA0008.jpg");
  ih.addImage("IMG-20150709-WA0008.jpg");

  var el_ih = ih.compile();

  switch(i){
    case 2:
      ih.timer += 500;
      break;

    case 5:
      var seeMore = document.createElement("button");
      seeMore.innerText = "See More";
      document.getElementById("hnm-images").append(seeMore);
      el_ih.classList += " hide-extend";
      break;

    case 6:
      ih.timer += 500;
      el_ih.classList += " hide-extend";
      break;
  }

  document.getElementById("hnm-images").append(el_ih);
});

var refreshRate = 150;
window.setInterval(function(){
  image_holder.forEach(function(ih){
    ih.update(refreshRate);
  });
}, refreshRate);

function ImageHolder(d, t){
  this.direction = d;
  this.turnTime = t;
  this.timer = 0;
  this.index = 0;
  this.images = [];

  this.addImage = function(imgURL){
    var tempImg = document.createElement("div");
    tempImg.classList = "hnm-image";
    tempImg.style.backgroundImage = "url(../images/temp/special_effects/" + imgURL + ")";
    this.images.push(tempImg);
  }

  this.update = function(rr){
    this.timer -= rr;

    if(this.timer <= 0){
      this.timer = this.turnTime;
      this.showNext();
    }
  }

  this.showNext = function(){
    if(this.direction === "row"){
      this.images[this.index].style.width = "0%";
      this.index = (this.index < this.images.length - 1) ? this.index + 1 : 0;
      this.images[this.index].style.width = "100%";
    }else if (this.direction === "column") {
      this.images[this.index].style.height = "0%";
      this.index = (this.index < this.images.length - 1) ? this.index + 1 : 0;
      this.images[this.index].style.height = "100%";
    }
  }

  this.compile = function(){
    var ih = document.createElement("div");
    ih.classList = "hnm-image-holder";
    ih.style.flexFlow = "nowrap " + this.direction;

    if(this.direction === "row"){
      this.images.forEach(function(img, i){
        img.style.width = "0%";
        ih.append(img);
      });
    }else if (this.direction === "column"){
      this.images.forEach(function(img, i){
        img.style.height = "0%";
        ih.append(img);
      });
    }

    return ih;
  }
}
