/**
 * FIVE READERS ― 漢字読破の航路 を Google Apps Script のウェブアプリとして配信する。
 *
 * 使い方（くわしくは gas/README.md）
 *   1. このファイルの中身を Apps Script の「コード.gs」に貼り付ける。
 *   2. HTML ファイルを「Index」という名前で作り、リポジトリの Index.html の中身をそのまま貼り付ける。
 *   3. 「デプロイ」→「新しいデプロイ」→ 種類「ウェブアプリ」で公開する。
 *
 * ゲームはブラウザの中だけで動き、Google ドライブやスプレッドシートには触れない。
 */
function doGet() {
  const page = HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('FIVE READERS ― 漢字読破の航路')
    // HTML 内の viewport 指定は使われないので、ここで付ける（スマホで縮小表示にならないように）
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, viewport-fit=cover');

  // Google サイトなど、別のページの中に埋め込んで使うときだけ次の行のコメントを外す。
  // （どのサイトからでも埋め込めるようになる設定なので、必要なときだけ有効にする）
  // page.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

  return page;
}
