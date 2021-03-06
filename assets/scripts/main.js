(function($) {

    var $mddShare = $('#mdd-share'),
        $mddShareOpen = $('#mdd-share--open'),
        $mddShareClose = $('#mdd-share--close'),
        $mddShareLayer = $('#mdd-share--layer');

    $mddShareOpen.on('click', function(){
        $mddShare.addClass('in');
        return false;
    });

    $mddShareClose.on('click', function(){
        $mddShare.removeClass('in');
        return false;
    });

    $mddShareLayer.find('.md-share').on('click', function(){
        window.open(jQuery(this).attr('href'), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
        return false;
    });

    var $overflowSlider = $('#overflow-slider');

    $('[data-dir="prev"]').on('click', function(){
        $overflowSlider.removeClass('next');

        return false;
    });

    $('[data-dir="next"]').on('click', function(){
        $overflowSlider.addClass('next');

        return false;
    });

})(jQuery);