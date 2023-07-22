// import { useState } from 'react';
import './App.css';
import Sidebar from './conponents/Sidebar';
import Main from './conponents/Main';
import { useState } from 'react';
import uuid from 'react-uuid';

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: 'new note',
      content: 'content',
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  return (
    <div className='App'>
      <Sidebar onAddNote={onAddNote} notes={notes} />
      <Main />
    </div>
  );
}

export default App;
