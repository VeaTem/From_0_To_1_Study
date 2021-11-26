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



     $('.slider__inner').slick({
         arrows: false,
         dots: true,
     });




     var containerEl1 = document.querySelector('[data-ref="container-1"]');
     var containerEl2 = document.querySelector('[data-ref="container-2"]');
     var config = {
         controls: {
             scope: 'local'
         }
     };
     var mixer = mixitup(containerEl1, config);
     var mixer = mixitup(containerEl2, config);
 });