import React, { useState } from 'react';

const CreateBoardModal = (props) => {

    const [name, setName] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    return (
        <div className="board-modal-container">
            <div className="board-modal-form-container">
                <form className="board-modal-form">
                    <label htmlFor="board-name"/>Name
                    <input 
                        id="board-name"
                        type="text"
                        value={name}
                        onChange={handleNameChange}/>
                </form>
            </div>
        </div>
    )
}

export default CreateBoardModal;