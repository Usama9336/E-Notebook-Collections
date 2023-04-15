import React from 'react'
import NoteContext from '../context/notes/NoteContext';
import { useContext } from 'react';

function NoteItem(props) {
  const context = useContext(NoteContext);
  const {deleteNote}=context;
  const {note}=props;
    return (
    <div className='card'>
        <div className="card-body">
          <div className="d-flex align-items-center">
<h5 className="card-title">{note.title}</h5>
<i className='far fa-trash-alt mx-2'onClick={()=>
{
  deleteNote(note._id)
}}>
</i>
<i className='far fa-edit mx-2'></i>
</div>
<p className="card-text">{note.description}</p>
        </div>
    </div>
  )
}

export default NoteItem