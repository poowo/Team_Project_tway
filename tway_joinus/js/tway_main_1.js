// Swiper 생성 | .swiper-container = 구조 Swiper 클래스값
var swiper = new Swiper('.swiper-container', {
    /* a. 슬라이드 보이는 갯수 */
    slidesPerView: 2,
    /* b. 슬라이드 사이 간격 */
    spaceBetween: '4%',
    /* c. 슬라이드 반복 여부 */
    loop: true,
    /* d. 그룹수 맞추기 => 안 맞을겨우 빈칸으로 채우기 여부 */
    loopFillGroupWidthBlank: true,
    /* e. 활성 슬라이드 항상 가운데 배치하기 */
    centeredSlides: false,
    /* f. 슬라이드 속도 */
    speed : 500,
    /* f. 슬라이드 자동 재생 */
   autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },


    // 네이게이션 좌우화살표
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    }
    
});


/* 슬라이드 토글 */
// a. 멈춤 버튼 클릭 시 슬라이드 멈춤
$('.stop').on('click', function(){
    swiper.autoplay.stop();
    $('.stop').css({display:'none'});
    $('.play').css({display:'block'});
});
// a. 재생 버튼 클릭 시 슬라이드 재생
$('.play').on('click', function(){
    swiper.autoplay.start();
    $('.play').css({display:'none'});
    $('.stop').css({display:'block'});
});


/* 슬라이드 마우스 오버 멈춤 & 마우스 아웃 재생 */
$('.swiper-slide').on('mouseover', function(){
    swiper.autoplay.stop();
});
$('.swiper-slide').on('mouseout', function(){
    swiper.autoplay.start();
});






