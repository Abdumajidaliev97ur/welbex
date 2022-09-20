$(function () {
  $('.letters__content-box--two').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

var element = document.getElementById('phone');
var maskOptions = {
  mask: '+7(000)000-00-00',
  lazy: false
};
var mask = new IMask(element, maskOptions);

