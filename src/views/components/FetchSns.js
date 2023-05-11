import axios from 'axios';
import React, { useState, useEffect } from 'react'

import heart from '../../images/heart.png';
import { Client } from "twitter-api-sdk";

const client = new Client(process.env.REACT_APP_Twitter_BEARER_TOKEN);

async function main() {
  const stream = client.tweets.sampleStream({
    "tweet.fields": ["author_id"],
  });
  for await (const tweet of stream) {
    console.log(tweet.data?.author_id);
  }
}

main();


function Instagram(){

  const [posted,setPosted] = useState("");
  useEffect(()=>{
    const user_name = "junsan_junsan14" //ビジネスorクリエイターアカウントの必要あり
    const access_token = process.env.REACT_APP_Instagram_access_token_KEY;
    const user_id = process.env.REACT_APP_Instagram_user_id_KEY;
    //console.log(user_id)
    const get_count = 5 //取得したい投稿数
    //const url = `https://graph.facebook.com/v12.0/${user_id}?fields=business_discovery.username(${user_name}){id,followers_count,media_count,ig_id,media.limit(${get_count}){caption,media_url,like_count}}&access_token=${access_token}`;
    axios
      .get(
        `https://graph.facebook.com/v12.0/${user_id}?fields=business_discovery.username(${user_name}){id,followers_count,media_count,ig_id,media.limit(${get_count}){caption,media_url,like_count}}&access_token=${access_token}`
      )
      .then((res) => {
        setPosted(res.data)
      });
  }, [])
    
    const Render = ()=>{
      if(posted){

        let posts =posted.business_discovery.media.data;
       
        return(
          <>
            {posts.map((post,i,ary) => {
              //console.log(test)
              return(
                <div className='post' key={i}>
                  <a href="https://www.instagram.com/junsan_junsan14/" target='_black' rel="noopener noreferrer">
                    <img src={post.media_url} alt="" className="post_image" />
                    <div className="post_desc">
                      <img src={heart} alt="" className="post_desc_heart" />
                      <span className="post_desc_caption">{post.caption}</span>
                      <span className="post_desc_like-count">{post.like_count}</span>
                    </div>
                  </a>
                </div>    
              )          
            })}           
          </>
        )
      }

    }
   

return(
  <Render />
)
 
}

function TwitterGet(){
  
  return(
    <div>
      <p>Twitter API停止中のため準備中です｡</p>
    </div>
  )
}






export　{Instagram,TwitterGet};



