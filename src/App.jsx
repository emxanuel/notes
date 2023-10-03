import React from "react";
import Navbar from "./components/Navbar";
import Note from "./components/Note";
import NewButton from "./components/NewButton";
import { notes } from "./data/notes";
import { useReducer } from "react";
import { reducer } from ".";

const App = () => {
    const [Notes, setNotes] = useReducer(reducer, notes)
    console.log(Notes)

    return (
        <div className="container">
            <Navbar />
            <div className="notes">
                {Notes.length > 0?Notes.map(n => (
                    <Note
                        title={n.title}
                        body={n.body}
                        date={n.date}
                        key={n.id}
                    />
                )): (
                    <div>
                        <h1>Escribe una nota</h1>
                    </div>
                )}
            </div>
            <NewButton
                setNotes={setNotes} />
        </div>
    );
};

export default App;
