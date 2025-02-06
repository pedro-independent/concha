
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
 

