import {ScrollRestoration,Link } from 'react-router-dom';
import {Instagram,TwitterGet} from '../components/FetchSns';
import {FetchThreePost} from '../components/FetchBlog'; 
import {EnginerSkillGraph} from '../components/GetSkillGraph';

import title_about from "../../images/title_about.png";
import title_blog from "../../images/title_blog.png";
import title_sns from "../../images/title_sns.png";
import {mainFadeIn} from "../../app";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Home() {
  mainFadeIn();
  
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
        `https://graph.facebook.com/v16.0/${user_id}?fields=business_discovery.username(${user_name}){id,followers_count,media_count,ig_id,media.limit(${get_count}){caption,media_url,like_count}}&access_token=${access_token}`
      )
      .then((res) => {
        setPosted(res.data)
      });
  }, [])
  if(posted){
    let posts =posted.business_discovery.media.data;
    console.log(posts)
  return (
    <main className="main wrapper">
      <ScrollRestoration />
      <div className="home">
          <div className="kv">
            <div className="kv_text">
              <h2>JUNSAN 14</h2>
              <p> A WEB DIRECTER & ENGINEER</p>
              <p>AS A FORMAR HOTELIER</p>
            </div>       
          </div>
          <section className="section">
            <h2 className="section_title">
              <img className="section_title_en" src={title_about} alt="" />
              <div className="section_title_jp">紹介</div>
            </h2>
            
            <div className="section_content about skill_graph">
              <EnginerSkillGraph />
            </div>
            <div className="section_btn btn">
               <Link to={`/about`}>詳細</Link>
            </div>
            <div className="instagramImg">
              <img src={posts[0].media_url} alt=''></img>
            </div>
          </section>
          <section className="section">
            <h2 className="section_title">
              <img className="section_title_en" src={title_blog} alt="" />
              <div className="section_title_jp">新着</div>
            </h2>
            <div className="section_content posts">
              <FetchThreePost />
            </div>
            <div className="section_btn btn">
               <Link to={`/blog`}>一覧</Link>
            </div>
          </section>
          <section className="section">
            <h2 className="section_title">
              <img className="section_title_en" src={title_sns} alt="" />
              <div className="section_title_jp">投稿</div>
            </h2>

            <div className="section_content sns js-sns">
              <div className="instagram js-instagram">
                <div className="instagram_wrapper js-instagram-wrapper">

                </div>
                
              </div>
              

            </div>
          </section>

      </div>
    </main>
  
  );
  }
}

