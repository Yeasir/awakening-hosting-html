;(function ($, window, document, undefined) {
    var $win = $(window);
    var $doc = $(document);
    var $body = $('body');

    $doc.ready(function () {

        $win.scroll(function(){
            var sticky = $('.header'),
                scroll = $win.scrollTop();

            if (scroll >= 200) sticky.addClass('sticky');
            else sticky.removeClass('sticky');
        });

        // $body.on('click','.navbar-nav a',function(e){
        //     e.preventDefault();
        //     $('html, body').animate({
        //         scrollTop: $("#myDiv").offset().top
        //     }, 2000);
        // });

        $body.on('click','.navbar-nav a',function(e){
            e.preventDefault();
            var id = $(this).attr('href');

            console.log(id);

            $('html,body').animate({
                scrollTop: $('#'+id).offset().top - 40
            }, 1000);
        });

        // Pricing Slider
        $(".pricing-slider").slick({
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        arrows: true,
                        dots: true,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        dots: true,
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        dots: true,
                        slidesToShow: 1
                    }
                }
            ]
        });
        $(".chosen-select").chosen({

            'placeholder':'Please choose something ...',
            'display_selected_options':false
        });
    });
})(jQuery, window, document);
