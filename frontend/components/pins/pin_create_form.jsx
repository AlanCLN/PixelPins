import React, { useState } from 'react';

const PinCreateForm = (props) => {

    const [state, setState] = useState({
        title: '',
        description: ''
    })

    return (
        <div className="pin-form-content">
            <div>Pin Form</div>
        </div>
    )
}

export default PinCreateForm;