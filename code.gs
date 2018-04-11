function myFunction() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  function ReturnNowNichoku(){
    var Nichoku =[]
    var c=0
    for(var i=1;i<41;i++){
      if (sheet.getRange(i,4).getValue() == "*" && c<2){
        sheet.getRange(i,4).setValue("")
        Nichoku.push(i)
      }
    }
    return Nichoku;
  }
  function addas(n){
    n.forEach(function(v){
      sheet.getRange(v,4).setValue("*")
    })
  } 
  var newNichoku
  nNichoku=ReturnNowNichoku()
  if (nNichoku==[39,40]){
    addas([41,1])
    newNichoku=[41,1]
  }
  if (nNichoku==[40,41]){
    addas([1,2])
    newNichoku=[1,2]
  }
  if (nNichoku==[41,1]){
    addas([2,3])
    newNichoku=[1,2]
  }
  else{
    addas([nNichoku[0]+2,nNichoku[0]+3])
    newNichoku=[nNichoku[0]+2,nNichoku[0]+3]
  }
  
}
