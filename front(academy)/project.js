let currentSlide = 0; // 현재 슬라이드 번호 (0부터 시작)
const totalSlides = 3; // 총 슬라이드 개수

// 오른쪽 버튼 클릭 시 다음 슬라이드로 이동
document.querySelector("#btnright").addEventListener("click", function() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++; // 다음 슬라이드로 이동
    }
    moveSlide();
});

// 왼쪽 버튼 클릭 시 이전 슬라이드로 이동
document.querySelector("#btnleft").addEventListener("click", function() {
    if (currentSlide > 0) {
        currentSlide--; // 이전 슬라이드로 이동
    }
    moveSlide();
});

// 키보드 방향키로 슬라이드 이동 (document 레벨에서 키보드 이벤트 감지)
document.addEventListener('keydown', function(event) {
    // 왼쪽 방향키를 눌렀을 때 'btnleft' 버튼 클릭
    if (event.key === 'ArrowLeft') {
        document.querySelector("#btnleft").click();
    }
    
    // 오른쪽 방향키를 눌렀을 때 'btnright' 버튼 클릭
    if (event.key === 'ArrowRight') {
        document.querySelector("#btnright").click();
    }
});

// 슬라이드를 실제로 이동시키는 함수
function moveSlide() {
    const sliderWrapper = document.querySelector("#inner");
    const newTranslateValue = -100 * currentSlide; // 현재 슬라이드에 맞게 -100vw, -200vw 등으로 이동
    sliderWrapper.style.transform = `translateX(${newTranslateValue}vw)`;
}