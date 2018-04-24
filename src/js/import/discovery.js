// дополнительные блоки

$('[data-all]').on('click', function() {
  event.preventDefault();
  let id = $(this).attr('href');
  $(this).parent().fadeOut(100);
  $(id).slideDown();
});

//// offers
//             МОБИЛЬНЫЕ
$(window).on('load resize', function() {
  if ($(window).width() <= '767') {
    $('.offers--none').children('.row').prepend($('.offers--block .offers--none-mobile'));
  } else {
    $('.offers--block').find('.row').append($('.offers--none .offers--none-mobile'));
  }
});

//// examples
//             МОБИЛЬНЫЕ
$(window).on('load resize', function() {
  if ($(window).width() <= '767') {
    $('.examples--none').find('.row').prepend($('.examples--block .examples--none-mobile'));
  } else {
    $('.examples--block').append($('.examples--none .examples--none-mobile'));
  }
});

//// reviews
//             МОБИЛЬНЫЕ
$(window).on('load resize', function() {
  if ($(window).width() <= '767') {
    $('.reviews--none').find('.row').prepend($('.reviews--block .reviews--none-mobile'));
  } else {
    $('.reviews--block').append($('.reviews--none .reviews--none-mobile'));
  }
});
