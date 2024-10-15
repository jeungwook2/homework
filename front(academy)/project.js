let currentSlide = 0; // 현재 슬라이드 번호 (0부터 시작)
const totalSlides = 3; // 총 슬라이드 개수

document.getElementById("btnright").addEventListener("click", function() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++; // 다음 슬라이드로 이동
    }
    moveSlide();
});

document.getElementById("btnleft").addEventListener("click", function() {
    if (currentSlide > 0) {
        currentSlide--; // 이전 슬라이드로 이동
    }
    moveSlide();
});


function moveSlide() {
    const sliderWrapper = document.querySelector("#inner");
    const newTranslateValue = -100 * currentSlide; // 현재 슬라이드에 맞게 -100vw, -200vw 등으로 이동
    sliderWrapper.style.transform = `translateX(${newTranslateValue}vw)`;
}