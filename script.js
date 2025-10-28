// 設定を読み込み
const INSTAGRAM_URL = window.CONFIG ? window.CONFIG.INSTAGRAM_URL : 'https://www.instagram.com/your_account_here/';
const REDIRECT_DELAY = window.CONFIG ? window.CONFIG.REDIRECT_DELAY : 3;
const LOADING_DELAY = window.CONFIG ? window.CONFIG.LOADING_DELAY : 2;

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', function() {
    // ローディング画面を表示
    showLoadingScreen();
    
    // 設定された時間後にメインコンテンツを表示し、カウントダウンを開始
    setTimeout(() => {
        hideLoadingScreen();
        startCountdown();
    }, LOADING_DELAY * 1000);
});

// ローディング画面を表示
function showLoadingScreen() {
    const loading = document.getElementById('loading');
    const mainContent = document.getElementById('main-content');
    
    loading.style.display = 'flex';
    mainContent.style.display = 'none';
}

// ローディング画面を非表示
function hideLoadingScreen() {
    const loading = document.getElementById('loading');
    const mainContent = document.getElementById('main-content');
    
    loading.style.opacity = '0';
    
    setTimeout(() => {
        loading.style.display = 'none';
        mainContent.style.display = 'block';
        mainContent.classList.add('fade-in');
    }, 500);
}

// カウントダウンを開始
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    let timeLeft = REDIRECT_DELAY;
    
    // カウントダウン表示を更新
    const countdownInterval = setInterval(() => {
        countdownElement.textContent = timeLeft;
        timeLeft--;
        
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            redirectToInstagram();
        }
    }, 1000);
}

// Instagramにリダイレクト
function redirectToInstagram() {
    // リダイレクト前の確認（オプション）
    if (INSTAGRAM_URL === 'https://www.instagram.com/your_account_here/') {
        alert('InstagramアカウントのURLが設定されていません。script.jsファイルのINSTAGRAM_URLを更新してください。');
        return;
    }
    
    // Instagramアプリがインストールされているかチェック（モバイルの場合）
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // モバイルの場合、Instagramアプリを開くことを試行
        const appUrl = INSTAGRAM_URL.replace('https://www.instagram.com/', 'instagram://user?username=');
        
        // まずInstagramアプリを開くことを試行
        window.location.href = appUrl;
        
        // アプリが開かない場合のフォールバック（3秒後）
        setTimeout(() => {
            window.location.href = INSTAGRAM_URL;
        }, 3000);
    } else {
        // デスクトップの場合は直接ブラウザで開く
        window.location.href = INSTAGRAM_URL;
    }
}

// ユーザーが手動でInstagramに移動したい場合のボタン（オプション）
function addManualRedirectButton() {
    const redirectDiv = document.querySelector('.instagram-redirect');
    const button = document.createElement('button');
    button.textContent = '今すぐInstagramに移動';
    button.className = 'manual-redirect-btn';
    button.onclick = redirectToInstagram;
    
    // ボタンのスタイル
    button.style.cssText = `
        background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 25px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        margin-top: 15px;
        transition: transform 0.2s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    `;
    
    // ホバー効果
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
    
    redirectDiv.appendChild(button);
}

// エラーハンドリング
window.addEventListener('error', function(e) {
    console.error('エラーが発生しました:', e.error);
});

// ページの可視性が変わった時の処理（バックグラウンドから戻った時など）
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        // ページが再び表示された時、必要に応じて処理を再開
        console.log('ページが再表示されました');
    }
});

// タッチデバイス用の最適化
if ('ontouchstart' in window) {
    // タッチデバイス用の追加処理
    document.body.style.touchAction = 'manipulation';
}

// パフォーマンス最適化
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        // アイドル時間に実行する処理
        console.log('ページの初期化が完了しました');
    });
} else {
    setTimeout(() => {
        console.log('ページの初期化が完了しました');
    }, 0);
}