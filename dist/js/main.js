$(function () {

    $('.menu__btn, .menu__close').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('menu__btn--active');
        $('.menu').toggleClass('menu--active');
    });

    $('[data-fancybox]').fancybox();

});