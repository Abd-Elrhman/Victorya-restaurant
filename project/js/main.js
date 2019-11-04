// Nice Scoll
$(function() {  
    $("body").niceScroll({
        cursorcolor: "#F98169",
        cursorborder: "none",
        cursorwidth: "8px",
        scrollspeed: 80,
        enablekeyboard: true
    });
});

// the toggler button 
$(function (){
    $('.the-toggler').on('click',function(){
        $('.navbar').slideToggle();
    });
});

// owl.carousel.js
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
    loop:true,
    margin: 0,
    center:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    });
});