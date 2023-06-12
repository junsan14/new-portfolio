import axios from 'axios';
import React, { useState, useEffect } from 'react'
import heart from '../../images/heart.png';
import leftArrow from '../../images/left_arrow.png';
import rightArrow from '../../images/right_arrow.png';
import $ from "jquery";



function Instagram(){
  $(function(){
    let $imageModal = $(".js-image-modal");
    $(".post").on("click", function(){
      let $url = $(this).data("url");
      let $index = $(this).data("index");
      $imageModal.addClass("show");
      $imageModal.children(".js-modal-pic").attr("src", $url);     
      $(".js-modal-pic").on("click",function(){  
        console.log($(this).prev())
      })   
    })

    $(".js-close-image-modal-btn, .js-image-modal").on("click", ()=>{
      $(".js-close-image-modal-btn").parent().removeClass("show");
      $imageModal.children(".js-modal-pic").attr("src", "")
    })

   
  })
  const [posted,setPosted] = useState("");

  useEffect(()=>{
    const user_name = "junsan_junsan14" //ビジネスorクリエイターアカウントの必要あり
    const access_token = process.env.REACT_APP_Instagram_access_token_KEY;
    const user_id = process.env.REACT_APP_Instagram_user_id_KEY;
    //console.log(user_id)
    const get_count = 8 //取得したい投稿数
    //const url = `https://graph.facebook.com/v12.0/${user_id}?fields=business_discovery.username(${user_name}){id,followers_count,media_count,ig_id,media.limit(${get_count}){caption,media_url,like_count}}&access_token=${access_token}`;
    axios
      .get(
        `https://graph.facebook.com/v16.0/${user_id}?fields=business_discovery.username(${user_name}){id,followers_count,media_count,ig_id,media.limit(${get_count}){caption,media_url,like_count}}&access_token=${access_token}`
      )
      .then((res) => {
        setPosted(res.data)
      });
  }, [])

    const Render = ()=>{
      if(posted){

        let posts =posted.business_discovery.media.data;
        console.log(posts)
        return(

          <>
                <div className="image_modal js-image-modal">
                  <span className='js-left-arrow left-arrow'></span>
                  <button className="js-close-image-modal-btn">✕</button>
                  <img className="js-modal-pic modal-pic" src="" alt="" />
                  <span className='js-right-arrow right-arrow'></span>
                </div>
            {posts.map((post,i,ary) => {
            
              return(
                
                <div className='post js-show-modal' id="grid" data-url={post.media_url} data-index={i} key={i}>
                    <input type='hidden' value={post.media_url} className='image_url'/>
                    <img src={post.media_url} alt="" className="post_image" />
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

function TwitterGet(){

  return(
    <div>
      <p>Twitter API停止中のため準備中です｡</p>
    </div>
  )
}






export　{Instagram,TwitterGet};



