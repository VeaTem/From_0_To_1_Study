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


     $('.slider__inner').slick({
         arrows: false,
         dots: true,
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

     //  $('.products-list__btn-small').on('click', function() {
     //      $('.products-list__btn').removeClass('products-list__btn--active');
     //      $('.products-list__btn').addClass('products-list__btn--active');
     //  })

     $(".products-list__btn-small").click(function() {
         $(".products-list__btn").toggleClass("products-list__btn--active");
         return false;
     });


 });