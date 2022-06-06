const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const { default: axios } = require('axios');
const app = express();
app.use(bodyParser.json());
app.use(cors())
const commentsByPostId = {};

app.get('/posts/:id/comments', (req,res)=>{
    res.send(commentsByPostId[req.params.id] || []);
});
app.post('/posts/:id/comments', async(req,res)=>{
    const cid = randomBytes(4).toString('hex');
    const { content } = req.body;
    const pid = req.params.id;
    const comments = commentsByPostId[pid] || [];
    comments.push({
        id:cid, content
    });
    commentsByPostId[pid] = comments;
    await axios.post("https://khanmoon-minimicro-54q656vvfp65v-4005.githubpreview.dev/events",{
        type:"CommentCreated",
        data:{
            id:cid,content,postId:pid
        }
    });
    res.status(201).send(comments);
});
app.post('/events', (req,res)=>{
    res.send({status:"ok"});
})
app.listen(4001,()=>{
    console.log('server is running on port 4001');
});