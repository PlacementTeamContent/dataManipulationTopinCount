# dataManipulationTopinCount
# code.gs
The code within code.gs is a script designed to operate on a spreadsheet. It organizes data into separate sub-sheets based on distinct subtopic names. Each sub-sheet is named after its respective subtopic. Furthermore, it categorizes or groups similar content within each sub-sheet. Additionally, the script provides a count of questions labeled as easy, medium, and hard within each subtopic.

# merge.gs
The purpose of the code in merge.gs is to generate a new spreadsheet tab named "merged" that amalgamates the data from all sub-topics sheets ending with "_MCQ". Additionally, it calculates the total counts of easy, medium, and hard questions within each topic and presents them within the merged sheet.

# delete.gs
The purpose of the delete.gs script is to remove all subsheets except for the ones whose names are specified in the sheetsToKeep array.
# Execution sequence 
The execution sequence for the AppScript would be as follows: initially, code.gs will execute, followed by merge.gs, and finally, delete.gs will run.



