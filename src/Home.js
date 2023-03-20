
import axios from "axios";
import $ from 'jquery';
import Instagram from './Sns';
import {HomeBlog} from './Blog'; 
import Header from './Header';




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
            <h2 className="section_title">ABOUT THIS PAGE</h2>
            <div className="section_content about">
              <p>
                テキストテキストテキストテキスト
                テキストテキストテキストテキスト
                テキストテキストテキストテキスト
              </p>
            </div>
          </section>
          <section className="section">
            <h2 className="section_title">NEW POSTS</h2>
            <div className="section_content posts js-load-posts">
            </div>
          </section>
          <section className="section">
            <h2 className="section_title">SNS</h2>
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
