$(document).ready(function(){
    $('.main_list').on('click',function(){
        $('.list_link>li').parent().slideToggle();
    });
});