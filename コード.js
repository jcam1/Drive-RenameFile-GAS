function myFunction() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log(spreadsheet.getName()); //はじめてのGAS

  var url = 'https://docss.google.com/spreadsheets/d/1YGfE7d4f9aKfNst0W--PDdllA7ArQik-ZhDfqbeXahU/edit#gid=0'; //URL
  spreadsheet = SpreadsheetApp.openByUrl(url);
  Logger.log(spreadsheet.getName()); //はじめてのGAS

  var id = '1YGfE7d4f9aKfNst0W--PDdllA7ArQik-ZhDfqbeXahU'; //スプレッドシートID
  spreadsheet = SpreadsheetApp.openById(id);
  Logger.log(spreadsheet.getName()); //はじめてのGAS
}