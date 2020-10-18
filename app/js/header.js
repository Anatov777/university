$(document).ready(function(){
  // Notifications counter
  let notificationElems = document.querySelectorAll('.notifications__list li');
  notificationElems.length > 0 ? document.querySelector('.notifications__nums').classList.add('counter') : document.querySelector('.notifications__nums').classList.remove('counter');
  document.querySelector('.notifications__nums').innerHTML = notificationElems.length;
  document.querySelector('.notifications__number').innerHTML = notificationElems.length;
  $('.notifications__list').bind("DOMSubtreeModified",function(){
    listLength = document.querySelectorAll('.notifications__list li').length;
    listLength > 0 ? document.querySelector('.notifications__nums').classList.add('counter') : document.querySelector('.notifications__nums').classList.remove('counter');
    document.querySelector('.notifications__nums').innerHTML = listLength;
    listLength === 0 ? document.querySelector('.notifications__content').classList.add('empty') : document.querySelector('.notifications__content').classList.remove('empty');
    document.querySelector('.notifications__number').innerHTML = listLength;
});
// Popups
  $('#inline-popups').magnificPopup({
    delegate: 'a',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function() {
         this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

// Burger menu trigger
// $('.burger').on('click', function(){
//   if (document.documentElement.clientWidth <= 1299){
//       document.querySelector(".main-nav").append(document.querySelector(".burger-menu"));
//       document.querySelector(".burger-menu").style.display = "block";
//   }
  
//   $('.main-nav').slideToggle();
// });

});