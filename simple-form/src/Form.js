import React, {useState} from 'react'

const Form = () => {

    const [formData, setFormData] = useState({fullName:'',mail:''});

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormData(prevFormData => ({
            ...prevFormData, [name]:value
        }) );
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:',formData);
    }

    return(
        <div>
            <h3>Please fill the form given below :</h3>
            <form onSubmit={handleSubmit}>
                <label>Full Name:</label>
                <input id='fullName' name='fullName' value={formData.fullName} onChange={handleChange} required/>
                <label>Mail:</label>
                <input id='mail' name='mail' value={formData.mail} onChange={handleChange} required/>
                <button type='submit'>Submit</button>
            </form>
        </div>

    );
}

export default Form;