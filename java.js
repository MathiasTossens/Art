$(document).ready(function () {
    
    var controller = new ScrollMagic.Controller({
        loglevel: 3, refreshInterval: true
    });
    let scrollPosi = controller.info();
    console.log(scrollPosi) 
    $("form.loglevel input[type=checkbox]").on("change", function (e) {
        
    });
    $('.trigger01').each(function () {
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.95,
        })
            .setClassToggle(this, 'backin')
            //  .addIndicators()
            .addTo(controller);

    });
    $('.trigger02').each(function () {
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.95,
        })
            .TweenMax.to('.trigger02', 1, {scaleY: 0} )
            //  .addIndicators()
            .addTo(controller);

    });
    $('.vignette').each(function () {
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
    //  .addIndicators({
    // indent:'50'
    // })
    .addTo(controller);
$('.collumn').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
});
});

function opensidemenu() {
    document.getElementById('sidemenu').style.width = '100%';
    document.getElementById('main').style.marginLeft = '100%';
}
function closesidemenu() {
    document.getElementById('sidemenu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0vw';
}

