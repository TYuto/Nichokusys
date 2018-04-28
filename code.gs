function myFunction() {
  var ss = SpreadsheetApp.openById(spredSheetID);
  var sheet = ss.getActiveSheet();
  function ReturnNowNichoku(){
    var Nichoku =[]
    var c=0
    for(var i=1;i<42;i++){
      if (sheet.getRange(i,nichokuColumn).getValue() == "*" && c<2){
        sheet.getRange(i,nichokuColumn).setValue("")
        Nichoku.push(i)
      }
    }
    return Nichoku;
  }
  var olds=ReturnNowNichoku()
  var news =[]
  olds.forEach(function(sold){
    Logger.log(sold)
    var old=Number(sold)
    Logger.log(old)
    var i
    if (old==40){
      i=1
      Logger.log(i)    
    }
    else if (old==41){i=2}
    else{i=old+2}
    sheet.getRange(i,nichokuColumn).setValue("*")
    news.push(sheet.getRange(i,nameColumn).getValue())
  });
  Logger.log(news)

  var jsonData =
  {
     "username" : "日直bot",
     "icon_emoji": "vim2:",
     "text" : ("今日の日直は"+news[0]+"さん,"+news[1]+"さんです.")
  };
  
  var payload = JSON.stringify(jsonData);
  
  var options =
  {
    "method" : "post",
    "contentType" : "application/json",
    "payload" : payload
  };

  //UrlFetchApp.fetch(,slackApiUrl options);
}

