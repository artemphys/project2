$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() >= ($(document).height() - $('.footer').outerHeight(true))) {
            $(".header").css({'position':'absolute', 'top':'1250px'});
        }
        else {$(".header").css({'position':'fixed', 'top':'0'});}
    });
})
