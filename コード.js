function myFunction() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log(spreadsheet.getName());//はじめてのGAS
  
  var url = 'https://docs.google.com/spreadsheets/d//1n83vW6Ik-seKegml6frSzf8uQMzQ1mxCEBi9XlGtoR4/edit#gid=0'; //URL
  spreadsheet = SpreadsheetApp.openByUrl(url);
  Logger.log(spreadsheet.getName()); //はじめてのGAS
  
  var id = 'xxxxxxxx'; //スプレッドシートID
  spreadsheet = SpreadsheetApp.openById(id);
  Logger.log(spreadsheet.getName());//はじめてのGAS
}

