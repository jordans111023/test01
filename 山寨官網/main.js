// main.js
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    let index = 0;

    function showSlide(n) {
        index = (n + slide.length) % slide.length;
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    document.querySelector('.prev').addEventListener('click', function() {
        showSlide(index - 1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        showSlide(index + 1);
    });

    // 自動播放
    setInterval(function() {
        showSlide(index + 1);
    }, 3000); // 每3秒自動切換幻燈片
});
