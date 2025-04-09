$(function(){
    let topWinWidth = $(window).width()
    let topClickNum = 0
    let topPlayNum = 0

    $(window).resize(function(){
        topWinWidth = $(this).width()
        $('.top_img').css('left',-winWidth*topClickNum)
    })
    
    

//모바일용~
//시블링즈 리무브클래스

// topcontrol
    function slider(index){               
        $('.top_img').stop(true).animate({left:-topWinWidth*index},1000,'easeOutExpo')
        $('.top_controls>li').eq(index).addClass('top_selected').siblings().removeClass('top_selected')
    }

    $('.top_controls>li').each(function(index){
        $(this).click(function(){
            slider(index)
            topClickNum=index
        })
    })

    $('.top_next_btn').click(function(){
        topClickNum++
        if(topClickNum>5){
            topClickNum=0
        }
        slider(topClickNum)
    })
    $('.top_prev_btn').click(function(){
        topClickNum--
        if(topClickNum<0){
            topClickNum=5
        }
        slider(topClickNum)
    })

    
//autoplay
    function autoPlay(){
        topClickNum++
        if(topClickNum>5){
            topClickNum=0
        }
        slider(topClickNum)
    }
    auto = setInterval(autoPlay,3000)

    $('.top_play_btn').click(function(){
        topPlayNum++
        if(topPlayNum%2==1){
            clearInterval(auto)
            $(this).find('img').attr('src','img/img/playbtn.png')
        }else{
            auto = setInterval(autoPlay,3000)
            $(this).find('img').attr('src','img/img/playbtn_on.png')
        }
    })
    
// //now
    $('.now_controls>ul>li').each(function(index){
        $(this).click(function(){               
            $('.img_wrap').animate({left:-25*index+'%'},1000)            
            $('.now_controls>ul>li').eq(index).addClass('now_selected').siblings().removeClass('now_selected')
        }
       
        )
    })
    $('.img_wrap a').click(function(){
        event.preventDefault()
    })

    //best
    function bestSlider(num){
        $('.best_img>li').eq(num).fadeIn(500).siblings('li').fadeOut(500)
        $('.best_text>li').eq(num).animate({top:-80, opacity:1},500).siblings().animate({top:-60, opacity:0},500)
        event.preventDefault()
        
    }
    
    //btn 작동시키기
    let btn_num = 0
    $('.best_next_btn').click(function(){
        btn_num++
        if(btn_num>6){
            btn_num=0
        }
        bestSlider(btn_num)
        event.preventDefault()

    })

    $('.best_prev_btn').click(function(){
        btn_num--
        if(btn_num<0){
            btn_num=6
        }
        bestSlider(btn_num)
        event.preventDefault()
    })

    //category
// 이전년도자료 5-이치6번 이용하여 탭스 넣기
    function cateSlider(index){               
        $('.cate_contents').stop(true).animate({left:-20*index+'%'},1000)
        event.preventDefault()
        
    }

    let cateClickNum=0
    $('.cate_next_btn').click(function(){
        cateClickNum++
        if(cateClickNum>5){
            cateClickNum=0
        }
        cateSlider(cateClickNum)
        event.preventDefault()

    })
    $('.cate_prev_btn').click(function(){
        cateClickNum--
        if(cateClickNum<0){
            cateClickNum=5
        }
        cateSlider(cateClickNum)
        event.preventDefault()

    })


    //cate tabs
    function tabs(index){
        $('.list_title>li[data-index='+index+']').addClass('cate_selected')
        $('.list_title>li[data-index!='+index+']').removeClass('cate_selected')
        $('.cate_contents>li[data-index='+index+']').fadeIn('fast')
        // contents>li의 data-index값이 click된 title>li의 index값과 같으면 나타난다
        $('.cate_contents>li[data-index!='+index+']').css('display','none')
        // contents>li의 data-index값이 click된 title>li의 index값과 다르면 사라진다
        event.preventDefault()

    }
    $('.list_title>li').each(function(index){
        $(this).attr('data-index',index)
        // title>li를 click하면 contents>li가 나타나고 사라진다
        $(this).click(function(){
            tabs(index)
        })

    })
    $('.cate_contents>li').each(function(index){
        $(this).attr('data-index',index)
    })


    //about,scroll
    let winScroll = $(window).scrollTop()
    let aboutTop = $('#about').offset().top-300
        $(window).resize(function(){
            aboutTop = $('#about').offset().top-200
        })
            
    $(window).scroll(function(){
        winScroll = $(window).scrollTop()
        if(winScroll>aboutTop){
            $('.more').delay(100).animate({top:0,opacity:1},1000)
            $('.than').delay(500).animate({right:32+'%',opacity:1},1000)
            $('.desk').delay(1200).animate({left: -10+'%',opacity:1},1000)
            
        }      
    }) 
    $('.store_controlbar>ul>li').each(function(index){
        $(this).click(function(){ 
            $('.store_text>li').eq(index).addClass('store_selected').siblings().removeClass('store_selected')
            $('.store_img>li').eq(index).fadeIn(500).siblings('li').fadeOut(500)
            $('.store_controlbar>ul>li').eq(index).addClass('store_selected').siblings().removeClass('store_selected')  
            $('.store_control_text>li').eq(index).addClass('store_selected').siblings('li').removeClass('store_selected')   
        })
    })
    $('.store_name li').each(function(index){
        $(this).click(function(){
            $('.map_contents li').eq(index).fadeIn().siblings().fadeOut()
        })
    })

  
})
 