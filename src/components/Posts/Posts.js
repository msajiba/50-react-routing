import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {

    const [posts, setPosts] =useState([]);

    useEffect( () => {
        fetch ('https://jsonplaceholder.typicode.com/posts')
        .then (res => res.json())
        .then (data => setPosts(data))
    },[]);

    return (
        <div>
            <h1> this is posts page :{posts.length} </h1>

            {

                    posts.map(p => <Link key={p.id} to={`/post/${p.id}`}> {p.id} </Link>) 
               
            }


             <Outlet> </Outlet>

        </div>
    );
};

export default Posts;