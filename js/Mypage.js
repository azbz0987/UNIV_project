function switchTab(tabId) {
    // 모든 탭과 탭 콘텐츠를 비활성화
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // 선택한 탭과 해당 콘텐츠를 활성화
    document.querySelector(`.tab:nth-child(${getTabIndex(tabId) + 1})`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

function getTabIndex(tabId) {
    const tabs = ['info', 'reservations', 'history', 'reviews', 'points'];
    return tabs.indexOf(tabId);
}

function showEditForm() {
    document.getElementById('editForm').style.display = 'block';
}

function hideEditForm() {
    document.getElementById('editForm').style.display = 'none';
}