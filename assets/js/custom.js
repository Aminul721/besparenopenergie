(function($){
    function marQFun() {
        let widthResize = jQuery(window).width();
        let appendMarQ = jQuery('.marquee_style_area');

        if (widthResize < 1279) {
            jQuery('.header_container').prepend(appendMarQ);
        }else {
            jQuery('.right_headerInner').prepend(appendMarQ);
        }
    }
    function addHeight() {
        let widthResize = jQuery(window).width();
        let mainBanner = jQuery('.banner_wrap');
        let header_Height = jQuery('.header_container').outerHeight();

        if (jQuery(".header_container").hasClass("fixed_header")) {
            mainBanner.css("margin-top", header_Height);
        }
        else {
            mainBanner.css("margin-top", 0 +"px");
        }
    }
    function countingFun() {
        let widthResize = jQuery(window).width();
        let appendCounting = jQuery('.more_numbers_wrap .header_btn_bx');

        if (widthResize < 991) {
            jQuery('.more_numbers_wrap').append(appendCounting);
        }else {
            jQuery('.numbers_col_content_mx').prepend(appendCounting);
        }
    }

    countingFun();
    marQFun();
    addHeight();
    jQuery(window).resize(function() {
        countingFun();
        marQFun();
        addHeight();
    });

    jQuery('.common_btn').click(function () {
        let header_Height = jQuery('.header_container').height();
        var Lochref = jQuery(this).attr('href');
        jQuery("html, body").stop().animate({
        scrollTop: jQuery(Lochref).offset().top - header_Height
        }, 1500);
        return false;
    });

    if(matchMedia('only screen and (max-width: 766px)').matches) {
        var $mwo = $('.marquee-with-options');
        jQuery('.marquee').marquee();
        jQuery('.marquee-with-options').marquee({
            speed: 40,
            gap: 0,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true
        });

        //pause and resume links
        jQuery('.pause').click(function(e){
            e.preventDefault();
            $mwo.trigger('pause');
        });

        jQuery('.resume').click(function(e){
            e.preventDefault();
            $mwo.trigger('resume');
        });

        //toggle
        jQuery('.toggle').hover(function(e){
            $mwo.trigger('pause');
            },function(){
            $mwo.trigger('resume');
        })
        .click(function(e){
            e.preventDefault();
        })
    }

    // faq toogle js
    jQuery( ".toggle_view_bg" ).click(function(e) {
        if(jQuery(this).parent('.toggle_view_item').hasClass('active')) {
        } else {
            $( ".toggle_view_bg" ).each(function() {
                if(jQuery(this).parent('.toggle_view_item').hasClass('active')) {
                    jQuery(this).parent('.toggle_view_item').toggleClass('active');
                    jQuery(this).next('.show_details').slideToggle('hide');
                }
            });
        }
        jQuery(this).parent('.toggle_view_item').toggleClass('active');
        jQuery(this).next('.show_details').slideToggle('slow');
        e.preventDefault();
    });
})(jQuery);

// scrolling event floating btn
jQuery(document).ready(function (){

    //couner js
    let number = document.getElementById("countdown");
    let counterDSK = 6;
    setInterval(() => {
        if(counterDSK == 0){
            clearInterval();
        }else{
            counterDSK -= 1;
            number.innerHTML = counterDSK;
        }
    }, 900);


    /*jQuery('.header_container').addClass('allow_expand');
    jQuery(window).scroll(function(){
        var Header_innH = jQuery('.header_area').height();
        var First_offH = jQuery('.visible_itme1').offset().top - 140;
        var Second_offH = jQuery('.visible_itme2').offset().top;

        var Third_offH = jQuery('.visible_itme3').offset().top;

        var First_innerH = jQuery('.visible_itme1').height();
        var Second_innerH = jQuery('.visible_itme2').height();

        var Third_innerH = jQuery('.visible_itme2').height();

        var scree_vh = jQuery(window).height();
        var scrollTop = jQuery(this).scrollTop();

        // offset top form scree height positiive
        var total_FoffstH_innH = First_offH + First_innerH;
        var total_SoffstH_innH = Second_offH + Second_innerH;

        var total_ToffstH_innH = Third_offH + Third_innerH;

        // offset top form scree height nagetive
        var total_FoffH_SCNH = First_offH - scree_vh;
        var total_SoffH_SCNH = Second_offH - scree_vh;

        var total_ToffH_SCNH = Third_offH - scree_vh;

        if (( scrollTop > total_FoffH_SCNH && scrollTop < total_FoffstH_innH )  || ( scrollTop > total_SoffH_SCNH && scrollTop < total_SoffstH_innH ) || ( scrollTop > total_ToffH_SCNH && scrollTop < total_ToffstH_innH )) {
        	jQuery('.header_container').addClass('width_manage');
        }else {
        	jQuery('.header_container').removeClass('width_manage');
        }


        let top_mbArea = jQuery('.top_mbArea ').height();
        if (scrollTop > 0) {
            jQuery(".header_area").css({
                "margin-top" : 0 + "px"
            });
            jQuery(".header_area").addClass("sticky_positon");
        }else {
            jQuery(".header_area").css({
                "margin-top" : top_mbArea,
            });
            jQuery(".header_area").removeClass("sticky_positon");
        }
    });

    jQuery(window).scroll(function(){
        var First_offH = jQuery('.visible_itme1').offset().top - 200;
        var First_boxH = jQuery('.visible_itme1').height();
        var scrollTop = jQuery(this).scrollTop() - First_boxH;
        if (scrollTop > First_offH) {
            jQuery('.header_container').removeClass('allow_expand');
            jQuery('.header_container').addClass('width_less');
        }else {
            jQuery('.header_container').addClass('allow_expand');
            jQuery('.header_container').removeClass('width_less');
        }
    });*/

    jQuery(".tp_buttonselect").addClass('active');
    let selectBX = jQuery('.tp_select_bx').hide();
    jQuery('.tp_buttonselect').click(function(e){
        if (jQuery(this).hasClass('active')) {
            e.preventDefault();
            jQuery(this).parents(".tp_select_btn_wrap").find(".tp_buttonselect").removeClass("active");
            jQuery(this).parents(".tp_select_btn_wrap").find('.tp_select_bx').slideDown(200);
        }else {
            jQuery(this).parents(".tp_select_btn_wrap").find('.tp_select_bx').slideUp(200);
            jQuery(".tp_buttonselect").addClass('active');
            jQuery(this).removeClass("active_color");
        }
    });

    jQuery('.tp_select_bx > span').click(function(e){
        e.preventDefault();
        jQuery(this).parent().children().show();
        jQuery(this).hide();

        let parentsRoot = jQuery(this).parents(".tp_select_btn_wrap").find(".tp_buttonselect");
        let selectThisText = jQuery(this).attr("data-val");
        parentsRoot.text(selectThisText);

        if (jQuery(this).parents(".tp_select_btn_wrap").find(".tp_buttonselect").hasClass('active')) {
            jQuery(this).parents(".tp_select_btn_wrap").find('.tp_select_bx').slideDown(200);
            jQuery(".tp_buttonselect").removeClass('active');
            jQuery(this).parents(".tp_select_btn_wrap").find('.tp_buttonselect').removeClass('active_color');
        }else {
            jQuery(this).parents(".tp_select_btn_wrap").find('.tp_select_bx').slideUp(200);
            jQuery(".tp_buttonselect").addClass('active');
            jQuery(this).parents(".tp_select_btn_wrap").find('.tp_buttonselect').addClass('active_color');
        }
    });

    // number counting js
    jQuery(".timer").counterUp({
        delay: 100,
        time: 2000,
    });
});
