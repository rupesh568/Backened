require('dotenv').config()


const express=require('express');
const app=express();
// const port=3000;

const githubData={
  "login": "rupesh568",
  "id": 215236057,
  "node_id": "U_kgDODNQ92Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/215236057?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/rupesh568",
  "html_url": "https://github.com/rupesh568",
  "followers_url": "https://api.github.com/users/rupesh568/followers",
  "following_url": "https://api.github.com/users/rupesh568/following{/other_user}",
  "gists_url": "https://api.github.com/users/rupesh568/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/rupesh568/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/rupesh568/subscriptions",
  "organizations_url": "https://api.github.com/users/rupesh568/orgs",
  "repos_url": "https://api.github.com/users/rupesh568/repos",
  "events_url": "https://api.github.com/users/rupesh568/events{/privacy}",
  "received_events_url": "https://api.github.com/users/rupesh568/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Rupesh Kumar Chaudhary",
  "company": "IILM University",
  "blog": "",
  "location": "India ",
  "email": null,
  "hireable": null,
  "bio": " B.Tech CSE @ IILM University | Full Stack Developer | Passionate about MERN, C++, Java, Python & DSA | Exploring code one bug at a time 👨‍💻\r\n",
  "twitter_username": null,
  "public_repos": 21,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-06-07T03:41:25Z",
  "updated_at": "2026-06-14T03:39:22Z"
}



app.get('/',(req,res)=>{
    res.send("hello world!");
})

app.get('/home',(req,res)=>{
    res.send("I am at home");
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login in at Rupesh website</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Watch my youtube videos...</h2>')
})


app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT,()=>{
    console.log(`app is listening on ${process.env.PORT}`);
})