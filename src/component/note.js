
import './note.css';


const Note =(props) =>{

const handleclick = () =>{
    props.onDelete(props.title);
}

return (<div className="note">
<h1>{props.title}</h1>
<p>{props.content}</p>
<button onClick={handleclick}>Delete</button>
</div>)
}
export default Note;