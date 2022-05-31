import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import { Route, Routes } from 'react-router-dom';
import NotFounds from './components/NotFounds/NotFounds';
import Friends from './components/Friends/Friends';
import Navbar from './components/Navbar/Navbar';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetail/PostDetail';
import Countries from './components/Countries/Countries';
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {
  return (
    <div className="App">

        <Navbar> </Navbar>

        <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/blog' element={<Blog />}> </Route>
            <Route path='/about' element={<About />}> </Route>
            <Route path='/friends' element={<Friends />}> </Route>
            <Route path='/friend/:friendId' element={<FriendDetails />} > </Route>

            <Route path='/post' element={<Posts />}> 
                  <Route path=':postId' element={<PostDetail />} > </Route>
            </Route>

            <Route path='/countries' element={<Countries />}>
                  <Route path=':countryName' element={<CountryDetail />} > </Route>  
            </Route>

            <Route path='*' element={<NotFounds />}> </Route>
        </Routes>
    </div>
  );
}

export default App;
