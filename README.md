# when-hodlers-cry

『ホドラーのなく頃に』(WHEN HODLERS CRY) の**プレイ用リポジトリ**。
開発エンジン（ソース正本）は `49601000/when-hodlers-cry-dev-engine`。ここにはコンパイル済みの出力だけを置く。

**非公開・個人利用のパロディ作品専用。公開配布はしない。GitHub Pages 等の公開ホスティングは有効化しないこと。**

## 収録内容

- 第1章「消える流動性」（鬼隠し編）— スペース版からの移植
- EP選択画面＋アンロック方式（次話は前話クリアまで表示されない）
- セーブ／解放進捗はブラウザの localStorage に保存（ブラウザを閉じても残る。同じ端末・同じブラウザ内のみ有効）

## 遊び方

このリポジトリを clone して、フォルダ内で静的サーバを立ててブラウザで開く。

```bash
git clone https://github.com/49601000/when-hodlers-cry.git
cd when-hodlers-cry
npx serve .          # または: python3 -m http.server 8000
```

表示されたURL（例: http://localhost:3000）をブラウザで開くと、EP選択画面から始まる。
スマホで遊ぶ場合は、同じWi-Fi内でPCのIPアドレス＋ポートで開く。

開発用：URL末尾に `?unlock=all` を付けると全EP解放表示で起動する（進捗データ自体は書き換わらない）。

## 操作

- クリック／Space／Enter：文章送り
- 画面上のボタン：バックログ／オート／スキップ／セーブ／ロード／環境音ON-OFF
