import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';

const NewAuthor = () => {
    const [author, setAuthor] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors' , {
            name: author,
        })
        .then((res) => {
            console.log(res.data);
            setAuthor("");
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={`/`}>Home</Link>
            <h3>Add a new Author:</h3>

            <form onSubmit= {submitHandler}>
                <div>
                    <label>Name: </label>
                    <input type="text"
                        name="name"
                        value={author}
                        onChange={ (e) => setAuthor(e.target.value)}
                    />
                    <button style={{marginLeft: "5px"}} type="submit">Create</button>
                </div>
        </form>
    </div>
)};

export default NewAuthor;

// When hitting the create button, how to redirect the onClick event to the HomePage?