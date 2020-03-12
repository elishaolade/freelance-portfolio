

$(function(){

  $('.accordian').addClass('move');

  $('.accordian').on({
    click: function() {
      var panel = this.nextElementSibling;
      if(panel.style.maxHeight) {
        panel.style.maxHeight = null;
      }
      else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  })
})
