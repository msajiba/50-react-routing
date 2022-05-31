import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {

     const {postId} =  useParams();

    const [post,setPost] = useState({});

    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));

    },[postId]);

    console.log(post)


    return (
        <div>
            <h1> post details {postId} </h1>
            <h3> <small> {post.title} </small> </h3>
            <h3> <small> {post.body} </small> </h3>
        </div>
    );
};

export default PostDetail;