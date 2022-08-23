
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
    let winH = $(window).height();

    $(window).on('scroll', function () {
        scrollTop = $(window).scrollTop();

        $('.scroll').each(function (i) {
            posY = $('.scroll').eq(i).offset().top;

            if (posY - winH < scrollTop) {
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


// // 마우스 커서
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width =  window.innerWidth;
canvas.height = window.innerHeight;

let c = {x:0,y:0,dx:0,dy:0,a:0,r:30};
let state = true;
function cursorFn(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.fillStyle = "#0210FD";
    ctx.globalAlpha = 0.6;
    ctx.arc(c.x,c.y,c.r,0,Math.PI*2,false);
    ctx.fill();

    requestAnimationFrame(cursorFn);
    
}
cursorFn();

window.addEventListener('mousemove',function(e){
    c.x = e.clientX + 10 ;
    c.y = e.clientY;
    state=true;
});

window.addEventListener('mouseover',function(e){
    if(   e.target.tagName == 'A' ){
        c.r = 50;
    }else{
        c.r = 20;
    }
});
document.body.style.cursor = 'none';