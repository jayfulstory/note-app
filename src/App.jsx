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

  const onDeleteNote = id => {
    const filterNotes = notes.filter(note => note.id !== id);
    setNotes(filterNotes);
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
      <Main />
    </div>
  );
}

export default App;
