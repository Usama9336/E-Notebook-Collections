import React from 'react'
import NoteContext from '../context/notes/NoteContext';
import { useContext ,useEffect} from 'react';
import NoteItem from './NoteItem';
import Addnote from './Addnote';
export default function Notes() {
  const context=useContext(NoteContext);
  const {notes,getnote}=context;
  useEffect(() => {
    getnote();
  }, [])
  return (
    <>
    <Addnote/>
    <div className="container">
    <div className='row my-3'>
        {notes.map((note)=>{
        return <NoteItem note={note}/>;
      })}
    </div>
    </div>
    </>
  )
}
