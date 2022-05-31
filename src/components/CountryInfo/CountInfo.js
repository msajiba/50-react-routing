import React from 'react';

const CountInfo = (props) => {

    const {country} = props;
    
    return (
        <div style={{backgroundColor:"red"}}>
            <h1> Welcome to {country.name.common} </h1>
        </div>
    );
};

export default CountInfo;