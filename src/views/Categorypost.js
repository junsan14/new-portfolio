
import {FetchCategoryPost,FetchSearchedPost} from '../components/FetchBlog';
import {ScrollRestoration, Link} from 'react-router-dom';
import title_blog from "../../images/title_blog.png";


function Blog() {

	return (
	  <main className="main wrapper">
		<ScrollRestoration />
		<div className="blog">
            <section className="section">
                <h1 className="section_title">
                <img className="section_title_en" src={title_blog} alt="" />
                <div className="section_title_jp">記事</div>
                </h1>
                <div className="section_content posts">
                <ul className="category_tab tab">
                  <Link to="./blog/">
                    <li className="category_tab_li js-tab-coding" tabIndex="-1">CONDING</li>
                  </Link>
                  <li className="category_tab_li js-tab-front" tabIndex="-1">FRONT</li>
                  <li className="category_tab_li js-tab-back" tabIndex="-1">BACK</li>
                  <li className="category_tab_li js-tab-life" tabIndex="-1">LIFE</li>
                  <li className="category_tab_li js-tab-others" tabIndex="-1">OTHERS</li>
                </ul>
         
                  <FetchSearchedPost />
                  <FetchCategoryPost />
                </div>
            </section>
		</div>
	  </main>
  
	 
	);
  }


export default Blog;