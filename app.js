// Pin first page
const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: '.first-page',
    start: '0%',
    end: '100%',
    pin: true,
    // markers: true,
    pinSpacing: false
  }
});

// Highlight page 2
const tlH = gsap.timeline({
  scrollTrigger: {
    trigger: '.second-page',
    start: '-40%',
    end: '40%',
    scrub: true,
    // markers: true,
  }
});

tlH.fromTo('.highlight', {color: 'rgba(255,255,255, 0.4)'}, {color: 'rgba(255,255,255, 1)', stagger: 1});


const tlHRemove = gsap.timeline({
  scrollTrigger: {
    trigger: '.second-page',
    start: '-20%',
    end: '60%',
    scrub: true,
    // markers: true,
  }
});

tlHRemove.to('.highlight', {color: 'rgba(255,255,255, 0.4)', stagger: 1});

// split phone page 3
const tlSplit = gsap.timeline({
  scrollTrigger: {
    trigger: '.third-page',
    start: '-50%',
    end: '-10%',
    scrub: true,
    // markers: true,
  }
});

// tlSplit.to('.large-phone', {x: 50,duration: 1});
// tlSplit.to('.small-phone', {x: -30,duration: 1}, '<'); 
tlSplit.fromTo('.large-phone', {x: '40%'}, {x: '20%'});
tlSplit.fromTo('.small-phone', {x: '-40%'}, {x: '-20%'}, '<'); 
tlSplit.fromTo('.product-text-left', {x: 50, opacity: 0}, {x: 0, opacity: 1}, '<');
tlSplit.fromTo('.product-text-right', {x: -50, opacity: 0}, {x: 0, opacity: 1}, '<');

const tlSplitPin = gsap.timeline({
  scrollTrigger: {
    trigger: '.third-page',
    start: '0%',
    end: '100%',
    pin: true,
    pinSpacing: false 
  }
});

/* 
// fifth page play video 
// const tlPlayVideo = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.fifth-page',
//     start: '-40%',
//     end: '60%',
//     scrub: true
//   }
// });


// const video = document.querySelector('.product-video');
// let duration = null;
// video.addEventListener('loadedmetadata', () => {
//   duration = video.duration;
//   console.log(duration)

//   tlPlayVideo.fromTo(video, {currentTime: 0}, {currentTime: duration});
// });


// const tlForthPin = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.fourth-page',
//     start: '0%',
//     end: '100%',
//     pin: true,
//     pinSpacing: false 
//   }
// });


// const tlFifthPin = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.fifth-page',
//     start: '0%',
//     end: '100%',
//     pin: true,
//     pinSpacing: false 
//   }
// });
*/

// Caraousel

const swatches = document.querySelectorAll('.swatches img');
const gallery = document.querySelector('.phone-gallery');
const slides = document.querySelectorAll('.phone-gallery-container');

let currentSwatch = 'blue';
let closeUpIndex = 2;

swatches.forEach((swatchElement, index) => {
  const coord = slides[index].getBoundingClientRect().left;
  // console.log(coord.right);
  swatchElement.addEventListener('click', (event) => {
    let swatchName = event.target.getAttribute('swatch');
    let closeUp = document.querySelector(`.${swatchName}`);
    console.log(closeUp);

    // Check to see if user clicks again on the same swatch. then do nothing
    if (currentSwatch === swatchName) return;

    // else u can proceed and change to the next closeup
    gsap.set(closeUp, {zIndex: closeUpIndex++}); // increament zindex 
    gsap.fromTo(closeUp, {opacity: 0}, {opacity: 1, duration: 1});
    currentSwatch = swatchName; // updated to current swatch.

    // Gallery
    gsap.to(gallery, {x: -coord, duration: 1, ease: 'back.out(1)'});
  });
});

// Pin Fourth/Caraousel page

const tlFourthPage = gsap.timeline({
  scrollTrigger: {
    trigger: '.fourth-page',
    start: '0%',
    end: '100%',
    pin: true,
    pinSpacing: false
  }
})


// Fifth page

const tlVideo = gsap.timeline({
  scrollTrigger: {
    trigger: '.fifth-page',
    start: '0%',
    end: '150%',
    scrub: true,
    pin: true,
  }
});



tlVideo.fromTo('.product-video', {currentTime: 0}, {currentTime: 3, duration: 1});
tlVideo.fromTo('.product-info-container h3', {opacity: 0}, {opacity: 1, stagger: 0.25, duration: 0.5}, '<');

// Pin Fifth page
const tlFifthPin = gsap.timeline({
  scrollTrigger: {
    trigger: '.fifth-page',
    start: '0%',
    end: '150%',
    pinSpacing: false
  }
});

// Sixth Page
const tlParallax = gsap.timeline({
  scrollTrigger: {
    trigger: '.sixth-page',
    start: '-25%',
    end: '50%',
    scrub: true,
  }
});

tlParallax.fromTo('.photo-description', {y: 0}, {y: -80});
tlParallax.fromTo('.portrait-container', {y: 0}, {y: -80}, '<');
tlParallax.fromTo('.phone-video', {y: 0}, {y: -150}, '<');