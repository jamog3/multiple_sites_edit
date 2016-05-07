# 某サイト用、コンテンツ複製

画像圧縮タスクが含まれてるので色が変わりすぎてる場合は要検討。


## gulpをインストール

```
$ npm install -g gulp
```

## npmパッケージをインストール

```
#プロジェクトのディレクトリに移動して
$ npm install
```

## gulp の監視

```
$ gulp
```

## build

buildディレクトリを削除、htmlと画像一式を複製

```
$ npm run build
```

### 個別タスク

#### htmlを複製

```
$ npm run html
```

#### 画像を複製

```
$ npm run img
```

## ディレクトリ構成

srcを編集。

+ ejs -> html

```
├── build/（ビルド後のソース）
│   ├── images 等
│   └── index.html
│
├── node_modules/
│   └── パッケージ各種
│
├── src/（ビルド前のソース）
│   ├── _templates/（共通パーツのhtml）
│   ├── images/
│   └── index.ejs など（htmlは拡張子をejsにする）
│
├── .git/
├── .gitignore
├── gulpfile.js
├── package.json
└── README.md
```