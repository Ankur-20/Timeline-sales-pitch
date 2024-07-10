const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.logo-img').forEach((icon, index) => {
      gsap.fromTo(icon, 
          { 
              scale: 0, 
              opacity: 0, 
              filter: "blur(20px)" 
          }, 
          { 
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
              scrollTrigger: {
                  trigger: icon,
                  start: "top 80%", 
                  end: "top 20%", 
                  scrub: true, 
                  toggleActions: "play none none none" 
              }
          }
      );
  });
});