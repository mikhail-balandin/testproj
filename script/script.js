$('.prices__items').slick({
    arrows:false,
    slidesToShow:3,
    responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
        ]
});