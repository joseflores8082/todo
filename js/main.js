(function() {
  const el = document.getElementById('wrapper');
  const notePad = el.querySelector('#notePadTitle');
  const addNote = el.querySelector('#addNote');
  const newNoteTitle = el.querySelector('#newNoteTitle');
  const newNoteText = el.querySelector('#newNoteText');
  const newNoteWrap = el.querySelector('#newNoteWrap');
  let newNote = {};


  addNote.addEventListener('click', (e) => {
    e.preventDefault();

    newNote = {
      ...newNote,
      newNoteTitle: newNoteTitle.value,
      newNoteText: newNoteText.value
    };

    createNewNote(newNote);
    resetAddNewNote()
  });

  function createNewNote(note) {
    let noteMarkUp = `
      <div class="row">
        <div class="col-md-6">
          <div class="note">
            <input class="form-control form-elements" value="${note.newNoteTitle}" />
            <textarea class="form-control form-elements">${note.newNoteText}</textarea>
          </div>
        </div>
      </div>
    `;

    newNoteWrap.insertAdjacentHTML('beforeend', noteMarkUp);
  }

  function resetAddNewNote() {
    newNoteTitle.value = '';
    newNoteText.value = '';
  }

})();
