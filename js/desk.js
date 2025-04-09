
$(function(){
// desk 페이지 b_gnb아코디언 넣은거

    $('.b_gnb>ul>li').on({
        mouseenter:function(){$(this).find('.sub_menu').stop().slideDown()},
        mouseleave:function(){$(this).find('.sub_menu').stop().slideUp()},
    })

//desk페이지 이미지 호버 변경
     $('.product>li').each(function(index){
         $(this).mouseenter(function(){
             $(this).find('img').attr('src',"img/product/desks/desk"+index+"_hover.jpg")
         })
         $(this).mouseleave(function(){
            $(this).find('img').attr('src',"img/product/desks/desk"+index+".jpg")
        })
     })
    $('.b_gnb>ul a').click(function(){
        event.preventDefault()
    })  
 

    //detail페이지 이미지 변경js

    $('.detail_moreimg>ul>li').click(function(){
        let imgUrl = $(this).find('img').attr('src')

    $('.detail_left>img').attr('src',imgUrl)
    }) //디테일 더보기 이미지를 각각 클릭하면 레프트에 클릭된 이미지가 나온다.
    $('.detail_color_box>ul>li').each(function(index){
        $(this).click(function(){
            $(this).addClass('selected_color_box').siblings().removeClass('selected_color_box')
            $('.corner_img').find('img').attr('src','img/detail/detailcorner'+index+'.jpg')
            $('.font_img').find('img').attr('src','img/detail/detailfront'+index+'.jpg')
            $('.view_img').attr('src','img/detail/detailfront'+index+'.jpg')
        })
    })
//detail의 quick_gnb클릭시 css부여

    $('.quick_gnb>ul>li').each(function(index){
        $(this).click(function(){
            $(this).addClass('detail_info_selected').siblings().removeClass('detail_info_selected')
        })
    })


   
    //join에 통신사 누르면 나오는거~~
   $('.option_bar').click(function(){
    $(this).find('ul').slideToggle()
    event.preventDefault()
   })

   $('.tell_list>li').each(function(index){
        let tellListSelect = $(this).find('div').text()
        $(this).click(function(){
            $('.tell_place').text(tellListSelect)
        })
    })
   
     //location에 목록 클릭하면 지도 바뀌는거

     $('.store_name li').each(function(index){
        $(this).click(function(){
            $(this).addClass('name_select').siblings().removeClass('name_select')
            $('.map_contents li').eq(index).fadeIn().siblings().fadeOut()
            $('.map_info>li').eq(index).addClass('map_info').siblings().removeClass('map_info')

        })
    })
//login start
    $('.member_select').find('div').each(function(index){
        $(this).click(function(){
            $(this).addClass('login_select').siblings().removeClass()
            $('.login_right>div').eq(index).addClass('login_select').siblings().removeClass()
        })
    })
//login end



//now start
$('.page').click(function(){
    event.preventDefault()
})
$('#nowTop').click(function(){
    event.preventDefault()
})
$('.now_name_select').click(function(){
    event.preventDefault()
})
    //1.nowTop에 나우라이트에 이미지리스트 클릭하면 
    //1-1.레프트 이미지src를 리스트이미지src와 같게하기
    $('.now_top_img_wrap>ul>li').click(function(){
        let imgUrl = $(this).find('img').attr('src')
        $('.now_top_left>img').attr('src',imgUrl)
    })
    //1-2. 같은 순서의 텍스트 ul나오게하기
    $('.now_top_img_wrap>ul>li').each(function(index){
        $(this).click(function(){
            $('.now_top_text>ul').eq(index).addClass('now_select').siblings().removeClass('now_select')
        })
   })
   //2.nowTop에 라이트에 넥스트, 프리브 버튼 누르면 이미지 리스트가 좌우로 움직이기.   
let nowClickNum = 0
    
function nowslider(index){               
    $('.now_top_img_wrap').stop(true).animate({left:-25*index+'%'},1000,'easeOutExpo')
}

$('.now_next_btn').click(function(){
nowClickNum++
if(nowClickNum>3){
    nowClickNum=0
}
nowslider(nowClickNum)
})
$('.now_prv_btn').click(function(){
nowClickNum--
if(nowClickNum<0){
    nowClickNum=3
}
nowslider(nowClickNum)
})
   //3.나우바텀에 바텀네임 li 순서에 맞게 누르면 나우 바텀 리스트에 ul 맞춰 선택되기. 
   //4. 나우 바텀에 나우 뷰 올 누르면 나우 바텀 리스트 전부 보이게하기
   
   $('.now_bttm_name>ul>li').each(function(index){
    $(this).click(function(){
        $(this).find('a').addClass('now_name_select').parent().siblings().find('a').removeClass('now_name_select')
        $('.now_bttm_list>ul').eq(index).fadeIn().css('display','flex').siblings().css('display','none')
        $('.now_vw_all').find('a').removeClass('now_name_select')
       
    })
    $('.now_bttm_name>ul>li a').click(function(){
        event.preventDefault()
    })
    
   })

   $('.now_name_select').click(function(){
    $(this).addClass('now_name_select')
    $('.now_bttm_name>ul>li').find('a').removeClass('now_name_select')
    $('.now_bttm_list>ul').fadeIn().css('display','flex')
       
   })
//now end



//location지도랑 이름 바뀌는거~~~
$('.store_name li').each(function(index){
    $(this).click(function(){
        $(this).addClass('name_select').siblings().removeClass('name_select')
        $('.map_contents li').eq(index).fadeIn().siblings().fadeOut()
        $('.map_info>li').eq(index).addClass('map_info_select').siblings().removeClass('map_info_select')

    })
})




})
 