import React from 'react';
import {Link} from "react-router-dom";

const NotFound:React.FC = () => {
    return (
        <React.Fragment>
            <h1>Not Found Page</h1>
            <Link to={'/'}>Go to Home</Link>
        </React.Fragment>
    );
}

export default NotFound;