
const elClose = document.querySelector('.close');
const elOpen = document.querySelector('.open');
const elBox = document.querySelector('.open ul .box');

const elMenu= document.querySelector('.open ul li a');
const elMli= document.querySelector('.open ul li:nth-of-type(2)');
const elMdiv= document.querySelector('.open ul li > div');


// // 메뉴_박스
elClose.addEventListener('mouseover',function(){
    elClose.classList.toggle('active');
    elOpen.classList.toggle('active');
})
elBox.addEventListener('click',function(){
    elOpen.classList.remove('active');
    elClose.classList.remove('active');
})

// // 메뉴_click > 해당 active 활성화
// setTimeout(function(){
//     $('.open ul li a').on('click', function () {
//         event.preventDefault()
//         let idx = $(this).index();
    
//         $('.open ul li a').removeClass('active').eq(idx).addClass('active');
//     });
// },1000)

// // 섹션 scroll & animaion
function scroll(){
    let posY;
    let scrollTop;

    $(window).on('scroll', function () {
        scrollTop = $(window).scrollTop();

        $('.scroll').each(function (i) {
            posY = $('.scroll').eq(i).offset().top;

            if (posY = scrollTop) {
                $('.scroll').eq(i).addClass('active');
            }
        });
    });
}
scroll();

// // 섹션 fade in & out
$('.sub3 .s3, .c1').fadeOut(0);
$('.sub3 .s3, .c1').fadeIn(2000);

$('.work1 .w1').fadeOut(0);
$('.work1 .w1').fadeIn(1000);



