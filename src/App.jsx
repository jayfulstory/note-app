// import { useState } from 'react';
import './App.css';
import Sidebar from './conponents/Sidebar';
import Main from './conponents/Main';
import { useState } from 'react';
import uuid from 'react-uuid';

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: 'new note',
      content: 'content',
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  const onUpdateNote = updatedNote => {
    const updatedNotesArray = notes.map(note => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });

    setNotes(updatedNotesArray);
  };

  const onDeleteNote = id => {
    const filterNotes = notes.filter(note => note.id !== id);
    setNotes(filterNotes);
  };

  const getActiveNote = () => {
    return notes.find(note => note.id === activeNote);
  };
  return (
    <div className='App'>
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
