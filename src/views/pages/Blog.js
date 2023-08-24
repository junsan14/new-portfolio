import {FetchAllPost} from '../components/FetchBlog';
import {ScrollRestoration } from 'react-router-dom';


export default function Blog() {

	return (
	  <main className="main wrapper">
		<ScrollRestoration />
		<div className="blog">
            <section className="section">
                <h1 className="section_title">
                <div className="section_title_jp">BLOG</div>
                </h1>
                <div className="section_content posts">               
                  <FetchAllPost />
                </div>
            </section>
		</div>
	  </main>
  
	 
	);
  }


