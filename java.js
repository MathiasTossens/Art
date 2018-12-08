ScrollReveal().reveal('.vignette', {
    delay: 200,
    rotate: {
        x: 0,
        z: 5
        } 
})
ScrollReveal().reveal('.slideinleft', {
    delay: 200,
    origin: 'left',
    distance: '200px'
})
ScrollReveal().reveal('#bigdown', {
    delay: 1000,
    origin: 'top',
    distance: '100px',
})

$('#gallery').lightGallery();
