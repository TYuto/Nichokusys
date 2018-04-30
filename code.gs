function returnNichoku(sheet)
{
  var Nichoku =[]
  var c=0
  for(var i=1;i<42;i++)
  {
    if (sheet.getRange(i,nichokuColumn).getValue() == "*" && c<2)
    {
      Nichoku.push(i)
    }
  }
  return Nichoku;
}

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
  UrlFetchApp.fetch(slackApiUrl, options);
}


function myFunction() {
  var ss = SpreadsheetApp.openById(spredSheetID);
  var sheet = ss.getActiveSheet();
  
  var olds = returnNichoku(sheet);
  var nows = forwardNichoku(olds,sheet);
  
  sendSlack("今日の日直は"+nows[0]+"さん,"+nows[1]+"さんです.")
}


