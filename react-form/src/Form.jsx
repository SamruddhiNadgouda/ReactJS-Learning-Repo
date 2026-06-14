import { useState } from "react";

export default function Form(){
    // let [fullName, setFullName] = useState("");
    // let [username, setUsername] = useState("");

    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
    });

    // let handleNameChange = (event) =>{
    //     setFullName(event.target.value);
    // };

    // let handleUsername = (event) =>{
    //     setUsername(event.target.value);
    // };

    let handleInputChange = () =>{
        let fieldName = event.target.name;
        let newValue = event.target.value;
        setFormData( (currData) =>{
            return{ ...currData, 
                [fieldName]: newValue
            };
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: "",
        });
    };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full name: </label>
            <input 
                placeholder="Enter a full name" 
                type="text" 
                value={formData.fullName} 
                onChange={handleInputChange} 
                id="fullname"
                name="fullName"
            />
            <br></br>
            <label htmlFor="username">Username: </label>
            <input 
                placeholder="Enter a username" 
                type="text" 
                value={formData.username} 
                onChange={handleInputChange} 
                id="username"
                name="username"
            />
            <br></br>
            <label htmlFor="password">Password: </label>
            <input 
                placeholder="Enter a password" 
                type="password" 
                value={formData.password} 
                onChange={handleInputChange} 
                id="password"
                name="password"
            />
            <br></br>
            <br></br>
            <button>Submit</button>
        </form>
    );
}