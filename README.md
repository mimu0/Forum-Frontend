# Forum-Frontend
# React.js
## 環境構築の参考サイト
http://www.typescriptlang.org/docs/handbook/react-&-webpack.html



## study

http://blog.okazuki.jp/entry/2016/01/10/000131
app.tsxを作るところから


## φ(..)メモメモ
## 参考にするサイト

http://www.typescriptlang.org/docs/handbook/react-&-webpack.html


## Type Scriptを関連の各種ライブラリをインストールする

```
sudo npm install -g typescript typings webpack
```

#$ React.js関連の各種ライブラリをインストールする

``` 
sudo npm install --save react react-dom

sudo npm install --save-dev ts-loader source-map-loader
```


## linkの設定
```
sudo npm link typescript
```

## 定義ファイルのインストール

```
sudo typings install --global --save dt~react
sudo typings install --global --save dt~react-dom


sudo typings install --global --save dt~es6-shim
sudo typings install --global --save dt~react-redux

```

##type scriptの設定ファイルを作成する
touch tsconfig.json


webpackの設定ファイルを作成する
vi webpack.config.js

vscodeのデバッグの設定

Chromeの拡張プラグインをインストールする
https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome
https://ics.media/entry/11356


.vscode/launch.jsonのtypeをchromeにする