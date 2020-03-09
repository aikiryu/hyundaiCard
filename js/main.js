$(document).ready(function(){
//nav영역

function mobile(){
  
    
$('.all_menu').on('click',function(){
    
    $('nav').stop().animate({
        'left' : 0
    });
    
});
    
$('nav .close').on('click',function(){
    $('nav').stop().animate({
        left: '-100%'
    });
});
 
    $('nav').css({
        'left' : '-100%'
    })     
}//모바일 끝
    
function pc(){
    $('nav').css({
        'left' : 0
    })
}



    
var win_width = $(window).width();
    
if(win_width >= 320 && win_width < 1200){
    
    mobile();
    
}

if(win_width >= 1200){
    pc();
}
  
$(window).on('resize',function(){
    console.log('야호')
    var win_width = $(window).width();
    if(win_width < 1200){
    
    mobile();
    
    }
if(win_width >= 1200){
    pc();
}
    
});//반응형 기본
    
    
//mobile 시작
    
    
}); //opening