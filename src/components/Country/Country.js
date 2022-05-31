import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name} = props.country;

    return (
        <div>
           
           <h2> <Link to={`/countries/${name.common}`}> {name.common} </Link> </h2>
          
        </div>
    );
};

export default Country;