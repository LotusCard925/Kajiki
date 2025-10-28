// 設定ファイル
// このファイルでInstagramアカウントのURLやその他の設定を変更できます

const CONFIG = {
    // InstagramアカウントのURL（ここを変更してください）
    INSTAGRAM_URL: 'https://www.instagram.com/kajiki.ftb/',
    
    // リダイレクトまでの時間（秒）
    REDIRECT_DELAY: 0.2,
    
    // ローディング画面の表示時間（秒）
    LOADING_DELAY: 2.0,
    
    // サイトのタイトル
    SITE_TITLE: 'Kajiki中継ページ',
    
    // ヒーローセクションのテキスト
    HERO_TITLE: '労働チュート',
    HERO_DESCRIPTION: '',
    
    // リダイレクトメッセージ
    REDIRECT_MESSAGE: '',
    
    // ローディングメッセージ
    LOADING_MESSAGE: '読み込み中...'
};

// 設定をエクスポート（他のファイルで使用するため）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}
