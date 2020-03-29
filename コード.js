function myFunction() {
  var sheet = SpreadsheetApp.getActiveSheet();
  Logger.log(sheet.getRange('B2').getA1Notation());
  Logger.log(sheet.getRange('D4:F6').getA1Notation());
  Logger.log(sheet.getRange('2:2').getA1Notation());
  Logger.log(sheet.getRange('B:B').getA1Notation());
  Logger.log(sheet.getRange(4, 4).getA1Notation());
  Logger.log(sheet.getRange(4, 4, 3).getA1Notation());
  Logger.log(sheet.getRange(4, 4, 3, 3).getA1Notation());
}