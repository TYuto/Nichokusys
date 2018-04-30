# Nichokusys

##  what is this
今日の日直を毎日slackに投げてくれるもの

## how to use

GASで実行してください

config.gsに以下を書き込むことで実行できます

* spredSheetID
  * クラスの名前が書かれたスプレッドシートのurlの　docs.google.com/spreadsheets/d/ここの部分/~
* slackAPI
  * Incoming WebHooksを使ってます
* nichokuColumn 
  * スプレッドシートの今日の日直マーク(*)がつく列
* nameColumn 
  * スプレッドシートの名前が書かれている列
* classNum 
  * クラスの人数

### example
```config.gs
var spredSheetID = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGH";
var slackApiUrl = "https://hooks.slack.com/services/hogepiyofuga";
var nichokuColumn = 4;
var nameColumn = 3;
var classNum = 40; 
```


| | |name1| |
|:-----------|------------:|:------------:|:------------:|
| | |name2 | |
| | |name3 |* |
| | |name4 | *|
| | |name5 | |
| ・|・ |・ |・ |
| ・|・ |・ |・ |
| | |name39 | |
| | |name40 | |
