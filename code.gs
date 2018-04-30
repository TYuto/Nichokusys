function sendSlack(text)
{
  var jsonData =
  {
     "username" : "日直bot",
     "icon_emoji": "python",
     "text" : text
  };
  var payload = JSON.stringify(jsonData);
  var options =
  {
    "method" : "post",
    "contentType" : "application/json",
    "payload" : payload
  };
  Logger.log(text);
  UrlFetchApp.fetch(slackApiUrl, options);
}


function main() {
  var ss = SpreadsheetApp.openById(spredSheetID);
  var sheet = ss.getActiveSheet();	
  var nameArray = sheet.getRange("C1:C40").getValues();
  var nichokuArray = sheet.getRange("D1:D40").getValues(); 
  var olds = [];  
  for(var i=0;i<classNum;i++){
    if (nichokuArray[i] =="*"){
      olds.push(i)
    }
  }
  var nows = [];
  olds.forEach(function(old)
    {
      nichokuArray[old] = "";
      var now = (old+2<classNum ? old+2:old+2-classNum)
      nichokuArray[now] = "*"
      nows.push(nameArray[now])
    });
  var ary = [];
  for (var i=0; i<40; i++) {
    ary.push([nichokuArray[i]]);
  }
  sheet.getRange("D1:D40").setValues(ary);
  
  sendSlack("今日の日直は"+nows[0]+"さん,"+nows[1]+"さんです.")
}


