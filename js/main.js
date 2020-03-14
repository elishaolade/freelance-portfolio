

$(function(){

  $('.accordian').addClass('move');

  $('.accordian').on({
    click: function() {
      var panel = this.nextElementSibling;
      if(panel.style.maxHeight) {
        panel.style.maxHeight = null;
      }
      else {

        /* Find all elements with panel class name */
        $('.panel').filter(function ( element ) {

          /* Return elements with a max-height other than 0*/
          /* Set the max-height of these elements to 0 */
          return !$(this).css('max-height','0')
        }).css('max-height','0');

        /* Set max-height to scroll height to open panel*/
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  })

  $('.m-header-arrow').on({
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
