function mergeMCQSheetsWithSelectiveFormattingAndColumns() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let mergedSheet = ss.getSheetByName('merged');
  
  // Create 'merged' if it doesn't exist
  if (!mergedSheet) {
    mergedSheet = ss.insertSheet('merged');
  } else {
    // Clear existing content
    mergedSheet.clear();
  }

  ss.getSheets().forEach(sheet => {
    if (sheet.getName().endsWith('_MCQ')) {
      const sheetName = sheet.getName();
      // Append the sheet name to 'merged', highlight it
      mergedSheet.appendRow([`Sheet: ${sheetName}`]);
      let lastRow = mergedSheet.getLastRow();
      mergedSheet.getRange(lastRow, 1).setBackground('yellow');
      
      // Add a row for column names for clarity and readability
      mergedSheet.appendRow(['', 'Easy', 'Medium', 'Hard']); // Assuming you want these labels right after the sheet name
      
      // Add an extra row for spacing (blank row) after the column names for clarity
      mergedSheet.appendRow(['']); 

      const data = sheet.getDataRange().getValues();
      let totals = { easy: 0, medium: 0, hard: 0 };
      // Assuming easy, medium, and hard values are in specific columns, adjust these indices as needed
      const easyIndex = 2, mediumIndex = 3, hardIndex = 4;

      data.forEach((row, rowIndex) => {
        if (rowIndex > 0) { // Skip the header row of each sheet
          totals.easy += parseInt(row[easyIndex]) || 0;
          totals.medium += parseInt(row[mediumIndex]) || 0;
          totals.hard += parseInt(row[hardIndex]) || 0;
          mergedSheet.appendRow(row);
        }
      });

      // Append the totals, highlight the "Total" cell
      mergedSheet.appendRow(['Total', '', totals.easy, totals.medium, totals.hard]);
      lastRow = mergedSheet.getLastRow();
      mergedSheet.getRange(lastRow, 1).setBackground('green'); // Highlight "Total" cell
      
      // Add an extra row for spacing (blank row) after the totals for clarity
      mergedSheet.appendRow(['']); 
    }
  });
}
