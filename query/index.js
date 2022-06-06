const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());
const posts = {};
app.get('/posts', (req,res)=>{
    res.send(posts);
})
app.post('/events', (req,res)=>{
    const {type, data} = req.body;
    if(type === 'PostCreated'){
        const {title, id} = data;
        posts[id] = {
            id, title, comments:[]
        }
    }
    if(type === 'CommentCreated'){
        const {content, postId, id} = data;
        const comments = posts[postId].comments;
        comments.push({
            id, content
        });
    }   
    res.send({});
})

app.listen(4002,()=>{
    console.log('listening on 4002');
})