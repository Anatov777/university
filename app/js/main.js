$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3,
    variableWidth: true,
  });
  
  document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.alert').classList.add('closed');
  })
});