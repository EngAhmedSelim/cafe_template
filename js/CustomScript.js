// change navbar color on scroll

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $(".navbar").css("background-color", "#808080");
        }
        else {
            $(".navbar").css("background-color", "transparent");
        }
    })
})

// MAGNIFIC POPUP
$('.image-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-with-zoom',
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function (openerElement) {
            // openerElement is the element on which popup was initialized, in this case its <a> tag
            // you don't need to add "opener" option if this code matches your needs, it's defailt one.
            return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
    }
});

// smooth scroll

$(document).ready(function () {
    $(".navbar a, footer a[href='#home']").on('click', function (event) {
        if (this.hash !== "") {
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {
                window.location.hash = hash;
            });
        }
    });
});

// nice scroll 
$("html").niceScroll({
    cursorcolor: "#bb0a0a"
})

// wow animation

new WOW().init();
