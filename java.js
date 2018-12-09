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

function opensidemenu(){
    document.getElementById('sidemenu').style.width= '50vw';
    document.getElementById('main').style.marginLeft= '50vw';
}
function closesidemenu(){
    document.getElementById('sidemenu').style.width= '0';
    document.getElementById('main').style.marginLeft= '0vw';
}

var pContainerHeight = $('.landingbg').height();

