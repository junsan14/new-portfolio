import axios from 'axios';
import React, { useState, useEffect } from 'react'
import heart from '../../images/heart.png';
import { ModalShow } from '../../app';

function Instagram(){  
 
  const [posted, setPosted] = useState("");
  useEffect(()=>{
    const user_name = "junsan_junsan14" //ビジネスorクリエイターアカウントの必要あり
    const access_token = process.env.REACT_APP_Instagram_access_token_KEY;
    const user_id = process.env.REACT_APP_Instagram_user_id_KEY;
    const get_count = 8 //取得したい投稿数
    axios
      .get(
        `https://graph.facebook.com/v16.0/${user_id}?fields=business_discovery.username(${user_name}){id,followers_count,media_count,ig_id,media.limit(${get_count}){caption,media_url,like_count}}&access_token=${access_token}`
      )
      .then((res) => {
        setPosted(res.data);   
      });
  }, [])

    const Render = ()=>{
      if(posted){
        let posts =posted.business_discovery.media.data; 
        ModalShow(posts,"instagram");
        return(
          <>
            <div className="image_modal js-image-modal">
              <span className='js-left-arrow left-arrow'></span>
              <button className="js-close-image-modal-btn">✕</button>
              <img className="js-modal-pic modal-pic" src="" alt="" />
              <span className='js-right-arrow right-arrow'></span>
            </div>
            {posts.map((post,i,ary) => {
              //console.log(posts[0].media_url)
              return(
                <div className='post js-show-modal' id="grid" data-posts={posts} data-url={post.media_url} data-index={i} key={i}>
                    <img src={post.media_url} alt="" className="post_image" data-url={post.media_url} data-index={i}/>
                    <div className="post_desc">
                      <img src={heart} alt="" className="post_desc_heart" />
                      <span className="post_desc_caption">{post.caption}</span>
                      <span className="post_desc_like-count">{post.like_count}</span>
                    </div>              
                </div>    
              )          
            })}           
          </>
        )
      }

    }
   

return (
  <Render />
);
 
}

export　{Instagram};



