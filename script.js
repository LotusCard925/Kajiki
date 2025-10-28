// 設定を読み込み
const INSTAGRAM_URL = window.CONFIG ? window.CONFIG.INSTAGRAM_URL : 'https://www.instagram.com/kajiki.ftb/';
const REDIRECT_DELAY = window.CONFIG ? window.CONFIG.REDIRECT_DELAY : 0.2; // 表示後の待機
const LOADING_DELAY = 0.2; // ローディングは固定で0.2秒に短縮

// デバッグ用：設定値をコンソールに出力
console.log('設定値:', {
    INSTAGRAM_URL,
    REDIRECT_DELAY,
    LOADING_DELAY,
    CONFIG_LOADED: !!window.CONFIG
});

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', function() {
    // ローディング画面を表示
    showLoadingScreen();
    
    // 0.2秒でローディング閉じ、メインを表示
    setTimeout(() => {
        hideLoadingScreen();
        
        // サイト自体の可視表示を合計2秒確保
        const VISIBLE_TIME_MS = 2000; // 2秒
        
        setTimeout(() => {
            redirectToInstagram();
        }, VISIBLE_TIME_MS);
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
        mainContent.style.display = 'flex';
        mainContent.classList.add('fade-in');
    }, 300);
}

// Instagramにリダイレクト
function redirectToInstagram() {
    // リダイレクト前の確認（オプション）
    if (INSTAGRAM_URL === 'https://www.instagram.com/your_account_here/') {
        alert('InstagramアカウントのURLが設定されていません。config.jsファイルのINSTAGRAM_URLを更新してください。');
        return;
    }
    
    // Instagramアプリがインストールされているかチェック（モバイルの場合）
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // モバイルの場合、Instagramアプリを開くことを試行
        const appUrl = INSTAGRAM_URL.replace('https://www.instagram.com/', 'instagram://user?username=');
        
        // まずInstagramアプリを開くことを試行
        window.location.href = appUrl;
        
        // アプリが開かない場合のフォールバック（1秒後）
        setTimeout(() => {
            window.location.href = INSTAGRAM_URL;
        }, 1000);
    } else {
        // デスクトップの場合は直接ブラウザで開く
        window.location.href = INSTAGRAM_URL;
    }
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