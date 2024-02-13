function deleteAllSheetsExceptSome() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  // List of sheet names you want to keep
  const sheetsToKeep = ['Sheet1', 'merged'];

  ss.getSheets().forEach(sheet => {
    // Check if the current sheet's name is not in the list of sheets to keep
    if (!sheetsToKeep.includes(sheet.getName())) {
      // Delete the sheet
      ss.deleteSheet(sheet);
    }
  });
}






