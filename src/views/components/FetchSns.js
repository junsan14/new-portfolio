import axios from 'axios';
import React, { useState, useEffect } from 'react'
import heart from '../../images/heart.png';
import $ from "jquery";


function Instagram(){  
  $(function(){
    let index = 0;
    let posts;
    let $imageModal = $(".js-image-modal");
  
    $(".post").on("click", function(){
      
      let $url = $(this).data("url");
      let $index = $(this).data("index");
      $imageModal.addClass("show");
      $imageModal.children(".js-modal-pic").attr("src", $url);     
      index = $(this).data("index")
      posts = posted;  
      posts = posts.business_discovery.media.data? posts.business_discovery.media.data: "";
      $("body").addClass("noscroll");

      //モバイルスワイプ処理
      const minimumDistance = 30
      let startX = 0
      let startY = 0
      let endX = 0
      let endY = 0
      let isTouch = false;
      $(".js-modal-pic").on("touchstart", function(e){
        
        startX = e.touches[0].pageX
        startY = e.touches[0].pageY
        isTouch = true;
      })
      $(".js-modal-pic").on("touchmove", function(e){
        
        endX = e.changedTouches[0].pageX
        endY = e.changedTouches[0].pageY
      })
      $(".js-modal-pic").on('touchend', function(e){
       
        if(isTouch){
          const distanceX = Math.abs(endX - startX)
          // 左右のスワイプ距離の方が上下より長い && 小さなスワイプは検知しないようにする
          if (endX > startX && distanceX > minimumDistance) {
            // スワイプ後の動作
            //console.log('右');
            if(index === 0){
              index = posts.length-1;
            }else{
              index = index - 1;
            }
            isTouch = false;
          }else if(endX < startX && distanceX > minimumDistance){
            //console.log('左');
            if(index === posts.length-1){
              index = 0;
            }else{
              index = index + 1;
            }
            isTouch = false;
          }
          $imageModal.children(".js-modal-pic").attr("src", posts[index].media_url); 
        }

 
      })
      //モバイルスワイプ処理終了

      //スライダークローズ処理
      $(".js-close-image-modal-btn, .js-image-modal").on("click", function(e){ 
        if($(e.target).hasClass("js-left-arrow")){
          if(index === 0){
            index = posts.length-1;
          }else{
            index = index - 1;
          }
          $imageModal.children(".js-modal-pic").attr("src", posts[index].media_url); 
        }else if($(e.target).hasClass("js-right-arrow")){
          if(index === posts.length-1){
            index = 0;
          }else{
            index = index + 1;
          }
          $imageModal.children(".js-modal-pic").attr("src", posts[index].media_url); 
        }else if(!$(e.target).hasClass("js-modal-pic")){
         
          $(".js-close-image-modal-btn").parent().removeClass("show");
          $imageModal.children(".js-modal-pic").attr("src", "");
          $("body").removeClass("noscroll")
          
        }
      })
      //スライダークローズ処理
    })
  })
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



