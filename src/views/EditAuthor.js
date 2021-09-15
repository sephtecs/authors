import React, { useState, useEffect } from 'react';
import { navigate, Redirect } from '@reach/router';
import axios from 'axios';
import {Link, useHistory, useParams} from 'react-router-dom';

const EditAuthor = () => {
    const { id } = useParams();
    const history = useHistory();
    const [auth, setAuth] = useState(null);

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((response) => {
            console.log(response)
            setAuth(response.data)})
        .catch((err) => console.log(err)) // could add ternary operator or some conditional for a validation check i.e. redirect user to a picture if value of url doesn't exist
    },[id])

    const handleOnChange = (e) => {
        const keyBeingUpdated = e.target.name;
        const newValue = e.target.value;
        console.log(keyBeingUpdated); //seeing if the name of our key value pairs is correctly matched to our database

        setAuth({... auth, [keyBeingUpdated]: newValue});
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${auth._id}/edit`, auth)
        .then((res) => {
            console.log(res.data);
            history.push(`/equipment/${res.data._id}`)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    if (auth === null) {
        return "Loading..."
    }

    return (
    <form onSubmit= {(e) => {handleEditSubmit(e)}}>
        <div>
            <h1>Favorite Authors</h1>
            <Link to={`/`}>Home</Link>
            <h3>Edit this Author:</h3>

            <label>Name: </label>
            <input type="text"
                style={{marginBottom: "5px"}}
                name="name"
                value={auth.name}
                onChange={ (e) => handleOnChange(e)}
            />
            <button style={{marginLeft: "5px"}} type="submit">Update</button>
        </div>
    </form>

)};

export default EditAuthor;

// Updating Information when the update button is clicked
// Why is it going to a blank page?