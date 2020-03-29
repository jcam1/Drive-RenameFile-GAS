function myFunction() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log(spreadsheet.getId()); //スプレッドシートID
  Logger.log(spreadsheet.getName()); //はじめてのGAS
  Logger.log(spreadsheet.getNumSheets()); //3
  Logger.log(spreadsheet.getUrl()); //URL
}