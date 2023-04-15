import React from "react";
import NoteContext from './NoteContext';
import { useState } from "react";
//install package of cors in backened
const NoteState=(props)=>{
    const host='http://localhost:3000/' 
   const notesinitial=[
    {
        "id":"120",
        "username":"am",
        "title":"MINe"
    },
    {
        "id":"121",
        "username":"am1",
        "title":"MINe"
    }
   ]
const [notes,setnotes]=useState(notesinitial)
const getnote=async ()=>{
    //API Call
    const response=await fetch(`${host}/api/notes/fetchallnotes`,{
    method:'GET',
    header:{
        'Content-Type':'application/json',
        'auth-token':''
      },
    });
        const json=await response.json()
        console.log(json)
        setnotes(json);
    }
//add a note
const addnote=async (title,description,tag)=>{
//API Call
const response=await fetch(`${host}/api/notes/addnote`,{
method:'POST',
header:{
    'Content-Type':'application/json',
    'auth-token':''
},
body:JSON.stringify(title,description,tag)
});
    const note= {
    "id":"121",
    "username":"am1",
    "title":"MINe",
    "description":"wtf [ADDED]",
     "tag":"tag"
}
    setnotes(notes.concat(note))
}

//delete a note
const deletenote=async (id)=>{
         const response=await fetch(`${host}/api/notes/deletenote/${id}`,{
        method:'POST',
        header:{
            'Content-Type':'application/json',
            'auth-token':''
        },
        });
        const json =response.json();
const newNotes=notes.filter((note)=>{return note._id!==id})
setnotes(newNotes)
}

//edit a note
const editnote=async (id,title,description,tag)=>{
    const response=await fetch(`${host}/api/notes/updatenote/${id}`,{
        method:'POST',
        header:{
            'Content-Type':'application/json',
            'auth-token':''
        },
        body:JSON.stringify(title,description,tag)
        });
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element._id===id)
            element.title=title;
            element.description=description;
            element.tag=tag;
        }
}
return (
    <NoteContext.Provider value={{notes,addnote,deletenote,editnote,getnote}}>
        {props.children}
    </NoteContext.Provider>
)
}
export default NoteState;
//state:state,update:update
 /*const s1={
     "name":"MINE",
     "class":"7b"
    }
    const [state, setstate] = useState(s1)
    const update=()=>
    {
        setTimeout(()=>{
            setstate({
                "name":"JSTAR",
                "class":"8b"
            })
        },1000)
    }*/