import {PageBlog} from './Blog';
import $ from 'jquery';



function Page(){

	PageBlog();
    console.log()
	return(
      <div className="content">
	        <h1 className="content_title">BLOG</h1>
      		<div className="page">
      			
      		</div> 
      </div> 
		);
}


export default Page;