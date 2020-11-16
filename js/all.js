$(document).ready(function () {
  $('backto-top a').click(function(e){
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    },500);
  })
});

var openLightBox = document.querySelector('.works');
openLightBox.addEventListener('click', function(){
  document.querySelector('.lightbox').classList.add("open");
});
var closeBtn = document.querySelector('.lightbox');
closeBtn.addEventListener('click', function(e){
  if(e.target.id === "lightbox"){
    document.querySelector('.lightbox').classList.remove("open");
  }
});