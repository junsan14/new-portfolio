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
			  	<div className="image_modal js-image-modal">
					<span className='js-left-arrow left-arrow'></span>
					<button className="js-close-image-modal-btn">✕</button>
					<img className="js-modal-pic modal-pic" src="" alt="" />
					<span className='js-right-arrow right-arrow'></span>
            	</div>
				<FetchPageData />
			  </div>
			</section>
		</div>
	  </main>
  
	 
	);
  }


export default Page;