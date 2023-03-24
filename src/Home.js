
import Instagram from './Sns';
import {FetchBlogHome} from './Blog'; 
import {ScrollRestoration } from 'react-router-dom';
import title_about from "./images/title_about.png";
import title_blog from "./images/title_blog.png";
import title_sns from "./images/title_sns.png";
import twitter_png from "./images/twitter.png";
import {Link} from "react-router-dom";


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
              <img className="section_title_en" src={title_about} />
              <div className="section_title_jp">紹介</div>
            </h2>
            
            <div className="section_content about">
             
            </div>
            <div className="section_btn">
               <Link to={`./about`}>DETAILS</Link>
            </div>
          </section>
          <section className="section">
            <h2 className="section_title">
              <img className="section_title_en" src={title_blog} />
              <div className="section_title_jp">記事</div>
            </h2>
            <div className="section_content posts">
              <FetchBlogHome />
            </div>
          </section>
          <section className="section">
            <h2 className="section_title">
              <img className="section_title_en" src={title_sns} />
              <div className="section_title_jp">投稿</div>
            </h2>

            <div className="section_content sns js-sns">
              <div className="instagram">
                <Instagram />
              </div>
              <div className="twitter">
                <img src={twitter_png} />
              </div>
            </div>
          </section>

      </div>
    </main>

  );
}

export default Home;
