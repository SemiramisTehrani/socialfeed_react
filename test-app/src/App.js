import React, { useState } from 'react';
import DisplayPosts from './components/DisplayPosts';
import CreatePost from './components/CreatePost';



function App() {

  const [posts, setPosts] = useState([{name: "Semiramis", userPost: "Welcome!"}, {name: "Arash", userPost: "You are the best wife and mother."}])

  function addNewPost(post){
    let tempEntries = [post, ...posts];
    setPosts(tempEntries);


  }
  return (
    <div>
      <CreatePost AddNewPostProperty={addNewPost}/>
      <DisplayPosts parentEntries={posts}/>
      

    </div>
  );
}

export default App;