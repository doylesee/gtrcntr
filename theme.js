// Set height
function setHeight(the_selector) {
    var a_height = 0;
    $(the_selector).css('height','auto');
    $(the_selector).each(function() {    
        if ($(this).outerHeight() > a_height) {
            a_height = $(this).outerHeight();
        }
    });
    $(the_selector).attr('style','height: '+a_height+'px;');
}

$(document).ready(function() {
    $(window).resize(function(){
        // Same height containers
        var same_height_counter = 0;
        var same_height_class_new = '';
        if ( $('.same-height-parent-js').length > 0 ) {
            $('.same-height-parent-js').each( function() {
                same_height_counter++;
                if ( $(this).find('.same-height-item-js').length > 0 ) {
                    $(this).find('.same-height-item-js').each( function() {
                        same_height_class_new = 'same-height-item--'+same_height_counter;
                        $(this).addClass(same_height_class_new);
                    });
                    setHeight('.'+same_height_class_new);
                }
            });
        }
    }).resize();

    // Mobile menu
    $('.header__menu-mobile-button').click(function() {
        if ( $('.header__menu.active').length > 0 ) {
            $('.header__menu-mobile-button a').attr('aria-expanded','false');
            $('.header__menu').attr('aria-hidden','true');
        }
        else {
            $('.header__menu-mobile-button a').attr('aria-expanded','true');
            $('.header__menu').attr('aria-hidden','false');
        }
        $('.header__menu').toggleClass('active');
    });
});

$(window).on('load', function() {
    $(window).resize();
});