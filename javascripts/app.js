jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 560) {
      $('#row-tochange').removeClass('flex-row');
      $('#row-tochange').addClass('flex-column');
      console.log("yes");
    } else if (ww >= 561) {
      $('#row-tochange').addClass('flex-row');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});