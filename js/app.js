//@prepros-prepend "./modules/features.js";
//@prepros-prepend "./modules/scrollManager.js";

$(document).ready(function () {
    
    new Features();
    new ScrollManager();
    new WOW().init();
    
});