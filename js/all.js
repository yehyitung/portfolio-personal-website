// backtop-btn, RWD menu-btn
$(document).ready(function () {
  $('backto-top a').click(function(e){
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    },500);
  });
  $('.navbar-hamburger').on('click',  function(e){
    e.preventDefault();
    $('.navbar-list').toggleClass('is-active');
  });
});

// navbar-item
$('.navbar-item').on('click', function(){
  $('.navbar-list').removeClass('is-active')
})

// lightbox open,close
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

// gsap animation effect
gsap.registerPlugin(ScrollTrigger);

gsap.from(".about-cat",{
  scrollTrigger: {
    trigger:".about-cat",
    start:"0 100%",
    end:"0 40%",
    // markers:true,
    toggleAction:"play reverse play reverse",
    scrub: true
  },
  x:-800,
  scaleX:.3,
  scaleY:.3,
  rotation: 360,
  duration:2
});

gsap.from(".about-content",{
  scrollTrigger: {
    trigger:".about-content",
    start:"0 100%",
    end:"0 40%",
    toggleAction:"play reverse play reverse",
    scrub: true
  },
  x:1500,
  duration:2
});

gsap.from(".works-img-cloud",{
  scrollTrigger: {
    trigger:".works-img-cloud",
    start:"0 100%",
    end:"0 40%",
    toggleAction:"play reverse play reverse",
    scrub: true
  },
  x:100,
  ease:"bounce",
  duration:3
});

gsap.from(".works-img-star",{
  scrollTrigger: {
    trigger:".works-img-star",
    start:"0 100%",
    end:"0 40%",
    toggleAction:"play reverse play reverse",
    scrub: true
  },
  x:-200,
  ease:"bounce",
  duration:3
});

gsap.from(".works-img-rhombus",{
  scrollTrigger: {
    trigger:".works-img-rhombus",
    start:"0 100%",
    end:"0 40%",
    toggleAction:"play reverse play reverse",
    scrub: true
  },
  y:150,
  ease:"bounce",
  duration:3
});

gsap.from(".works-img-trapezoid",{
  scrollTrigger: {
    trigger:".works-img-trapezoid",
    start:"0 100%",
    end:"0 40%",
    toggleAction:"play reverse play reverse",
    scrub: true
  },
  x:100,
  ease:"bounce",
  duration:3
});

gsap.from(".works-img-twocircle",{
  scrollTrigger: {
    trigger:".works-img-twocircle",
    start:"0 100%",
    end:"0 40%",
    toggleAction:"play reverse play reverse",
    scrub: true
  },
  x:-200,
  ease:"bounce",
  duration:3
});

gsap.from(".works-img-circle",{
  scrollTrigger: {
    trigger:".works-img-circle",
    start:"0 100%",
    end:"0 40%",
    toggleAction:"play reverse play reverse",
    scrub: true
  },
  y:150,
  ease:"bounce",
  duration:3
});

Draggable.create("#flycat", {type:"x,y", edgeResistance:0.65, bounds:".hero-section", inertia:true});
Draggable.create("#butcat", {type:"x,y", edgeResistance:0.65, bounds:".hero-section", inertia:true});
Draggable.create("#stantcat", {type:"x,y", edgeResistance:0.65, bounds:".hero-section", inertia:true});
Draggable.create("#sitcat", {type:"x,y", edgeResistance:0.65, bounds:".hero-section", inertia:true});
Draggable.create("#backcat", {type:"x,y", edgeResistance:0.65, bounds:".hero-section", inertia:true});
// Draggable.create("#flycat", {type: "rotation", inertia: true});
