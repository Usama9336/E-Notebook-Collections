import React,{useContext,useState} from 'react'
import NoteContext from '../context/notes/NoteContext';
export default function Addnote() {
    const context=useContext(NoteContext);
  const {addnote}=context;
  const [note, setnote] = useState({title:"",description:"",tag:"default"})
  const handleclick=(e)=>{
    e.preventDefault();
      addnote(note.title,note.description,note.tag)
  }
  const onchange=(e)=>{
      setnote({...note,[e.target.name]:e.target.value})
  }
  return (
    <>
    <div>
         <div className='container'>
<h1>Title</h1>
<div className="mb-3">
  <label htmlFor="title" className="form-label">title</label>
  <input type="text" onChange={onchange} className="form-control" id="title" name='title'/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control"  id="exampleFormControlTextarea1"onChange={onchange} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" >Convert to Uppercase</button>
<button className="btn btn-primary mx-1" >Convert to LowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleclick} >Clear Text</button>  
    </div>
    <div className="container my-3"  >
      <h1>Your Text Summary</h1>
    </div>
    </div>
    </>
  )
}
