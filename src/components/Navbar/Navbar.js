import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <div>
             <ul>
                 <CustomLink to="/">Home</CustomLink>
                 <CustomLink to="/blog"> Blog</CustomLink>
                 <CustomLink to="/about">About</CustomLink>
                 <CustomLink to="/friends">Friends</CustomLink>
                 <CustomLink to="/post"> Post </CustomLink>
                 <CustomLink to="/countries"> Countries </CustomLink>
             </ul>
        </div>
    );
};

export default Navbar;