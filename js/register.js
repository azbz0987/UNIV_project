// 전체 약관 동의 처리
document.getElementById('all-terms').addEventListener('change', function() {
    const checkboxes = document.querySelectorAll('.terms-item input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = this.checked;
    });
});

// 개별 약관 체크 시 전체 약관 체크박스 상태 업데이트
const individualTerms = document.querySelectorAll('.terms-item input[type="checkbox"]:not(#all-terms)');
individualTerms.forEach(term => {
    term.addEventListener('change', function() {
        const allChecked = Array.from(individualTerms).every(t => t.checked);
        document.getElementById('all-terms').checked = allChecked;
    });
});

// 폼 유효성 검사
document.querySelector('.signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 주소 유효성 검사 추가
    const zipcode = document.getElementById('zipcode').value;
    const address = document.getElementById('address').value;
    const addressDetail = document.getElementById('addressDetail').value;
    
    if (!zipcode || !address || !addressDetail) {
        alert('주소를 모두 입력해주세요.');
        return;
    }
    
    // 개발 중 알림
    alert('회원가입 기능은 현재 개발 중입니다.');
});

// 입력 필드 유효성 검사 (예시)
const emailInput = document.querySelector('input[type="email"]');
emailInput.addEventListener('blur', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(this.value);
    
    if (!isValid && this.value) {
        this.parentElement.classList.add('error');
    } else {
        this.parentElement.classList.remove('error');
    }
});

// 비밀번호 검사 (예시)
const passwordInput = document.querySelector('input[type="password"]');
passwordInput.addEventListener('blur', function() {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const isValid = passwordRegex.test(this.value);
    
    if (!isValid && this.value) {
        this.parentElement.classList.add('error');
    } else {
        this.parentElement.classList.remove('error');
    }
});

// 로컬 테스트용 임시 함수
function testPostcodeSearch() {
    // 테스트 데이터
    const testData = {
      zonecode: '14097',
      address: '경기 안양시 만안구 성결대학로 테스트 주소',
      addressEnglish: 'Test Address, Manan-gu, Anyang-si, Korea'
    };
    
    // 주소 데이터 설정
    document.getElementById('zipcode').value = testData.zonecode;
    document.getElementById('address').value = testData.address;
    document.getElementById('addressDetail').focus();
    
    console.log('테스트 데이터가 입력되었습니다.');
  }
  
  // 우편번호 검색 버튼 클릭 이벤트 처리
  document.getElementById('search-zipcode').addEventListener('click', function() {
    // 로컬 환경에서는 테스트 함수 사용, 서버 환경에서는 실제 서비스 사용
    if (window.location.protocol === 'file:') {
      console.log('로컬 환경에서 실행 중입니다. 테스트 함수를 사용합니다.');
      testPostcodeSearch();
    } else {
      console.log('서버 환경에서 실행 중입니다. 다음 우편번호 서비스를 사용합니다.');
      // 다음 우편번호 서비스 실행
      new daum.Postcode({
        oncomplete: function(data) {
          document.getElementById('zipcode').value = data.zonecode;
          document.getElementById('address').value = data.address;
          document.getElementById('addressDetail').focus();
        }
      }).open();
    }
  });
