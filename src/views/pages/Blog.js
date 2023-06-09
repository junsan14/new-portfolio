import {FetchAllPost} from '../components/FetchBlog';
import {ScrollRestoration } from 'react-router-dom';
import title_blog from "../../images/title_blog.png";
import {mainFadeIn} from "../../app";

export default function Blog() {

  mainFadeIn();
 
	return (
	  <main className="main wrapper">
		<ScrollRestoration />
		<div className="blog">
            <section className="section">
                <h1 className="section_title">
                <img className="section_title_en" src={title_blog} alt="" />
                <div className="section_title_jp">投稿</div>
                </h1>
                <div className="section_content posts">               
                  <FetchAllPost />
                </div>
            </section>
		</div>
	  </main>
  
	 
	);
  }


