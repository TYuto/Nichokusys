function myFunction() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  function ReturnNowNichoku(){
    var Nichoku =[]
    var c=0
    for(var i=1;i<42;i++){
      if (sheet.getRange(i,4).getValue() == "*" && c<2){
        sheet.getRange(i,4).setValue("")
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
    sheet.getRange(i,4).setValue("*")
    news.push(sheet.getRange(i,3).getValue())
  });
  Logger.log(news)

  var jsonData =
  {
     "username" : "日直bot",
     "icon_emoji": "hatching_chick:",
     "text" : ("今日の日直は"+news[0]+"さん,"+news[1]+"さんです.")
  };
  
  var payload = JSON.stringify(jsonData);
  
  var options =
  {
    "method" : "post",
    "contentType" : "application/json",
    "payload" : payload
  };

  UrlFetchApp.fetch("うらる", options);
}
