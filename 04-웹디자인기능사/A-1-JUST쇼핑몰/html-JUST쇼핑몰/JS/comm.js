// function(파라미터){실행문}
// $(function(){}) << 준비 이벤트
$(function(){
    
    // modal 띄우기
    // #modal창 보여줘 -> $('#modal').show();
    
    // .link-bnr<$('link-bnr'>를 클릭<.click();>했을 때 어떤 일이 발생<function>해야 하는지
    $('.link-bnr').click(function(){
        // a태그 링크값 없애기
        event.preventDefault()
        // modal창을 css값을 display:flex로 변경 (만약 그냥 보여주었을 때 block이거나
        // inline-block으로 되어 있다면 가운데로 맞춰주기 위해 flex로 변경할 때 사용)
        $('#modal').css('display', 'flex');
    })
    // modal창을 보여주는 것과 같이 btn-close를 누르면 숨겨줘
    $('.btn-close').click(function(){
        $('#modal').hide();
    })

    // tab(컨테이너 공지사항과 갤러리)
    // .sec-tit 를 클릭했을 때
    // 방금 클릭한 아이의 엄마(section태그)
    $('.tab .sec-tit').click(function(event){
        // 먼저 removeClass입력 전 event.preventDefault를 입력해야 한다.
        event.preventDefault();
        // 갤러리 사진 없애주기
        $('.tab section').removeClass('on')
        // tab밑에 있는 section 에 addClass 클래스 추가 (on클래스 추가)
        // 선택기  parent().addClass('on') << 갤러리활성화했을때 갤러리만 추가
        $(this).parent().addClass('on')
    })

        // slide
        // 변수
        // 내가 원하는 이름 정해주기 - let 다음값
        // 몇번째 슬라이드인지 알려주는 now값
        let now = 0,
            $송일국 = $('.slide > ul'),
            width = 100
        // 3초마다 반복적인 일을 하려고 한다면 setinterval() 메서드 사용
        // 3마다 실행
        setInterval(function(){
        // 조건문
        // 만약 1,2번째 슬라이드라면 다음 슬라이드로 넘긴다.
        // 하지만 아니라면 또는 그 밖(3번째 슬라이드) 라면 첫번째 슬라이드로 이동
        // if(조건문){ 참일 경우의 실행문} else{거짓일 경우 실행문}
        // now값이 3보다 작다면
        if(now < 3){
             // .slide ul이 애니메이션이 되어라 'left:-1200px;'
             $송일국.animate({
                // 연산
                 // now(변수)
                left:(width * now * (-1)) + '%'
                // now = now + 1
            })
                // 위의 변수 + 3번째 슬라이드는 밑의 코드를 입력해주면 +1이 된다.
                now++
        } else{
            $송일국.animate({
                left:0
            })
            now = 0
        }   
    },3000)
})