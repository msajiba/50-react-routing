import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {

    const { name, username, id } = props.user;


    const navigate = useNavigate();
    const showFriendDetails = () => {
        const path =`/friend/${id}`;
        navigate(path);
    }  
    
    
     
    return (



        <div style={{border:"1px solid red"}}>
            <h1> {name} </h1>
            <button onClick={showFriendDetails}> {username} {id} </button>
        </div>
    );
};

export default Friend;