
document.body.style.overflow = "hidden"; 

let tl = gsap.timeline()

tl.set(".page-wrapper", { opacity: 1});

tl.from(".animation-top-row .letter", { 
    x: '100vw',
    duration: 1.2,
    ease: "power2.out",
     stagger: 0.1,
    delay: 1
 });

 tl.from(".animation-bottom-row .letter", { 
    x: '100vw',
    duration: 1.2,
    ease: "power2.out",
     stagger: 0.1,
 },  "<0.2");



 tl.from([".navbar",".footer", ".section-home-featured"],{
    autoAlpha:0,
    duration: 1,
    onComplete: () => {
        // Unlock scrolling after animation completes
        document.body.style.overflow = "visible";
      }
 }); 


 

/* GO BACK TO TOP ON REFRESH */
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
 

//<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>


const swiper = new Swiper(".swiper", {
 loop: false,

  slidesPerView: 'auto',
  spaceBetween: '6em',
  centeredSlides:true,

  keyboard: {
   enabled: true,
   onlyInViewport: false,
 },
 

 scrollbar: {
   // el: '.swiper-scrollbar',
   draggable: true,
   enabled: true
 },

 mousewheel: {
   releaseOnEdges: true,
   sensitivity:2
 },
 freeMode:true,

 allowTouchMove:true,
 simulateTouch: true,
 touchRatio:1,

 touchStartPreventDefault: true,
   passiveListeners: false,


 });
