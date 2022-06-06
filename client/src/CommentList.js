import React, {useState, useEffect} from "react";
import axios from "axios";

export default ({postId})=>{
    const [comments,setComments] = useState([]);
    const fetchData = async()=>{
        const res = await axios.get(`https://khanmoon-minimicro-54q656vvfp65v-4001.githubpreview.dev/posts/${postId}/comments`);
        setComments(res.data);
    }
    useEffect(()=>{
        fetchData();
    },[]);
    const renderedComments = comments.map(comment=>{
        return (
            <li key={comment.id}>{comment.content}</li>
        );
    })
    return (
        <ul>{renderedComments}</ul>
    );
}