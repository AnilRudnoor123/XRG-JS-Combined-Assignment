// Structure of the Note:
// {id: 1, title: 'Note 1', body: 'This is note 1', author: 'John Doe'}

// const note1 = { id: 1, title: 'Note 1', body: 'This is note 1', author: 'illesh' }

// const notes1 = []
// seen = {}
// // Create Notes
// const createNote = (note) => {
//     var uniq = note.id + (new Date()).getTime();
//     console.log("QQ",uniq)
//     return
// //    console.log(notes.length==0)
//     notes.push(note)
// if(notes.length>0){
//   for(let authname of notes){
//     if(authname.author!=note.author){
//         if (!seen[item.author]) {
//             console.log(notes.push(item))
//         }
//         seen[item.userName] = true;
//     }
// }
//   }

//         return notes
//     }
//    console.log(createNote(note))

const addNoteObj = {
  id: 1,
  title: 'Note 1',
  body: 'This is note 1',
  author: 'illesh',
};

const notes = [];

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
