var tl = gsap.timeline()

tl.from('#nav-left', {
    y: -30,
    opacity: 0,
    delay: 0.2,
    duration: 0.5,
})
tl.from('#menu', {
    opacity: 0,
    duration: 0.2,
})
tl.from('#nav-center h2', {
    y: -30,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    stagger: 0.3
})
tl.from('#nav-right', {
    opacity: 0,
    duration: 0.5,
})
tl.from('#profile-photo', {
    height: 0,
    duration: 1,
})
tl.from('#hero-section h1', {
    opacity: 0,
    border: 1,
    delay: 0.5,
    duration: 0.5,
    stagger: 0.4
})
tl.from('#hero-section h2', {
    opacity: 0,
    duration: 2,
    ease: "slow(0.7,0.7,true)"
})
tl.from('#hero-bottom', {
    opacity: 0,
    x: 12,
    duration: 1,
    // ease: "slow(0.7,0.7,true)"
})





// gsap.from('.service-video', {
//     scale : 0,
//     delay: 1,
// })
