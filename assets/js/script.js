// $(document).ready(function() {
//     $("#myCarousel").on("slide.bs.carousel", function(e) {
//       var $e = $(e.relatedTarget);
//       var idx = $e.index();
//       var itemsPerSlide = 4;
//       var totalItems = $(".carousel-item").length;
  
//       if (idx >= totalItems - (itemsPerSlide - 1)) {
//         var it = itemsPerSlide - (totalItems - idx);
//         for (var i = 0; i < it; i++) {
//           // append slides to end
//           if (e.direction == "left") {
//             $(".carousel-item")
//               .eq(i)
//               .appendTo(".carousel-inner");
//           } else {
//             $(".carousel-item")
//               .eq(0)
//               .appendTo($(this).find(".carousel-inner"));
//           }
//         }
//       }
//     });
//   });
  


var $ = document;

$.addEventListener('DOMContentLoaded', function() {

  const sliderMe = () => {
    let currentPosition = 0,
      sliderItem = document.querySelectorAll('.slider-item'),
      sliderItemWidth = window
      .getComputedStyle(sliderItem[0])
      .flexBasis.match(/\d+\.?\d+/g),
      sliderInner = $.querySelector('.slider-inner'),

      control = {
        next: $.querySelector('#next'),
        slideNext() {
          currentPosition += parseFloat(sliderItemWidth);
          if (currentPosition > limitPosition) {
            currentPosition = 0;
          }
          sliderInner.style.right = currentPosition + '%';
        },
        prev: $.querySelector('#prev'),
        slidePrev() {
          currentPosition -= parseFloat(sliderItemWidth);
          if (currentPosition < 0) {
            currentPosition = limitPosition;
          }
          sliderInner.style.right = currentPosition + '%';
        }
      },
      limitPosition = sliderItemWidth * (sliderItem.length - Math.floor(100 / sliderItemWidth));

    control.next.addEventListener('click', control.slideNext)
    control.prev.addEventListener('click', control.slidePrev)

    window.addEventListener("resize",function(){
      currentPosition = 0;
      $.querySelector('.slider-inner').style.right = currentPosition + '%';
    })
  }
  sliderMe();

  window.addEventListener("resize", sliderMe)

});
