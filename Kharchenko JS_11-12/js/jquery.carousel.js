(function($) {
    
    $.fn.carousel = function() {
        var prevControl = $('.carousel-control-prev');
        var nextControl = $('.carousel-control-next');
        var elementsList = $('.carousel-list');
        
        var pixelsOffset = 125;
        var currentLeftValue = 0;
        var elementCount = elementsList.find('li').length;
        var minOffSet = -((elementCount - 5) * pixelsOffset);
        var maxOffSet = 0;
        
        
        prevControl.on('click', function(){
            if (currentLeftValue != maxOffSet) {
            currentLeftValue += 125;
            elementsList.animate({ left: currentLeftValue + "px"}, 500);
            }
        });
        
        nextControl.on('click', function(){
            if (currentLeftValue != minOffSet) {
            currentLeftValue -= 125;
            elementsList.animate({left: currentLeftValue + "px"}, 500); 
            }
        });
    }
    
})(jQuery);


/*(function($) {
    $(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);*/
