var app = Application.currentApplication();
app.includeStandardAdditions = true;
var notesApp = Application('Notes');
notesApp.includeStandardAdditions = true;

var notes = notesApp.notes;
var whichNotes = app.chooseFromList(notes.name(), { withPrompt: "Which note?", multipleSelectionsAllowed : true});

if (whichNotes){
	
	var saveWhere = app.chooseFolder().toString();
	
	if (saveWhere) {
			
			for (var i=0; i<notes.length; i++){
						
						if (whichNotes.indexOf(notes[i].name()) > -1){
									
									var filename = saveWhere+"/"+notes[i].name()+".html";
									var file = app.openForAccess(Path(filename), { writePermission : true});
									app.setEof(file, {to: file});
									app.write(notes[i].body(), {to: file});
									app.closeAccess(file);
						}
			}
	}
}