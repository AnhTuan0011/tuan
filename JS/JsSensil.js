$(window).scroll(function () {
    if ($(this).scrollTop() > 106) {
        $('.homelist').addClass('active');
    }
    else {
        $('.homelist').removeClass('active');
    }
})

$(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
        $('.navbar-nav').addClass('test');
    }
    else {
        $('.navbar-nav').removeClass('test');
    }
})

// $(document).ready(function() {
//     $(".js-example-basic-single").select2();
//     // Thêm các tùy chọn của bạn vào đây.
//   });
//   $(".js-example-clear").select2({
//     allowClear: true
//   });

 

//   Đọc dữ liệu từ một mảng
var data = [{ id: 0, text: 'enhancement' }, { id: 1, text: 'bug' }, { id: 2, text: 'duplicate' }, { id: 3, text: 'invalid' }, { id: 4, text: 'wontfix' }];

// $(".js-example-data-array").select2({
//   data: data
// })



// $(".js-example-responsive").select2({
//     width: 'resolve' // need to override the changed default
// });

var data = [
    {
        id: 0,
        text: 'enhancement'
    },
    {
        id: 1,
        text: 'bug'
    },
    {
        id: 2,
        text: 'duplicate'
    },
    {
        id: 3,
        text: 'invalid'
    },
    {
        id: 4,
        text: 'wontfix'
    }
];

// $(".js-example-data-array").select2({
//   data: data
// })

// $(".js-example-data-array-selected").select2({
//   data: data
// })

// owlcarousel


// slider-small
$(document).ready(function(){
    $('.slide__holiday').owlCarousel({
        stagePadding: Number,
        loop:true,
        margin:10,
        nav:false,
        autoplay:6000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
    })


    $('.slider-small').owlCarousel({
        stagePadding: 0,
        items:1,
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay:6000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.slider-readTheTop').owlCarousel({
        stagePadding: Number,
        items: 3,
        loop:true,
        margin:10,
        nav:false,
        autoplay:6000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })
    $('.liveshow-packup').owlCarousel({
        stagePadding: 0,
        items:5,
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay:6000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
});



// video player

// document.addEventListener('DOMContentLoaded', () => {

// 	const source = 'https://bitmovin-a.akamaihd.net/content/sintel/sintel.mpd';

// 	const dash = dashjs.MediaPlayer().create();
// 	const video = document.querySelector('video');
// 	dash.initialize(video, source, true);


// 	const player = new Plyr(video, {captions: {active: true, update: true}});


// 	window.player = player;
// 	window.dash = dash;
// });



// bat tat chu FAQ
$('.all-under-head-qts .all-under-head-qts-top').click(function(){
    $(this).next().slideToggle(300);
    $(this).parent('.all-under-head-qts').toggleClass('rotate__icons');
    $('.all-under-head-qts').not($(this).parent('.all-under-head-qts')).removeClass('rotate__icons');
})
$('.under-head-qts .all-under-head-qts').click(function(){
    $(this).siblings().children('.all-under-head-qts-bottomm').slideUp(300);
})