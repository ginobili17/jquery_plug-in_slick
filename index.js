$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.thumb'
});

$('.thumb').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider',
  centerMode: true,
  focusOnSelect: true,
  dots: true
})