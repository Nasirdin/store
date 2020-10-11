$(document).ready(function () {
    $("#slider").owlCarousel({
        items: 1,
        loop: true,
    });
    var owl = $('#slider');
    owl.owlCarousel();
    $('.customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    });
    $('.customPrevBtn').click(function () {
        owl.trigger('prev.owl.carousel', [300]);
    });

    $('ul.catalog__tabs-btns').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.catalog__tabs').find('div.catalog__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.more-about').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.content-box__content').eq(i).toggleClass('active');
            $('.content-box__list').eq(i).toggleClass('active');
        })
    });

    $('.back').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.content-box__content').eq(i).toggleClass('active');
            $('.content-box__list').eq(i).toggleClass('active');
        })
    });

    //modal
    $('#call').on('click', function () {
        $('.overlay, .modal-call').fadeIn('slow');
    });

    $('#consultation').on('click', function () {
        $('.overlay, .modal').fadeIn('slow');
    });

    $('.close-modal').on('click', function () {
        $('.overlay, .modal, .buy-modal, .modal-thanks').fadeOut('slow');
    });

    $('#thanks').on('click', function () {
        $('.overlay, .modal-thanks').fadeIn('slow')
    });

    $('#product').on('click', function () {
        $('.overlay, .modal-thanks').fadeIn('slow');
        $('.buy-modal').fadeOut('slow')
    });

    //tel mask
    $("input[type=tel]").mask("0(999) 99-99-99");

    //scroll up

    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $(".btn-up").fadeIn();
        } else {
            $(".btn-up").fadeOut();
        }
    });

    //modal for product

    $(".content-box__btn").each(function (i) {
        $(this).on('click', function () {
            $('.buy-modal .form__subTitle').text($('.content-box__content .title').eq(i).text());
            $('.overlay, .buy-modal').fadeIn('slow');
        })
    })


});