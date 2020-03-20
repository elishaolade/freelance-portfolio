function Project(img, page, logo, services) {
  this.img : img;
  this.page : page;
  this.logo : logo;
  this.services : services;

  this.generate : function() {
    document.createElement(`<div class="box"></div>`);
  }
}
