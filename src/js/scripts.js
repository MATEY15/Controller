//= jquery.min.js
//= barba.min.js
//= jquery.magnific-popup.min.js
//= slick.min.js
//= select.js
//= PageScroll2id.min.js

// Barba.Pjax.start();

$(".controller-hover--img a").mPageScroll2id({
    offset:50
});

window.onload = function(){
  // $("body").toggleClass('opacity');
  $("#overlayer").delay(1000).fadeOut("slow");
  // overlay.toggle();
  setTimeout(function() {
    // overlay.toggle();
  }, 800);
}

$.each($('.qty-input'), function(){
  var slice = $(this);
  slice.find('i').click(function() {
    val = parseInt(slice.find('input').val());
    console.log(slice.find('i').hasClass('less'))
    if ($(this).hasClass('less')) {
      val = val - 1;
    } else if ($(this).hasClass('more')) {
      val = val + 1;
    }
    if (val < 1) {
      val = 1;
    }
    slice.find('input').val(val);
  });
});

function colorRadio(){
  $.each($('.radio-color--text'), function(){
    var colorThis = $(this).find('.radio-view').data('color');
    var gradientThis = $(this).find('.radio-view').data('gradient');
    var imagesThis = $(this).find('.radio-view').data('images');
    if(colorThis != undefined){
      $(this).find('.radio-view').css({
        'background': colorThis
      });
    }
    if(gradientThis != undefined){
      $(this).find('.radio-view').css({
        'background-image': gradientThis
      });
    }
    if(imagesThis != undefined){
      $(this).find('.radio-view').css({
        'background': 'url(../img/icon-bg/'+ imagesThis +')'
      });
    }
    
  });
}
colorRadio();

// $('.radio-color--text .radio-view').css({
//   'background': '#000'
// });

// Tabs
tabs();
$('.tab-link li').click(function() {
  var obj = $(this);
  var container = obj.parents('.tab-container');
  var index = obj.index();
  $('.tab-link li', container).removeClass('active').eq(index).addClass('active');
  $('.tab-hidde .pane', container).hide().removeClass('active').eq(index).fadeIn().addClass('active');
});
function tabs () {
  $('.tab-container').each(function() {
    $('.tab-link li', this).eq(0).addClass('active');
    $('.tab-hidde .pane', this).eq(0).fadeIn().addClass('active');
  });
}

var acordeon = $('.faq-acordeon');

acordeon.each(function(){
  var acordeonItems = $(this).find('.acordeon-items');
  
  acordeonItems.first().find('.acordeon-content').show().prev().addClass('is-active');

  $(this).find('.acordeon-heading').on('click', function(){

    if($(this).next('.acordeon-content').is(':hidden')) {
      acordeonItems.find('.acordeon-content').slideUp(250);
      acordeonItems.find('.acordeon-heading').removeClass('is-active');
      $(this).toggleClass('is-active');
      $(this).next('.acordeon-content').slideDown(250);
    }

    else {
      $(this).removeClass('is-active');
      $(this).next('.acordeon-content').slideUp(250);
    }

  });
  
});

$('.slider-comment').slick({
  arrows: true,
  // asNavFor: '.slider-activity--img',
  speed: 600,
  adaptiveHeight: true,
  // centerPadding: '60px',
  dots: true,
  focusOnSelect: true,
  slidesToShow: 1,
  appendArrows: ".arrow-custom",
  infinite: true,
  prevArrow: '<button type="button" class="slick-prev activity-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20"><g><g><path fill="#fff" d="M11.674 9.22L2.584.32c-.21-.207-.49-.32-.79-.32-.299 0-.58.113-.79.32l-.67.655a1.08 1.08 0 0 0 0 1.547l7.634 7.474-7.642 7.482a1.076 1.076 0 0 0 0 1.547l.67.655c.21.206.49.32.79.32.3 0 .58-.114.79-.32l9.098-8.908c.21-.206.327-.482.326-.776 0-.294-.115-.57-.326-.776z"/></g></g></svg></button>',
  nextArrow: '<button type="button" class="slick-next activity-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20"><g><g><path fill="#fff" d="M11.674 9.22L2.584.32c-.21-.207-.49-.32-.79-.32-.299 0-.58.113-.79.32l-.67.655a1.08 1.08 0 0 0 0 1.547l7.634 7.474-7.642 7.482a1.076 1.076 0 0 0 0 1.547l.67.655c.21.206.49.32.79.32.3 0 .58-.114.79-.32l9.098-8.908c.21-.206.327-.482.326-.776 0-.294-.115-.57-.326-.776z"/></g></g></svg></button>',
  appendDots:  '.dots-custom'
});
$('.left').click(function(){
  $('.slider').slick('slickPrev');
})

