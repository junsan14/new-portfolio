import axios from 'axios';
import React, { useState, useEffect } from 'react'


function Instagram(){

  const [posted,setPosted] = useState("");
  useEffect(()=>{
    const user_name = "junsan_junsan14" //ビジネスorクリエイターアカウントの必要あり
    const access_token = "EAAHrP1rzyugBAABT2Ny7I9gFyTSZAaZB7ZCaaq7el3BbasjhoQA7hegqxg9ZB2DfiW1QV6oYuks1Loekf19bSiRcfnmjr4i3a0PelWZANUlvrHS5Tj9V7KOwlmQTaI39NkSQINzTLtOP4XdfEZCDbmMvd03l44h5vg84z1hURKMH7oGmTVqiox"
    const user_id = "17841458465607828"
    const get_count = 5 //取得したい投稿数
    const url = `https://graph.facebook.com/v12.0/${user_id}?fields=business_discovery.username(${user_name}){id,followers_count,media_count,ig_id,media.limit(${get_count}){caption,media_url,like_count}}&access_token=${access_token}`;
    axios
      .get(
        `https://graph.facebook.com/v12.0/${user_id}?fields=business_discovery.username(${user_name}){id,followers_count,media_count,ig_id,media.limit(${get_count}){caption,media_url,like_count}}&access_token=${access_token}`
      )
      .then((res) => {
        setPosted(res.data)
      });
  }, [])
    //console.log(posted.business_discovery.media)
    const Render = ()=>{
      if(posted){

        let posts =posted.business_discovery.media.data;

        return(
          <React.Fragment>
            {posts.map((post,i) => {
              return(
                <div className='post' key={i}>
                  <img src={post.media_url}/>
                </div>    
              )          
            })}           
          </React.Fragment>
        )
      }

    }
   



return(
  <Render />
)



    
}






export default Instagram;



