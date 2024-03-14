import React, { useState } from 'react';

// Forms

function Form() {
    // State Tanımlama
    const [name, setName] = useState('');
    const [names, setNames] = useState([]);

    // State Fonksiyonu
    const updateName = (e) => {
        setName(e.target.value);
    };

    const addNames = (e) => {
        e.preventDefault();
        setNames([...names, name]);
        setName('');
    };

    return (
        <div>
            <h1>useState Form</h1>
            <div>
                <form onSubmit={addNames}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={updateName}
                    />
                    <button type="submit">Submit</button>
                </form>
                <div>
                    <ol>
                        {names.map((name, index) => (
                            <li key={index}>
                                <strong>User: {index + 1}:</strong> {name}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Form;