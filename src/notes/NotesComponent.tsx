import { useState, FormEvent } from 'react';
import './notes.css'

interface ChildProps {
    sendDataToParent: (data: NotesFormData) => void; // Callback function type
}

export default function NotesComponent() {
    const [notes, setNotes] = useState<Note[]>([]);

    const sendDataToParent = (data:{title:string, description:string}) => {
        setNotes([
            ...notes,
            {id: notes.length+1,
                    title: data.title,
                    description: data.description}])
    }
    return (
        <div>
            <AddNote sendDataToParent={sendDataToParent}/>
            <div className="notes">
                {notes.map((note) => {
                    return <Note key={note.id.toString()} note={note} />
                })}
            </div>
        </div>
        
    )
 }

const Note = (params:any) => {
    const note:Note= params.note;
    return (
        <div className='note'>
            <h3> notes/ {note.id.toString()}</h3>
            <h2>{note.title}</h2>
            <h5>{note.description}</h5>
        </div>
    )
 }

function AddNote(props:ChildProps) {
    const sendDataToParent = props.sendDataToParent;
    const [notesFormData, setNotesFormData] = useState<NotesFormData>({
        title: '',
        description: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLFormElement | HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = event.target;
        setNotesFormData({
            ...notesFormData,
            [name]: value
        })
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        sendDataToParent(notesFormData);

        setNotesFormData({
            title: '',
            description: '',
        });
    }

    return (
        <div className='create-note-form-div'>
            <form onSubmit={handleSubmit} className='create-note-form'>
                <h3>Title</h3>
                <input
                    type="text"
                    name="title"
                    value={notesFormData.title}
                    onChange={handleInputChange} required/>
                <h3>Description</h3>
                <input
                    type="text"
                    name="description"
                    value={notesFormData.description}
                    onChange={handleInputChange} required/>
                <br />
                <button type="submit">Create Note</button>
            </form>
        </div>
    )
}