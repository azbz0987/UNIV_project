// 예약 기능
function bookService(serviceName) {
    alert(serviceName + " 서비스가 예약되었습니다!");
}

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
