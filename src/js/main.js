// This script solve the popular problem when 100vh doesn’t fit the mobile browser screen (work with PostCSS plugin)
const customViewportCorrectionVariable = 'vh';

function setViewportProperty(doc) {
  let prevClientHeight;
  const customVar = '--' + (customViewportCorrectionVariable || 'vh');

  function handleResize() {
    let clientHeight = doc.clientHeight;
    if (clientHeight === prevClientHeight) return;
    requestAnimationFrame(function updateViewportHeight() {
      doc.style.setProperty(customVar, clientHeight * 0.01 + 'px');
      prevClientHeight = clientHeight;
    });
  }
  handleResize();
  return handleResize;
}

window.addEventListener('resize', setViewportProperty(document.documentElement));

// Place your jQuery code here.
$(function () {
  const burger = $('.nav__mobile');
  const burgerSpan = $('.mobile__btn');
  burger.on('click', () => {
    burger.toggleClass('active');
    burgerSpan.toggleClass('active');
  });

  $('.slider__first').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
  });

  $('.slider__second').slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    centerMode: true,
    slidesToShow: 3,
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
});
