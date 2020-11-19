$(document).ready(function () {
  $('backto-top a').click(function(e){
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    },500);
  });
  $('.show-menu').on('click',  function(e){
    e.preventDefault();
    $('body').toggleClass('menu-active');
});

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

gsap.registerPlugin(ScrollTrigger);
// gsap.defaults({ease:"none", duration:1});

// const tl = gsap.timeline();
// tl.from(".about-left-pic",{xPercent: -100})
//   .from(".about-content",{xPercent: 100})


// ScrollTrigger.create({
//   animation:tl,
//   trigger:"#container",
//   star:"top center",
//   end:"+=400",
//   scrub:true,
//   pin:true,
//   anticipatePin:1
// })
gsap.from(".about-cat",{
  scrollTrigger: {
    trigger:".about-cat",
    start:"0 100%",
    end:"0 40%",
    markers:true,
    toggleAction:"play reverse play reverse",
    scrub: true
  },
  x:-800,
  scaleX:.3,
  scaleY:.3,
  rotation: 360,
  duration:3
});
