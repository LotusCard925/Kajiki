# Kajiki中継ページ

スマホ向けに最適化されたInstagramリダイレクトページです。美しい背景画像とスムーズなアニメーションで、ユーザーをInstagramアカウントに誘導します。

## 特徴

- **モバイルファーストデザイン**: スマートフォンに最適化されたUI/UX
- **自動Instagramリダイレクト**: 3秒のカウントダウン後に自動でInstagramに移動
- **美しい背景画像**: カスタム背景画像のサポート
- **ローディングアニメーション**: スムーズなページ遷移
- **レスポンシブ対応**: 様々な画面サイズに対応
- **タッチフレンドリー**: モバイルデバイスでの操作に最適化

## 技術スタック

- HTML5
- CSS3（Flexbox、アニメーション、背景画像）
- Vanilla JavaScript
- モバイルファーストデザイン

## セットアップ

1. リポジトリをクローン
```bash
git clone https://github.com/LotusCard925/Kajiki.git
```

2. プロジェクトディレクトリに移動
```bash
cd Kajiki
```

3. Instagramアカウントの設定
   - `config.js`ファイルを開く
   - `INSTAGRAM_URL`を実際のInstagramアカウントのURLに変更

4. 背景画像の設定
   - `Kajiki.jpg`を任意の画像に置き換え
   - 推奨サイズ: 1080x1920px（縦長）

5. ブラウザでindex.htmlを開く

## 設定

`config.js`ファイルで以下の設定を変更できます：

- `INSTAGRAM_URL`: InstagramアカウントのURL
- `REDIRECT_DELAY`: リダイレクトまでの時間（秒）
- `LOADING_DELAY`: ローディング画面の表示時間（秒）
- `HERO_TITLE`: メインタイトル
- `HERO_DESCRIPTION`: 説明文

## デプロイ

このプロジェクトはGitHub Pagesでデプロイされています。

## 使用方法

1. ユーザーがページにアクセス
2. ローディング画面が表示される
3. メインコンテンツが表示され、カウントダウンが開始
4. 3秒後に自動的にInstagramアカウントにリダイレクト

## カスタマイズ

- 背景画像: `Kajiki.jpg`を置き換え
- 色やフォント: `styles.css`を編集
- 動作やタイミング: `config.js`を編集

## ライセンス

MIT License

## お問い合わせ

プロジェクトに関するお問い合わせは、GitHubのIssuesページからお願いします。
