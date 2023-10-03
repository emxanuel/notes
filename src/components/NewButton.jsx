import React from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from './Input'
import { toggleShowElements } from '..'

const NewButton = (props) => {
    return (
        <div className='new-button-container'>
            <div>
                <Input setNotes = {props.setNotes}/>
            </div>
            <div className='new-button'>
                <p>Añadir nueva nota</p>
                <button onClick={() => {
                    const input = document.getElementById('input')
                    toggleShowElements(input)
                }}>
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </button>
            </div>
        </div>


    )
}

export default NewButton