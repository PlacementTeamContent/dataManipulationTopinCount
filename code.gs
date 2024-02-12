function createSubsheetsBasedOnTopic() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1"); // Adjust the sheet name as necessary
  var dataRange = sheet.getDataRange();
  var values = dataRange.getValues();

  var topicsIndex = {}; // To store topics and their subtopics with difficulty counts

  // Assuming 'Topic' is in column E (index 4), 'Sub Topic' in F (index 5), and 'Difficulty' in G (index 6)
  // Adjust the indices as per your sheet's structure
  for (var i = 1; i < values.length; i++) { // Starting from 1 to skip header row
    var topic = values[i][4];
    var subTopic = values[i][5];
    var difficulty = values[i][6];

    if (!topicsIndex[topic]) {
      topicsIndex[topic] = {};
    }

    if (!topicsIndex[topic][subTopic]) {
      topicsIndex[topic][subTopic] = {easy: 0, medium: 0, hard: 0};
    }

    // Increment the count based on difficulty
    if (difficulty.includes("EASY")) {
      topicsIndex[topic][subTopic].easy++;
    } else if (difficulty.includes("MEDIUM")) {
      topicsIndex[topic][subTopic].medium++;
    } else if (difficulty.includes("HARD")) {
      topicsIndex[topic][subTopic].hard++;
    }
  }

  // Create subsheets and populate data
  for (var topic in topicsIndex) {
    var subSheet = ss.getSheetByName(topic) || ss.insertSheet(topic); // Create or get subsheet
    subSheet.clear(); // Clear existing data
    var headers = [["Sub Topic", "Easy", "Medium", "Hard"]];
    subSheet.getRange(1, 1, 1, 4).setValues(headers); // Set headers

    var row = 2;
    for (var subTopic in topicsIndex[topic]) {
      var counts = topicsIndex[topic][subTopic];
      subSheet.getRange(row, 1, 1, 4).setValues([[subTopic, counts.easy, counts.medium, counts.hard]]);
      row++;
    }
  }
}
