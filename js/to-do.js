$(document).ready(function(){

  // Change active class to filter buttons
  let filterBtns = document.querySelectorAll(".filter > button");
  filterBtns.forEach(function(element) {
    element.addEventListener('click', function(){
      filterBtns.forEach(btn => {
        btn.classList.remove('active');
      });
      element.classList.add('active');
    })
  });

});




