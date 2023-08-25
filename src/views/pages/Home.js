import {Link } from 'react-router-dom';
import {Instagram} from '../components/FetchSns';
import {FetchThreePost} from '../components/FetchBlog'; 
import {EnginerSkillGraph} from '../components/GetSkillGraph';
import {ScrollRestoration } from 'react-router-dom';
import {BiographyChart} from '../components/GetSkillGraph'


export default function Home() {
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
              <div className="section_title_jp">ABOUT</div>
            </h2>     
            <div className="section_content about skill_graph">
              <BiographyChart />
            </div>
            <div className="section_btn btn">
               <Link to={`/about`}>詳細</Link>
            </div>
            
          </section>
          <section className="section">
            <h2 className="section_title">
              <div className="section_title_jp">BLOG</div>
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
              <div className="section_title_jp">SNS</div>
            </h2>
            <div className="section_content sns js-sns">
              <div className="instagram js-instagram">
                <div className="instagram_wrapper js-instagram-wrapper">
                  <Instagram />
                </div>
                <div className="section_btn btn">
                  <a href='https://www.instagram.com/junsan_junsan14/'>Instagram</a>
                </div>
              </div>
            </div>
          </section>

      </div>
    </main>
  
  );
  
}

