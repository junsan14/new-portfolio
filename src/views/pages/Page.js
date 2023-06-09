import {FetchPageData} from '../components/FetchBlog';
import {ScrollRestoration } from 'react-router-dom';
import {mainFadeIn} from "../../app.js";

function Page() {
	mainFadeIn();
	return (
	  <main className="main wrapper">
		<ScrollRestoration />
		<div className="page">
			<section className="section">
			  <div className="section_content page_content">
				<FetchPageData />
			  </div>
			</section>
		</div>
	  </main>
  
	 
	);
  }


export default Page;