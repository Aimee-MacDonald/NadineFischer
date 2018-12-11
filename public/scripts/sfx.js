var sfx_filenames = ["20151207_101101.jpg", "20151207_155642.jpg",
                     "20151209_134204.jpg", "20151209_150350.jpg",
                     "20151209_150446.jpg", "20160127_130646.jpg",
                     "20160128_113018.jpg", "20160128_123511.jpg",
                     "20160204_092424.jpg", "20160204_094549.jpg",
                     "20160204_102936.jpg", "20160530_134226.jpg",
                     "20160602_153255.jpg", "20160614_091629.jpg",
                     "20160614_091701.jpg", "IMG-20150709-WA0008.jpg",
                     "IMG-20151214-WA0003.jpg", "IMG-20151214-WA0004.jpg",
                     "IMG-20160109-WA0001.jpg", "IMG-20160109-WA0003.jpg",
                     "IMG-20160109-WA0004.jpg", "IMG-20160110-WA0007.jpg",
                     "IMG-20160608-WA0008.jpg", "New-folder6.jpg"];

var sfx_img_holder = [new ImageHolder(), new ImageHolder(), new ImageHolder()];

var c = 0;
sfx_filenames.forEach(function(fn){
  sfx_img_holder[c].addImage("../images/temp/special_effects/" + fn);
  c = (c >= 2) ? 0 : c + 1;
});

sfx_img_holder.forEach(function(sih){
  document.getElementById("sfx-images").append(sih.compile());
});

window.setInterval(function(){
  setTimeout(function(){
    sfx_img_holder[0].showNext();
  }, 250);

  setTimeout(function(){
    sfx_img_holder[1].showNext();
  }, 500);

  setTimeout(function(){
    sfx_img_holder[2].showNext();
  }, 750);
}, 5000);

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
