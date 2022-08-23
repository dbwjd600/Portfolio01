
const elClose = document.querySelector('.close');
const elOpen = document.querySelector('.open');
const elBox = document.querySelector('.open ul .box');

// const elMli= document.querySelector('.open ul li');
const elMa= document.querySelector('.open ul li a');
const elMdiv= document.querySelector('.open ul li > div');


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

// // 메뉴_click > 해당 active 활성화

// $('.open ul li').on('click',function(){
//     event.preventDefault;

//     let idx = $(this).index();
//     $('.open ul li').removeClass('active')
//     $('.open ul li').eq(idx).addClass('active');
// })

// $(".open ul li").each(function () {
//     $(this).click(function () {
//         $(this).addClass("active").siblings().removeClass("active");  //siblings:형제요소들,    removeClass:선택된 클래스의 특성을 없앰
//     });
// });

// var div2 = document.querySelectorAll(".open ul li");
// function handleClick(event) {
//   if (event.target.classList[1] === "active") {
//     event.target.classList.remove("active");
//   } else {
//     for (var i = 0; i < div2.length; i++) {
//       div2[i].classList.remove("active");
//     }
//     event.target.classList.add("active");
//   }
// }

// function init() {
//   for (var i = 0; i < div2.length; i++) {
//     div2[i].addEventListener("click", handleClick);
//   }
// }
// init();


// $('.open ul li').click(function(){
//     event.preventDefault;

//     $(this).toggleClass('active');
//   });

    // let idx = $(this).index();

//     $('.open ul li').click(function(){
//       event.preventDefault;

//     $('.open ul li').removeClass("active");
//     $(this).addClass("active");
//   });

// $('.open ul li').click(function(){
//     if($(this).hasClass("active")){
//       $(this).removeClass("active");
//     }else{
//       $(this).addClass("active");  
//     }
//   });
// $(".open ul li").on("click", function() {
//     $(".open").removeClass("active");
//     $(this).addClass("active");
//        event.preventDefault;

//   });

// function menuClick(){
//     $('.open ul li a').click(function(){
        
//         if($(this).hasClass('active')){
//             $('.open ul li a').removeClass('active');     

//         } else {
//             $('.open ul li a').removeClass('active');

//             $(this).addClass('active');

//         }
//         return false;
//         return true;


//     });
// }
// menuClick();

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



