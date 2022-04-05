$('.owl-carousel').owlCarousel({
    loop:true, /* loop */
    margin:5, /* margin entre os filmes */
    nav:false, /* bolinhas de navegação  */
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});