import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {

       const [users, setUsers] = useState([])

       useEffect(()=> {
           fetch('https://jsonplaceholder.typicode.com/users')
           .then(res => res.json())
           .then(data => setUsers(data))
       },[]);

    return (
        <div>
            <h1> Parle kichu taka dar dis {users.length} </h1>
            <p> age biriyani khawa.... tarpore dekhmo ki kora jay. </p>

            {
                users.map(user => <Friend key={user.id} user={user}> </Friend>)
            }
        </div>
    );
};

export default Friends;