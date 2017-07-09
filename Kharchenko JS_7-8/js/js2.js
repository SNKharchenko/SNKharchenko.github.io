$(function () {
    
    $('[data-tooltip]').mousemove(function(even){
        
        $tooltip = $(this).attr('data-tooltip');
        
        $('#tooltip').text($tooltip).css({ 
                         "top" : even.pageY + 5,
                        "left" : even.pageX + 5
                     }).show();
        
    }).mouseout(function () {
        $('#tooltip').hide()
    });
    

   /* $('.button').on('click', function(){
        
       $('[data-tooltip]').show();         
    });*/
    
});