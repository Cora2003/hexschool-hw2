$(document).ready(function() {

  $('.dropdown').click(function(event) {
    /* Act on the event */
    event.preventDefault();
    // $('.dropdown').toggleClass('active');
    $('.dropdown-open').slideToggle();
  });

  //lightbox
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',預設是水平
    loop: true,
    speed:2000,
    autoplay:{
      delay:1500,
    },
    // effect:"cube",
  
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

  });

  //ad-close效果
  $('.ad-close').click(function(event) {
    /* Act on the event */
    event.preventDefault();
    $(".ad").fadeOut();

  });

  //top效果
  $('.button').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 500);
   });

});