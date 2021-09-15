import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Homepage from './HomePage';
import { Link } from 'react-router-dom';

const ListAll = (props) => {

    const [allAuthors, setAllAuthors] = useState([]);

    useEffect(() => { //technically a 'side effect'
        axios.get("http://localhost:8000/api/authors")
        .then((res) => {
            console.log(res.data);
            setAllAuthors(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [<Homepage />]); //dependency array; [Look up on this feature and its complications a little further!!!]

    const deleteAuthors = (deleteId) => {
        axios.delete('http://localhost:8000/api/authors/' + deleteId)
            .then(res => {
                const delAllAuthors = allAuthors.filter((auth) => {
                    return auth._id !== deleteId;
                })
                setAllAuthors(delAllAuthors);
            })
            .catch(err => console.error)
    }

    return (
        <div style={{textAlign: "center"}}>
            {allAuthors.map((authors, index) => 
                <ul style={{textAlign: "center"}}>
                    <a href= {`/authors/${authors._id}`}>{authors.name}</a>
                    <button style={{marginLeft: "8px"}} onClick={(e) =>{deleteAuthors(authors._id)}}>Delete</button>
                    <Link style={{marginLeft: "5px"}} to={`/edit/${authors._id}`}>Edit</Link>
                </ul>
            )}
        </div>
    )
};

export default ListAll;