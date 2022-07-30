$(document).ready(function() {
    $('.features__slider').slick({
      arrows: false,
      dots: true,
      infinite: false,
      variableWidth: true,
      slidesToShow: 1,
      initialSlide: 1,
      focusOnSelect: true
    });
});