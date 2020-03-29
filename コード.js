function myFunction() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  var sheet = spreadsheet.getSheetByName('シート1');
  Logger.log(sheet.getName()); //シート1

  var sheets = spreadsheet.getSheets();
  Logger.log(sheets[0].getName()); //シート1
  Logger.log(sheets[1].getName()); //シート2
}