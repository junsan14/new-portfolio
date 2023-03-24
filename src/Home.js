
import axios from "axios";
import $ from 'jquery';
import Instagram from './Sns';
import {HomeBlog} from './Blog'; 
import Header from './Header';

import title_skill from "./images/title_skill.png";
import title_blog from "./images/title_blog.png";
import title_sns from "./images/title_sns.png";



function Home() {

  HomeBlog();
  return (
    <main className="main wrapper">
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
              <img className="section_title_en" src={title_skill} />
              <div className="section_title_jp">技術</div>
            </h2>
            
            <div className="section_content about">
             
            </div>
            <div className="section_btn">
              <a href="">DETAILS</a>
            </div>
          </section>
          <section className="section">
            <h2 className="section_title">
              <img className="section_title_en" src={title_blog} />
              <div className="section_title_jp">記事</div>
            </h2>
            <div className="section_content posts js-load-posts">
            </div>
          </section>
          <section className="section">
            <h2 className="section_title">
              <img className="section_title_en" src={title_sns} />
              <div className="section_title_jp">投稿</div>
            </h2>

            <div className="section_content sns js-sns">
              <div className="instagram js-instagram">
                <Instagram />
              </div>
            </div>
          </section>

      </div>
    </main>

  );
}

export default Home;
