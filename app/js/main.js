 $(function() {
     $('.price-filter__input').ionRangeSlider({
         onStart: function(data) {
             $('.price-filter__from').text(data.from)
             $('.price-filter__to').text(data.to)
         },
         onChange: function(data) {
             $('.price-filter__from').text(data.from)
             $('.price-filter__to').text(data.to)
         },

     });

     // _____________________________________________________________________________________


     $(".rating").rateYo({
         starWidth: "12px",
         normalFill: "#d6d6d6",
         ratedFill: "#ffcc00",
         fullStar: true,
         readOnly: true,
         precision: 2,
         spacing: "7px"
     });




     $(".products-list__info-rating").rateYo({
         starWidth: "17px",
         normalFill: "#d6d6d6",
         ratedFill: "#ffcc00",
         fullStar: true,
         readOnly: true,
         precision: 2,
         spacing: "14px"
     });

     // _____________________________________________________________________________________

     $('.product-info__input-num').styler();

     // _____________________________________________________________________________________


     $('.slider__inner').slick({
         arrows: false,
         dots: true,
     });

     $('.product-slider__mini').slick({
         asNavFor: '.product-slider__big',
         arrows: false,
         draggable: false,
         slidesToShow: 3,
         slidesToScroll: 1,
         vertical: true,
         focusOnSelect: true
     });
     $('.product-slider__big').slick({
         asNavFor: '.product-slider__mini',
         draggable: false,
         arrows: false,
         fade: true,
         speed: 900
     });

     // _____________________________________________________________________________________


     var containerEl1 = document.querySelector('[data-ref="container-1"]');
     var containerEl2 = document.querySelector('[data-ref="container-2"]');
     var config = {
         controls: {
             scope: 'local'
         }
     };
     var mixer = mixitup(containerEl1, config);
     var mixer = mixitup(containerEl2, config);



     // _____________________________________________________________________________________


 });