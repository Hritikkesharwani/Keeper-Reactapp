import {React,useState}  from 'react';
import './addNote.css';

export default function AddNote(props) {
      
      let [Notetitle, setTitle] = useState("");
      let [Notecontent, setContent] = useState("");
       function thandlechange(event){
           const ctitle = event.target.value;
           
          setTitle(NewTitle =>{
              return {...NewTitle,
                  title : ctitle,
              
            }
          })
      }
      function chandlechange(event){
           const ccontent = event.target.value;
           setContent(NewContent=>{
               return { ...NewContent,
                   content : ccontent,
               }
           })
      }
      
      

function submitbutton(event){
     
     props.createNote(Notetitle,Notecontent);
    setTitle({
        title : ""
    });
    setContent({
        content: ""
    });
  event.preventDefault();
}


      
  return <div>
      <div className="addnote">
          <form>
<input className="title" Type="text" value={Notetitle.title} onChange={thandlechange} placeholder="Enter title here"></input>
<textarea className="content" Type="text" value={Notecontent.content} onChange= {chandlechange}placeholder="Enter content here"></textarea>
<button onClick={submitbutton}>Add </button>
</form>
</div>
  </div>;
}
