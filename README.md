# i-rello

<img src="https://img.shields.io/badge/-Javascript-F7DF1E.svg?logo=javascript&style=plastic"> <img src="https://img.shields.io/badge/Vue.js-ver2.6.11-4FC08D.svg?logo=vue.js&style=plastic"> <img src="https://img.shields.io/badge/Vuex-ver3.4.0-4FC08D.svg?logo=vue.js&style=plastic"> <img src="https://img.shields.io/badge/Amazon%20aws-Amplify-232F3E.svg?logo=amazon-aws&style=plastic">

## 概要
シンプルで使いやすい予定管理アプリを作成しました
タスクを見える化して、計画的に進める為に直感的かつ、出来るだけシンプルに使えるアプリを目指して、作成しました。
機能はまだまだ少ないですが、独学でVue.jsを習得し実装しました。

## 作成期間
* Vue.js学習開始 2020/06/20
* 本リポジトリ作成 2020/07/12
* 各機能実装完了後、デプロイ 2020/07/20
* バージョンアップを継続

## 仕様
* macOS Catalina 10.15.5
* Vue.js 2.6.11
* Vuex 3.4.0
* AWS Amplify

## 主な機能

### 煩わしいユーザー登録は不要です。
多くの方に使って頂きたいのでログイン機能は付けていません。
ブラウザのlocal strage機能で登録したリストやカードを保存できます。

### カード
一つのカードには一つのタスクを入れてください。
詳細はカードのメモ欄に入れてください。

[![Image from Gyazo](https://i.gyazo.com/6c4e6a37167b52563e0d6f08391966e9.gif)](https://gyazo.com/6c4e6a37167b52563e0d6f08391966e9)

### リスト
カードをまとめておきましょう。
曜日毎にカードをまとめるもよし、優先順位でまとめるもよし。
使い方はあなた次第です。

[![Image from Gyazo](https://i.gyazo.com/3bf5419163846713e588099c01fa6d75.gif)](https://gyazo.com/3bf5419163846713e588099c01fa6d75)

### タスクが済んだらカード・リストを削除しましょう。
タスクが完了したら、カードを削除しましょう。また、不要なリストは削除してしまいましょう。

[![Image from Gyazo](https://i.gyazo.com/11a8db597cdfe9ce1b007d3c8cdf2bad.gif)](https://gyazo.com/11a8db597cdfe9ce1b007d3c8cdf2bad)

### ドラッグ＆ドロップ機能
リストやカードを入れ替えることが可能です。
後回しにするカードを別のリストに移したり、優先させるリストを入れ替えたり自由に変更でできます。

[![Image from Gyazo](https://i.gyazo.com/96533591a4cdc593931653772bc6a81a.gif)](https://gyazo.com/96533591a4cdc593931653772bc6a81a)


## 今後実装したいこと

* **カード・リストの編集機能（現在実装中）**
カード・リストの編集機能については現在実装中です。

* **カードに日時の項目を追加し、アラーム機能を実装する**
カードに日時の項目を追加し、期限がくると通知をするアラーム機能の実装を考えております。

* **ポモドーロタイマー機能**
プログラミングの学習をする際に個人的にポモドーロタイマーを使っており、必ず実装したいと考えております。そもそも、”ToDoリスト”　＋　”ポモドーロタイマー”を一緒にして利便性を向上させたいと思ったのが、このアプリを作成したきっかけです。

## 変更履歴

2020/07/20 デプロイ完了