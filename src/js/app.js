import './lib/maskedinput';
import './import/discovery';
import './import/animate';

//mask
$('#phone').mask('99 99999 99 999');

//якорь
$('nav, .menu__mobile').on('click','a', function(event) {
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});
  
//menu-open
$('.menu-open').on('click', function() {
  $('.menu__mobile').fadeIn();
  $('.menu--bg').fadeIn();
});
$('.menu--bg, .close, .menu__mobile a').on('click', function() {
  $('.menu__mobile').fadeOut();
  $('.menu--bg').fadeOut();
});
