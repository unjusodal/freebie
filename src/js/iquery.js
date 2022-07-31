$(document).ready(function() {
    $('.features__slider').slick({
      arrows: false,
      dots: true,
      infinite: false,
      variableWidth: true,
      slidesToShow: 1,
      initialSlide: 1,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            centerMode: true
          }
        }
      ]
    });

    $('.faqs__accordion').accordion({
      heightStyle: 'content',
      header: '.accordion__header'
    });

    $('.menu-btn').click(function() {
      $('.menu').toggleClass('menu--active')
      $('.nav').toggleClass('nav--active')
    })
});