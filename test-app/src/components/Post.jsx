import React from "react";
import Buttons from "./Buttons";
import './Post.css';
import { DateTime } from "./Date";

const Post=(props) =>{
    return (
        <div>
            <p id='name'>{props.name}</p>
            <DateTime />
            <p id='message'>{props.name}</p>
            <Buttons/>
            <hr/>
        </div>
    );
}

export default Post;