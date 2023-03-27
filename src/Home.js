
import Instagram from './Sns';
import {FetchThreePost} from './Fetchblog'; 
import {ScrollRestoration } from 'react-router-dom';
import title_about from "./images/title_about.png";
import title_blog from "./images/title_blog.png";
import title_sns from "./images/title_sns.png";
import twitter_png from "./images/twitter.png";
import {Link} from "react-router-dom";
import {SkillGraph} from './Graph';

function Home() {

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
            
            <div className="section_content about">
              <SkillGraph />
            </div>
            <div className="section_btn btn">
               <Link to={`/about`}>詳細</Link>
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
              <div className="instagram">
                <Instagram />
              </div>
              <div className="twitter">
                <img src={twitter_png} alt="" />
              </div>
            </div>
          </section>

      </div>
    </main>

  );
}

export default Home;
