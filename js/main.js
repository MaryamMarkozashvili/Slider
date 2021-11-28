$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        margin: 70,
        nav: true, 
        dots: true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
        autoplayHoverPause:false,
                items:1,
                margin:0
            },
            800:{
        autoplayHoverPause:false,
                items:2
            },
            1400:{
        autoplayHoverPause:true,
                items:3
            }
        } 
    })
});

//************ for keyboard navigation ************//

var owl = $('.owl-carousel');
$(document.documentElement).keyup(function(event) {    
    if (event.keyCode == 37) { 
        //left key
        owl.trigger('prev.owl.carousel');
    } else if (event.keyCode == 39) { 
        //right key
        owl.trigger('next.owl.carousel');
    }
});