// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
// });
// const scrollContainer = document.querySelector('[data-scroll-container]');
// if (scrollContainer) {
//     const scroll = new LocomotiveScroll({
//         el: scrollContainer,
//         smooth: true,
//     });
// } else {
//     console.error('Locomotive Scroll: No scroll container found.');
// }

function circleMouseFollower() {
    const miniCircle = document.querySelector(".minicircle");
    window.addEventListener("mousemove", function(dets) {
      miniCircle.style.top = `${dets.clientY - 5}px`;
      miniCircle.style.left = `${dets.clientX - 5}px`;
    });
  }
  

function firstPageAnim(){
    var tl = gsap.timeline();  // Create a GSAP timeline for sequential animations.
   
    tl.from(".nav", {  // Target the .nav element and apply animation
        y: '-10',        // Move the element from 10px above its original position
        opacity: 0,      // Start the opacity at 0 (fully transparent)
        duration: 1.5,   // Set the duration of the animation to 1.5 seconds
        ease: Expo.easeInOut  // Apply an ease-in-out effect to make the movement smoother
    })

    .to(".boundingelem",{
        y: '0',
        duration: 2, 
        delay:-1,
        ease: Expo.easeInOut,
        stagger:.2

    })
    .from(".herofooter",{
        y: '-10',
        opacity: 0, 
        duration: 1.5, 
        delay:-1,
        ease: Expo.easeInOut,
        

    })
}
document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power1,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * .5), // Rotates the image with limits
        });
    });
    elem.addEventListener("mouseleave", function (dets) {


        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power1,
           
        });
    });
});

circleMouseFollower();
firstPageAnim();

