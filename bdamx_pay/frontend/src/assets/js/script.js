$(function () {
    // This will select everything with the class smoothScroll
    // This should prevent problems with carousel, scrollspy, etc...
    $('.scroll').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500); // The number here represents the speed of the scroll in milliseconds
                return false;
            }
        }
    });
});

$(".navigation .navbar .navbar-nav .nav-item .nav-link").on('click', function (e) {
    $(".navigation .navbar .navbar-nav .nav-item.active").removeClass('active');
    $(this).parent().addClass('active');
    e.preventDefault();
});

//$('.close').click(function (e) {
//    e.preventDefault();
//    $('.video-play-inner').children('iframe').attr('src', '');
//});


var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, '300');
});
