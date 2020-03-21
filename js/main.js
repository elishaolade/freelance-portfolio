

$(function(){

  var optionsMenu = document.querySelector('.options');
  var arrow = document.querySelector('.arrow-down');
  var optionLinks = document.querySelectorAll('.option-link');
  var displayWord = document.querySelector('.word');

  $('.accordian').add('move');

  $('.accordian').on({
    click: function(e) {
      var panel = this.nextElementSibling;
      if(panel.style.maxHeight) {
        panel.style.maxHeight = null;
      }
      else {
        var p = document.querySelectorAll('.panel');
        var panels = $(this).parent().find('.panel');

        const array = Array.from(p);

        array.forEach(el => {
          if(el.style.maxHeight !== null)
            el.style.maxHeight = null;
        })
        /* Set max-height to scroll height to open panel*/
        panel.style.maxHeight = panel.scrollHeight + "px";

        $(this).find('.accordian-arrow').toggleClass('active');

      }
        e.preventDefault();
    }
  })

  arrow.addEventListener('click', ()=> {
    if ( optionsMenu.style.maxHeight ) {
      arrow.classList.toggle('active');
      optionsMenu.style.maxHeight = null;
    }
    else {
      arrow.classList.toggle('active');
      optionsMenu.style.maxHeight = `${ optionsMenu.scrollHeight }px`;
    }
  })

  for( var i=0; i< optionLinks.length; i++) {
    let link = optionLinks[i];
    link.addEventListener('click', ()=>{
      let clickedWord = link.dataset.value;
      displayWord.innerHTML = clickedWord;
      if ( optionsMenu.style.maxHeight ) {
        arrow.classList.toggle('active');
        optionsMenu.style.maxHeight = null;
      }
      else {
        arrow.classList.toggle('active');
        optionsMenu.style.maxHeight = `${ optionsMenu.scrollHeight }px`;
      }
    })

  }

  // link => link.addEventListener('click', ()=> {
  //   var clickedWord = link.dataset.value;
  //   displayWord.innerHTML = clickedWord;




  // $('.m-header-arrow').on({
  //   click: function(){
  //     $(this).toggleClass('active');
  //     $('.m-header').toggleClass('active');
  //     $('footer').toggleClass('active');
  //     $('body').toggleClass('active');
  //    }
  // })
  //
  // $('.arrow-down').on({
  //   click: function() {
  //     var maxHeight = $('options').css("maxHeight");
  //     console.log(maxHeight);
  //     var scrollHeight = $('.options').prop("scrollHeight");
  //     console.log(scrollHeight);
  //     if(maxHeight === "undefined"){
  //       $(this).toggleClass('active');
  //       $('.options').css("maxHeight","0");
  //     }
  //     else {
  //       $(this).toggleClass('active');
  //       $('.options').css("maxHeight", scrollHeight + 'px');
  //     }
  //   }
  // })
});

jQuery.fn.rotate = function(degrees) {
  $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
}
