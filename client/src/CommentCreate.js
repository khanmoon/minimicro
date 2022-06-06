import axios from "axios";
import React,{useState} from "react";

export default ({postId})=>{
    const [content, setContent] = useState("");
    const onSubmit = async(event)=>{
        event.preventDefault();
        await axios.post(`https://khanmoon-minimicro-54q656vvfp65v-4001.githubpreview.dev/posts/${postId}/comments`, {content});
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>New Comment</label>
                    <input value={content} onChange={e=>setContent(e.target.value)} className="form-control" type="text" placeholder="Comment"/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};