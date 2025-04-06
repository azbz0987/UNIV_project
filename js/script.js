// 슬라이더 기능
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    // 첫 번째 슬라이드 활성화
    slides[0].classList.add('active');
    
    // 슬라이드 자동 전환
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // 5초마다 슬라이드 전환
    setInterval(nextSlide, 5000);
    
    // 서비스 예약 기능
    window.bookService = function(serviceName) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button">&times;</span>
                <h2>${serviceName} 예약</h2>
                <form id="booking-form">
                    <input type="text" placeholder="이름" required>
                    <input type="tel" placeholder="전화번호" required>
                    <input type="email" placeholder="이메일" required>
                    <input type="date" placeholder="날짜" required>
                    <select required>
                        <option value="">시간 선택</option>
                        <option value="09:00">오전 9:00</option>
                        <option value="12:00">오후 12:00</option>
                        <option value="15:00">오후 3:00</option>
                        <option value="18:00">오후 6:00</option>
                    </select>
                    <textarea placeholder="특별 요청사항"></textarea>
                    <button type="submit" class="btn">예약 확인</button>
                </form>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // 모달 닫기 버튼
        const closeButton = modal.querySelector('.close-button');
        closeButton.addEventListener('click', function() {
            document.body.removeChild(modal);
        });
        
        // 모달 외부 클릭 시 닫기
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                document.body.removeChild(modal);
            }
        });
        
        // 폼 제출 이벤트
        const form = modal.querySelector('#booking-form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert(`${serviceName} 예약이 성공적으로 접수되었습니다. 확인 메일을 발송해 드리겠습니다.`);
            document.body.removeChild(modal);
        });
    };
    
    // 스크롤 애니메이션
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature, .service, .review-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    };
    
    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', animateOnScroll);
    // 초기 로드 시에도 애니메이션 실행
    animateOnScroll();
});

// 모달 스타일 추가
const style = document.createElement('style');
style.textContent = `
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
    }
    
    .modal-content {
        background-color: white;
        padding: 30px;
        border-radius: 10px;
        max-width: 500px;
        width: 90%;
        position: relative;
    }
    
    .close-button {
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 24px;
        cursor: pointer;
    }
    
    #booking-form {
        display: flex;
        flex-direction: column;
    }
    
    #booking-form input,
    #booking-form select,
    #booking-form textarea {
        margin-bottom: 15px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    
    #booking-form textarea {
        height: 100px;
        resize: vertical;
    }
    
    .fade-in {
        animation: fadeIn 0.8s ease forwards;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

document.head.appendChild(style);