$('.right').click(function(){
  $('.slider').slick('slickNext');
})

$('.slider-community').slick({
  arrows: true,
  // asNavFor: '.slider-activity--img',
  speed: 600,
  adaptiveHeight: true,
  centerPadding: '60px',
  dots: true,
  focusOnSelect: true,
  slidesToShow: 1,
  appendArrows: ".arrow-custom2",
  infinite: true,
  prevArrow: '<button type="button" class="slick-prev activity-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20"><g><g><path fill="#fff" d="M11.674 9.22L2.584.32c-.21-.207-.49-.32-.79-.32-.299 0-.58.113-.79.32l-.67.655a1.08 1.08 0 0 0 0 1.547l7.634 7.474-7.642 7.482a1.076 1.076 0 0 0 0 1.547l.67.655c.21.206.49.32.79.32.3 0 .58-.114.79-.32l9.098-8.908c.21-.206.327-.482.326-.776 0-.294-.115-.57-.326-.776z"/></g></g></svg></button>',
  nextArrow: '<button type="button" class="slick-next activity-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20"><g><g><path fill="#fff" d="M11.674 9.22L2.584.32c-.21-.207-.49-.32-.79-.32-.299 0-.58.113-.79.32l-.67.655a1.08 1.08 0 0 0 0 1.547l7.634 7.474-7.642 7.482a1.076 1.076 0 0 0 0 1.547l.67.655c.21.206.49.32.79.32.3 0 .58-.114.79-.32l9.098-8.908c.21-.206.327-.482.326-.776 0-.294-.115-.57-.326-.776z"/></g></g></svg></button>',
  appendDots:  '.dots-custom2'
});
$('.left').click(function(){
  $('.slider').slick('slickPrev');
})

$('.right').click(function(){
  $('.slider').slick('slickNext');
})

var menuOpen = function(){
  $('.burger-menu').click(function(e){
    e.preventDefault();
    $('.menu-wrapper').toggleClass('is-active');
    $(this).toggleClass('is-active');
  });
  $(document).mouseup(function (e) {
    var container = $(".top-line--left");
    if (container.has(e.target).length === 0){
      $('.menu-wrapper').removeClass('is-active');
      $('.burger-menu').removeClass('is-active');
    }
  });

  $( window ).resize(function() {
    $('.menu-wrapper').removeClass('is-active');
    $('.burger-menu').removeClass('is-active');
  });
};
var menuRadio = function(){
  $('.burger-radio').click(function(e){
    e.preventDefault();
    $('.menu-radio').toggleClass('is-active');
    $(this).toggleClass('is-active');
  });
  $(document).mouseup(function (e) {
    var container = $(".product-sidebar--head");
    if (container.has(e.target).length === 0){
      $('.menu-radio').removeClass('is-active');
      $('.burger-radio').removeClass('is-active');
    }
  });

  $( window ).resize(function() {
    $('.menu-radio').removeClass('is-active');
    $('.burger-radio').removeClass('is-active');
  });
};
menuOpen();
menuRadio();


function heightFooter(){
  var heightFoot = $('.footer').outerHeight();
  $('body').css({ 'padding-bottom': heightFoot});
}
heightFooter();
$( window ).resize(function() {
  heightFooter();
});

$(".close-return").on("click", function() {  
  $(".return-top").hide();
})

/* Popup Window */

$(".popup").magnificPopup({
  type: 'inline',
  removalDelay: 300,
  mainClass: 'my-mfp-slide-bottom',
  // overflowY: 'scroll'
});

/* Popup Window End */
