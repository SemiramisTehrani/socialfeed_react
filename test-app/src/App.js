//import React from 'react';
import CreatePost from './components/createPost';
import React, { useState } from 'react';




function App() {
  
  const [posts, setPosts] = useState([])
  
  return (
    <div>
      <h3>SocialFeed</h3>
      <CreatePost />
    </div>
  );
}

export default App;
