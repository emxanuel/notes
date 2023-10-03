import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { notes } from "../data/notes"

const Input = (props) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    function addNote() {
        const newNote = {
            id: notes.length + 1,
            title: title,
            body: body,
            date: new Date().toLocaleString()
        }
        props.setNotes({
            type: 'add',
            payload: newNote
        })
        setTitle('')
        setBody('')
    }

    return (
        <div id="input" className="input hidden notShow">
            <div>
                <input placeholder="titulo" type="text" name="" id="" value={title} onChange={e => setTitle(e.target.value)} />
                <textarea placeholder="nota" name="" id="" value={body} onChange={e => setBody(e.target.value)} />
            </div>
            <button onClick={addNote}>
                <FontAwesomeIcon icon={faCheck} />
            </button>
        </div>
    )
}

export default Input
