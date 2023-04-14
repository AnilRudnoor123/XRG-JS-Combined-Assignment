const addNoteObj = {
  id: 1,
  title: 'Note 1',
  body: 'This is note 1',
  author: 'illesh',
};

const notesArray = [];
const toCreateNotes = (noteObj) => {
  const hasSeen = {};

  for (const notesValues of notesArray) {
    hasSeen[notesValues.title] = true;
  }

  if (!hasSeen[noteObj.title]) {
    noteObj.id = new Date().valueOf();

    notesArray.push(noteObj);
  }

  return notesArray;
};

console.log(toCreateNotes(addNoteObj));
//Read Notes

// Update Notes

// Delete Notes
