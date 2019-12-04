/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('.main-header').addClass('fixed-top purple-top');
    }
    else {
        $('.main-header').removeClass('fixed-top purple-top');
    }
});

/* =========================================
Owl Carousel
Testimonials
=========================================== */
$(document).ready(function(){
    $('#testimonial').owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:10,
    dots:false,
    responsiveClass:true,
    nav:false,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        }
    }
    });

    /* Plans */
    $('#plans').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:10,
        responsiveClass:true,
        nav:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                loop:false,
            },
            600:{
                items:3,
                nav:true,
                loop:false,
            }
        }
        });

});