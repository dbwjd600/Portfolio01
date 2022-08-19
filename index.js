
const elClose = document.querySelector('.close');
const elOpen = document.querySelector('.open');
const elBox = document.querySelector('.open ul .box');

// // 메뉴_박스
function menuBox(){
    elClose.addEventListener('click',function(){
        elClose.style = 'display:none';
        elOpen.style = 'display:block';
    })
    elBox.addEventListener('click',function(){
        elClose.style = 'display:block';
        elOpen.style = 'display:none';
    })
}
menuBox();

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