const express = require('express')
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');
//get all notes
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})
//add new note
router.post('/addnote', fetchuser, [
    body('title').isLength({ min: 3 }),
    body('description').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new note({
            title, description, tag, user: req.user.id
        })
        const savenote = await note.save();
        res.json(savenote);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})
//route 3 update existing note
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    try{ 
        const { title, description, tag } = req.body;
        //create a newnote
        const newNote={};
if(title){newNote.title=title};
if(description){newNote.description=description};
if(title){newNote.tag=tag};
let note=await Notes.findById({req.params.id});
//find the note to be updated
if(!note){res.status(404).send("Not Found")}
if(note.user.toString()!==req.user.id){
    return res.status(401).send("Not Allowed");
}
note= await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
res.json({note});
    }
    catch(error){
           console.log(error.message);
        res.status(500).send("Internal Server Error");      
    }
})
        /*const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }*/
        //route 4 for deleting note
        router.delete('/deletenote/:id', fetchuser, async (req, res) => {
        try{
//find the note
let note=await Notes.findById({req.params.id});
if(!note){res.status(404).send("Not Found")}
//permission to delete
if(note.user.toString()!==req.user.id){
    return res.status(401).send("Not Allowed");
}
note= await Notes.findByIdAndDelete(req.params.id,{$set:newNote},{new:true})
res.json({"Success":"Note has been deleted"});
}
catch(error){
     console.log(error.message);
        res.status(500).send("Internal Server Error");
}
})
module.exports = router;