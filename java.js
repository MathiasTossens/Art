$(document).ready(function (){
 
    var controller = new ScrollMagic.Controller();

    $('.trigger01').each(function(){
        var ourScene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.95,
    })
    .setClassToggle(this, 'backin')
    // .addIndicators()
    .addTo(controller);
    
    });

    // $('.sidelink').each(function(){
    //     var ourScene = new ScrollMagic.Scene({
    //     triggerElement: this,
    //     triggerHook: 0.5,
    //     reverse: true,
    //     duration: '500px'
    // })
    // .setClassToggle(this, 'sidelink-after')
    // // .addIndicators()
    // .addTo(controller);
    
    // });

    $('.vignette').each(function(){
        var ourScene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.9,
        reverse: true
    })
    .setClassToggle(this, 'vignetteIn')
    // .addIndicators()
    .addTo(controller);
    
    });

    var ourScene2 = new ScrollMagic.Scene({
    triggerElement: '#trigger1',
    triggerHook: 0,
    })
    .setClassToggle('div.container-header', 'flydown')
    // .addIndicators({
     //   indent:'50'
   // })
    .addTo(controller);

// ScrollReveal().reveal('.vignette', {
//     delay: 200,
//     rotate: {
//         x: 0,
//         z: 5
//     }
// })
// ScrollReveal().reveal('.slideinleft', {
//     delay: 200,
//     origin: 'left',
//     distance: '200px'
// })
// ScrollReveal().reveal('#bigdown', {
//     delay: 1000,
//     origin: 'top',
//     distance: '100px',
// })


$('.collumn').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
  });
});
  
function opensidemenu() {
    document.getElementById('sidemenu').style.width = '100vw';
    document.getElementById('main').style.marginLeft = '100vw';
}
function closesidemenu() {
    document.getElementById('sidemenu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0vw';
}