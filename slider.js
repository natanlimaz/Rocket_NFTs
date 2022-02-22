$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    autoplay:true,
    autoplayTimeout: 3000,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})