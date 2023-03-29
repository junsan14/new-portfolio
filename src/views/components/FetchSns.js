import axios from 'axios';
import React, { useState, useEffect } from 'react'
import $ from 'jquery';

function Instagram(){


  $(function(){
    let $wrapper = $(".instagram_wrapper");
    let i = 1;
    const scroll = ()=>{
      let wrapperX = $wrapper.offset().left;
      $wrapper.css("right", i);
      i= i+5;
      console.log(i)
    }

     
      

    
  })
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
            {posts.map((post,i) => {
              console.log(posts)
              return(
                <div className='post' key={i}>
                  <a href={post.permalink}>
                    <img src={post.media_url} alt=""/>
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






export default Instagram;



