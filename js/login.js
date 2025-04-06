document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 폼 데이터 가져오기
    const email = this.querySelector('input[type="text"]').value;
    const password = this.querySelector('input[type="password"]').value;
    const rememberMe = document.getElementById('remember').checked;

    // 간단한 유효성 검사
    if (!email || !password) {
        alert('이메일과 비밀번호를 모두 입력해주세요.');
        return;
    }

    // 실제 서비스에서는 서버로 로그인 요청을 보내야 합니다.
    // 여기서는 로컬 스토리지를 사용한 간단한 로그인 구현
    
    // 로컬 스토리지에 사용자 정보 저장 (개발용)
    // 실제 서비스에서는 서버에서 인증 후 토큰을 발급받아 저장해야 합니다.
    const userData = {
        email: email,
        name: email.split('@')[0], // 이메일에서 아이디 부분만 추출하여 이름으로 사용
        isLoggedIn: true,
        loginTime: new Date().toISOString()
    };
    
    // 로컬 스토리지에 데이터 저장
    localStorage.setItem('userData', JSON.stringify(userData));
    
    // 홈페이지로 리다이렉트
    alert('로그인되었습니다.');
    window.location.href = 'index.html';
});

// 소셜 로그인 버튼 이벤트 처리 (현재는 더미 기능)
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', function(e) {
        e.preventDefault();
        
        let socialType = '';
        if (this.classList.contains('kakao')) {
            socialType = '카카오';
        } else if (this.classList.contains('naver')) {
            socialType = '네이버';
        } else if (this.classList.contains('google')) {
            socialType = '구글';
        }
        
        alert(`${socialType} 로그인 기능은 현재 개발 중입니다.`);
    });
});

// 비밀번호 찾기 기능 (현재는 더미 기능)
document.querySelector('.forgot-password').addEventListener('click', function(e) {
    e.preventDefault();
    alert('비밀번호 찾기 기능은 현재 개발 중입니다.');

});