# g2n
github　issueをnotionにコピーする
トリガーは「Notion」ラベルをつけたとき

## 設定
NOTION_DATABASE_ID: Notion のデータベース ID
NOTION_TOKEN：  Notion API のトークン
GITHUB_REPOSITORY_URL：　コピー元のリポジトリURL

## node_modulesをgithubに上げるのは辛いのでローカルでbuildしてpushする
```
npm i -g @vercel/ncc 
ncc build index.js --license licenses.txt
```
