$(function(){

    $('.ready_alert').click(function(){
        alert('아직 준비중인 페이지입니다.')
        event.preventDefault()
    })

    $('.ready_alert').click(function(){
        event.preventDefault()
    })
    $('.m_more_btn a').click(function(){
        event.preventDefault()
    })

    $('.m_more_btn').click(function(){               
        $('.m_gnb').animate({right:0},500)             
    })
    $('.m_close_btn').click(function(){               
        $('.m_gnb').animate({right:'-100%'},500)             
    })

    $('.gnb, .sub_wrap').mouseenter(function(){
        $('.sub_wrap').stop().slideDown(500)
    })
    $('.gnb, .sub_wrap').mouseleave(function(){
        $('.sub_wrap').stop().slideUp(500)
    })
    $('.gnb, .sub_wrap').focusin(function(){
        $('.sub_wrap').stop().slideDown(500)
    })
    $('.sub_wrap').focusout(function(){
        $('.sub_inner').stop().slideUp(500)
    })
    $('.gnb_select, .sub_wrap').mouseenter(function(){
        $('.sub_wrap').stop().slideDown(500)
    })
    $('.gnb_select, .sub_wrap').mouseleave(function(){
        $('.sub_wrap').stop().slideUp(500)
    })
    $('.gnb_select, .sub_wrap').focusin(function(){
        $('.sub_wrap').stop().slideDown(500)
    })
    
    
//모바일용~
//시블링즈 리무브클래스

$('.m_gnb>nav>ul>li').each(function(index){
        $(this).mouseenter(function(){
            $(this).find('.sub_inner').stop().slideDown(500)
        })
        $(this).mouseleave(function(){
            $(this).find('.sub_inner').stop().slideUp(500)
        })
        
    })


    $(window).scroll(function(){
        winScroll = $(window).scrollTop()
        
        if(winScroll>100){
            $('#header').css('display','none')
            $('#headerSelect').css('display','block')
        }else{
            $('#header').css('display','block')
            $('#headerSelect').css('display','none')
        }//헤더 스크롤
                     
    }) 
event.preventDefault()

   


})