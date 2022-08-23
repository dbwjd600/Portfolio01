$(function(){

    $(".slide").slick({
      dots: false,
      arrows:false,
      centerMode: true,
      slidesToShow: 1,
      autoplay:true,
      autoplaySpeed:1800,
      adaptiveHeight:true
    });

    $('.center').slick({
      centerMode: true,
      // centerPadding: '6px',
      slidesToShow: 1
    });
  });

