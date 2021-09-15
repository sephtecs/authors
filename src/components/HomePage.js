import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Homepage = () => {
    
    return (

        <div style={{textAlign: "center", marginTop: "20px"}}>
            <h1>Favorite Authors</h1>
            <Link to={`/authors/new`}>Add Authors</Link>
            <h3>We have quotes by:</h3>
        </div>
    )
}

export default Homepage;