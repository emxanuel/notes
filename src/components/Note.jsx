import React from "react";

const Note = (props) => {
    return (
        <div className="note">
            <h2>{props.title}</h2>
            <p className="body">{props.body}</p>
            <p className="date">{props.date}</p>
        </div>
    )
};

export default Note;
