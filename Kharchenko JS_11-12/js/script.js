$(function(){
    
    $('.carousel').carousel();
    
});

$(function(){
    
    var html= $('#test').html();
    var data = {
        name: 'Svitlana Kharchenko',
        img: 'img/img.jpg',
        position: 'Главный эксперт',
        reason: 'Хочу учить фронтенд, потому что:',
        reason1: 'Стремление развиваться',
        reason2: 'Желание попробовать себя в новом направлении',
        contact: 'Мой контактный телефон:',
        phone: '+380996552960',
        page: 'Mой профиль в Facebook:',
        facebook: 'Facebook',
        link: 'https://www.facebook.com/svitlana.kharchenko.1'
    };
    var content = tmpl(html, data);
    
    $('body').append(content);
    
});



