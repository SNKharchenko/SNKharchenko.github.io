$(function () {

  var $links = $('.tab_link');

  $links.on('click', function () {
    
    var $parent = $(this).parents('.tabs'); 
    var $tabs = $parent.find($(this)[0].hash); 
    var $activeLink = $parent.find('.tab_link-active');
    var $block = $parent.find('.tab_box-active');

    
    $activeLink.removeClass('tab_link-active');
    $block.hide('fast');
    $block.removeClass('tab_box-active');
      
    $(this).addClass('tab_link-active');
    $tabs.show('slow');
    $tabs.addClass('tab_box-active');

   
  });

});