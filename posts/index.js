const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors())

const posts = {};

app.get('/', (req,res)=>{
    res.send(posts)
});

app.post('/posts', async(req,res)=>{
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id, title
    };
    await axios.post("https://khanmoon-minimicro-54q656vvfp65v-4005.githubpreview.dev/events",{
        type:"PostCreated",
        data:{
            id,title
        }
    })
    res.status(201).send(posts[id]);
});

app.post('/events', (req,res)=>{
    res.send({status:"ok"});
})

app.listen(4000,()=>{
    console.log('server is running on port 4000');
})