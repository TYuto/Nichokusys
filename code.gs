
function forwardNichoku(olds,sheet)
{
  var nows = [];
  olds.forEach(function(old)
    {
      sheet.getRange(old, nichokuColumn).setValue("");
      var now = (old+2<=classNum ? old+2:old+2-classNum)
      sheet.getRange(now, nichokuColumn).setValue("*");
      nows.push(sheet.getRange(now,nameColumn).getValue())
    });
  return nows;
}

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
  //UrlFetchApp.fetch(slackApiUrl, options);
}


function myFunction() {
  var ss = SpreadsheetApp.openById(spredSheetID);
  var sheet = ss.getActiveSheet();	
  var nameArray = sheet.getRange("C1:C40").getValues();
  var nichokuArray = sheet.getRange("D1:D40").getValues(); 
  Logger.log(nichokuArray)
  var olds = [];  
  for(var i=0;i<classNum;i++){
    if (nichokuArray[i] =="*"){
      Logger.log(nichokuArray[i]);
      Logger.log(i);
      olds.push(i+1)
    }
  }
  Logger.log(olds);
 
  var nows = forwardNichoku(olds,sheet);
  
  sendSlack("今日の日直は"+nows[0]+"さん,"+nows[1]+"さんです.")
}


