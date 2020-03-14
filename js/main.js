

$(function(){

  $('.accordian').add('move');

  $('.accordian').on({
    click: function(e) {
      var panel = this.nextElementSibling;
      if(panel.style.maxHeight) {
        panel.style.maxHeight = null;
      }
      else {
        var p = document.querySelectorAll('.panel');
        console.log();
        var panels = $(this).parent().find('.panel');
        console.log(panels);

        const array = Array.from(p);
        console.log(array);

        array.forEach(el => {
          if(el.style.maxHeight !== null)
            el.style.maxHeight = null;
        })

        /* Set max-height to scroll height to open panel*/
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
        e.preventDefault();
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
