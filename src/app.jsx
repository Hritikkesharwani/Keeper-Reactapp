import {React,useState} from 'react';
import Header from './component/header.js';
import Footer from './component/footer.js';
import Note from './component/note.js';

import AddNote from './component/addNote.js';
const App = () =>{

    const [Notes, setNotes] = useState([]);


    function createNote(Title,Content){
        setNotes(prevNotes =>{
            return [...prevNotes,{

                title: Title.title,
                content: Content.content
            }]
        })

    }
    function DeleteNote(Notetitle){
        setNotes(prevNotes =>{
            return prevNotes.filter((noteitem)=>{
                console.log(noteitem)
                return noteitem.title !== Notetitle
            })
        })
    }
     
    return(
    <div>
    <Header/>
    <AddNote createNote={createNote} />
    {Notes.map( (item) => {
        return  <Note title = {item.title} 
        content = {item.content}
        onDelete = {DeleteNote} />
    }

    )}
    <Footer/>
    </div>)
}
export default App;