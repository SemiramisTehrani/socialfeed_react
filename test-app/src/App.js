import React, { useState } from 'react';
import DisplayPosts from './components/DisplayPost';
import CreatePost from './components/CreatePost';
import NavBar from './components/NavBar';
import "./components/DisplayPost";
import "./components/CreatePost";
import './Index.css';



function App() {

  const [posts, setPosts] = useState([
    {name: "Semiramis", userPost: "Welcome!"},
  ])

  function addNewPost(post) {
    let tempPost = [...posts, post];
    setPosts(tempPost);
  }


return (
  <div className='container-fluid'> 
  <NavBar className='navbar'/>
  <div className='borders'>
    <CreatePost addNewPost={addNewPost}/>
    <DisplayPosts displayPosts={posts}/>
  
    </div>
  </div>
  );
}

export default App;
