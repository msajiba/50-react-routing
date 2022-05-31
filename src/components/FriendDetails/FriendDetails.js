import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {

        const {friendId} =  useParams();
        const [friend, setFriend] = useState({});

        useEffect(()=> {

            const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
            fetch(url)
            .then(res=> res.json())
            .then(data => setFriend(data));
        },[]);

    return (
        <div>
            <h4> This is friend Details page {friendId}  ..... </h4>
            <h2> <small>{friend.name}</small> </h2>
            <h3> <small> {friend.username} </small> </h3>
            <h3> <small> {friend.name} </small> </h3>
            <h4> <small> {friend.address?.city} </small> </h4>

        </div>
    );
};

export default FriendDetails;