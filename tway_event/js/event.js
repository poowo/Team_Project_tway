
/* 이벤트 메인 사진 숨기기 */


        function aa(){
                $('.event_sub').eq(1).hide();
                $('.event_sub').eq(2).hide();
                $('#middle .top').stop().hide();
                $('.start_box_2').eq(1).hide();
        }

        aa();


/* 클릭시 화면 및 버튼 배경색 */
        
    function ss(num) {
            
            $('.dot').eq(num-1).css({'border': 'none', 'background-color': 'rgb(230, 88, 88)', 'color': '#fff'});
            $('.dot').eq(num-2).css({'border': 'none', 'background-color': 'white', 'color': 'black'});
            $('.dot').eq(num-3).css({'border': 'none', 'background-color': 'white', 'color': 'black'});
            $('.dot').eq(num-4).css({'border': 'none', 'background-color': 'white', 'color': 'black'});

            $('.event_sub').eq(num-1).show();
            $('.event_sub').eq(num-2).hide();
            $('.event_sub').eq(num-3).hide();

    }


/* 왕복 편도 */


    function choice(number) {

        const choice = $('.choice li');

            choice.eq(number-1).css({'color':'#d22c26', 'border-color' : '#d22c26', 'font-weight' : '600'});
            choice.eq(number-2).css({'color':'black', 'border-color' : 'black', 'font-weight' : '500'});

    }


/* 할인코드 호버 */

const choices = $('.choice3 li:nth-child(1)');

choices.on('mouseenter', function(){
        
       $(this).next().next().show();

});

choices.on('mouseleave', function(){

        $(this).next().next().hide();

});


/* 출발지 누를 시 보이게 */
var i = 1;

$('.search input').on('click', function(){
        
        if(i<=1){
            $('#start_box').stop().slideDown(300);
            $('#middle .top').stop().slideDown(300);
            i++;
        }else if(i=2){
           $('#start_box').stop().slideUp(300);
           $('#middle .top').stop().slideUp(300);
           i = 0;
        }
        
        
});

/* 이벤트 박스 누르면 사라지게 */

// $('!.choice_box').click(function(){
//         $('#start_box').stop().slideUp(300);
//         $('#middle .top').stop().slideUp(300);
// });



/* 출발지 누를 시 텍스트 적용 */




/* 나라 선택 시 테두리 */

function country(num) {
        const country = $('.start_box_1 li');

        country.eq(num-1).css({'border' : '1px solid #d22c26'});
        country.eq(num-2).css({'border' : 'none'});

        const choice = $('.start_box_2');

        choice.eq(num-1).show();
        choice.eq(num-2).hide();

}





    


        
       




