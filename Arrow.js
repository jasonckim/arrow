//Arrow.js File

//default hide
$('.scroll-navbar').hide();

$.fn.navbarScroll = () => {
  $(window).scroll( () => {
    if ($(this).scrollTop() > 600) {
      $('.scroll-navbar').fadeIn();
    } else {
      $('.scroll-navbar').fadeOut();
    }
  })
};

$.fn.navbarScroll();

// $.fn.logoSwap = () => {
//   $(window).on('resize', () => {
//     if ($(window).width < 576) {
//       $('.logo-white').attr('src', 'https://jasonkim-media.s3-us-west-1.amazonaws.com/Projects/images/Arrow/logo-blue.png');
//     }
//   })
// };
// $.fn.logoSwap();

//
//
// $(document).ready(function(){
//     $("img").click(function(){
//         // Change src attribute of image
//         $(this).attr("src", "images/card-front.jpg");
//     });
// });

//would need to add class to navlinks (a.nav-link-fixed), cta (.nav-fixed-cta), navbar(.scroll-navbar)
//also need to replace the image src
//
// $(window).scroll( () => {
//   if ($(this).scrollTop() > 400) {
//     $('.navbar').addClass('.scroll-navbar');
//     $('.nav-link').removeClass('a.nav-link-fixed');
//     $('.nav-link').addClass('a.nav-link-scroll');
//   } else {
//     $('.scroll-navbar').fadeOut();
//   }
//
//
// })
//
//
// $(document).ready(function(){
//     $("img").click(function(){
//         // Change src attribute of image
//         $(this).attr("src", "images/card-front.jpg");
//     });
// });
