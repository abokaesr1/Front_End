$(document).ready(function() {

    'use strict';
    //addjust the window header hieght 
    $('.header').height($(window).height());
    $(window).resize(function() {
        $('.header').height($(window).height());
    });


    // make the I tage scroll down to next feature 
    $('.header .arrow i').click(function() {
        $('html,body').animate({
            scrollTop: $('.featuers').offset().top
        }, 1500)
    })

    // create nice scroll 
    $('html').niceScroll({
        cursorcolor: '#f7600e',
        cursorwidth: '10px',
        cursorborder: 'none'
    })

    // Show hidden items
    $('.my-work .show-more ').click(function() {
        $('my-work .hidden').fadeIn()
    })

    //check the tistim 
    let left = $(' .testim .fa-chevron-circle-left'),
        right = $(' .testim .fa-chevron-circle-right')

    function checkClient() {
        if ($('.client:first').hasClass('active')) {
            left.fadeOut();
        } else {
            left.fadeIn()
        }
        if ($('.client:last').hasClass('active')) {
            right.fadeOut();
        } else {
            right.fadeIn()
        }

    }
    checkClient()

    // move to next post 

    $('.testim i').click(function() {
        if ($(this).hasClass('fa-chevron-circle-right')) {
            $('.testim .active').fadeOut(100, function() {
                $(this).removeClass('active').next('.client').removeClass('hidden').addClass('active').fadeIn()
                checkClient()
            });
        } else {
            $('.testim .active').fadeOut(100, function() {
                $(this).removeClass('active').prev('.client').removeClass('hidden').addClass('active').fadeIn()
                checkClient()
            });
        }

    });
});