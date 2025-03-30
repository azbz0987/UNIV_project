//스크롤 기능
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 예약 기능
function bookService(serviceName) {
    if (serviceName === '가정 청소') {
        // 가정 청소 서비스일 경우에만 페이지 이동
        window.location.href = 'reservation.html'; // 이동할 페이지 URL
    } else {
        // 다른 서비스 클릭 시에는 아무 작업도 하지 않음
        alert(serviceName + ' 서비스는 현재 예약할 수 없습니다.'); // 알림 메시지
    }
}

// 메인 사진
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // 다음 슬라이드로 이동
    const offset = -currentIndex * 100; // 이동할 거리 계산
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

setInterval(showNextSlide, 3000); // 3초마다 슬라이드 변경
 

// 리뷰 추가 기능
function addReview() {
    const reviewInput = document.getElementById("review-input");
    const reviewList = document.getElementById("review-list");

    if (reviewInput.value.trim() !== "") {
        const newReview = document.createElement("div");
        newReview.classList.add("review-item");
        newReview.textContent = reviewInput.value;
        reviewList.appendChild(newReview);

        reviewInput.value = ""; // 입력 필드 초기화
    } else {
        alert("리뷰 내용을 입력하세요.");
    }
}

// 문의 폼 제출
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("문의가 정상적으로 접수되었습니다.");
});