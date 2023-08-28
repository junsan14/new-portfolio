import {FetchAllPost} from '../components/FetchBlog';
import {ScrollRestoration } from 'react-router-dom';
import {Helmet} from "react-helmet";

export default function Blog() {

	return (
		<>
     <Helmet>
        <meta name="description" content="WEBエンジニアとしてのポートフォリオ､またWEB制作やWEB開発に関わる知識を発信しています" />
        <title>junsan14｜BLOG</title>
     </Helmet>
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
	  </>
  
	 
	);
  }


