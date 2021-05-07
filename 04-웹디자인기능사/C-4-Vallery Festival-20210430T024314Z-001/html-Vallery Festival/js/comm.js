
// 슬라이드
$(function(){
    let now = 0,
        $이미지 = $('.slide > ul'),
        width = 100

    setInterval(function(){
        if(now < 3){
            $이미지.animate({
                left:(width * now * (-1)) + '%'
            })
                now++
        } else{
            $이미지.animate({
                left:0
            })
            now = 0
        }   
    },3000)
})
