$(function(){

    $('.slideshow').each(function(){

        // 변수 선언
        let $슬라이드이미지 = $('.slideshow img').find('img')
            슬라이드개수 = $슬라이드이미지.length,
            현재이미지 = 0

        // 셋팅 값(한번 실행)
        // 1. 첫번째 이미지 페이드 인
        $('.slideshow img').eq(0).fadeIn()

        // 3초마다 반복
        setInterval(다음슬라이드, 3000

        // 다음슬라이드로 넘어가는 함수
        function 다음슬라이드 (){

            let 다음이미지 = 현재이미지 + 1
        
        // 2. 첫번째 이미지는 페이드 아웃 / 두번째 이미지가 페이드 인
        $슬라이드이미지.eq(현재이미지).fadeOut()
        $슬라이드이미지.eq(다음이미지).fadeIn()

        현재이미지 = 현재이미지 + 1
    }
}
}