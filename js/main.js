

$(function(){

  $('.accordian').addClass('move');

  $('.accordian').on({
    click: function() {
      var panel = this.nextElementSibling;
      if(panel.style.maxHeight) {
        panel.style.maxHeight = null;
      }
      else {
        $('.panel').filter(function ( element ) {
          return !$(this).css('max-height','0')
        }).css('max-height','0');
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  })

  $('.arrow').on({
    click: function(){
      $(this).toggleClass('active');
      $('.m-header').toggleClass('active');
      $('footer').toggleClass('active');
      $('body').toggleClass('active');
     }
  })
})

jQuery.fn.rotate = function(degrees) {
  $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
}
