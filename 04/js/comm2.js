$(function(){
    
    



    $('.page-header').each(function(){

        //전역변수
        let $헤더 = $(this)
             $윈도우 = $(windw)
        
        $('body').append('<div class="page-header-clone"> </div>')

        $헤더.contents().clone().appendTo('page-header-clone')

        $윈도우.scroll(function(){

            //변수처리하면 훨씬 편함
            //지역변수
            let $스크롤값 = $(windw).scrollTop(),
                 $헤더위치값 = $헤더.offset().top,
                 //보더와 패딩값 높이값
                 $헤더높이값 = $헤더.outerHeight()
                 
                 $헤더복제 = $('.page-header-clone')

            // 만약 (윈도우의 스크롤 값 > 헤더의 위치값)
            if($스크롤값 > ($헤더위치값 + $헤더높이값)){
                $헤더복제.addClass('visible')
            }else{
                $헤더복제.removeClass('visible')
            }

        })
    })
})