//= jquery.min.js
//= jquery.magnific-popup.min.js
//= slick.min.js

window.onload = function(){
  // $("body").toggleClass('opacity');
  $("#overlayer").delay(1000).fadeOut("slow");
  // overlay.toggle();
  setTimeout(function() {
    // overlay.toggle();
  }, 800);
}

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
  // centerPadding: '60px',
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
menuOpen();


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
  mainClass: 'my-mfp-slide-bottom'
});

/* Popup Window End */
