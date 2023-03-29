import React, {useEffect, useState } from "react";
import axios from "axios";
import noImg from '../../images/no_image.png'
import parse from 'html-react-parser';
import {Link,useParams,useLocation} from "react-router-dom";
import $ from 'jquery';


function formatDate(date){
  let formatDate = new Date(date).getFullYear()+ "/" 
          +(new Date(date).getMonth()+1).toString().padStart(2, '0')+ "/" 
          +new Date(date).getDate().toString().padStart(2, '0')+ " "
          +new Date(date).getHours().toString().padStart(2, '0')+ ":"
          +new Date(date).getMinutes().toString().padStart(2, '0'); 
  return formatDate;
}

function getThumbnail(item){
  return item["_embedded"]["wp:featuredmedia"]?item["_embedded"]["wp:featuredmedia"][0]["source_url"]:noImg;
}

function FetchAllPost() {
  const [data, setData] = useState([]);
   useEffect(() => {
   axios
     .get("https://www.junsan.info/public/engineer/wp-json/wp/v2/posts?_embed")
     .then(response => setData(response.data))
     .catch(error => console.log(error));
  }, []);


  const Render = ()=>{
    if(data){
      return(
        <>
          {data.map((item,i) => {
          let publishDate = formatDate(item.date);
          let upadtedate = formatDate(item.modified); 
          let thumbnail = getThumbnail(item)
            return(
              <div className="article" id={item.id} key={item.id}>
                <Link to={`/blog/page/${item.id}`}>
                  <img src={thumbnail} alt="" />
                  <div className="article_remarks">
                    <h3 className="article_remarks_title">{item.title.rendered}</h3>
                    <p className="article_remarks_text">
                        {item.excerpt.rendered.replace(/(<([^>]+)>)/gi, '')}
                    </p>
                    <p className="article_remarks_date">
                        更新日:　{upadtedate}<br/>
                        公開日:　{publishDate}<br/>
                    </p>
                  </div>
                </Link>
              </div>
            )          
          })}           
        </>

      )
    }
  }
   return (
    <Render />
   )
}


function FetchThreePost() {
  const [data, setData] = useState([]);
   useEffect(() => {
   axios
     .get("https://www.junsan.info/public/engineer/wp-json/wp/v2/posts?per_page=4&_embed")
     .then(response => setData(response.data))
     .catch(error => console.log(error));
  }, []);


  const Render = ()=>{
    if(data){
      return(
        <>
          {data.map((item,i,data) => {
            //console.log(i>0?data[i-1]:"なし")
          let date = formatDate(item.date);
          let thumbnail = getThumbnail(item);
            return(
              <div className="article" id={item.id} key={item.id}>
                <Link to={`/blog/page/${item.id}`} >
                  <img src={thumbnail} alt="" />
                  <div className="article_remarks">
                    <h3 className="article_remarks_title">{item.title.rendered}</h3>
                    <p className="article_remarks_text">
                        {item.excerpt.rendered.replace(/(<([^>]+)>)/gi, '')}
                    </p>
                    <p className="article_remarks_date">
                        公開日:　{date}<br/>
                    </p>

                  </div>
                </Link>
              </div>
            )          
          })}           
        </>

      )
    }
  }
   return (
    <Render />
   )
}


function FetchPageData(){
  //記事のスタイル装飾
  $(function(){
    let $markupElements = $(".language-markup");

    $markupElements.each((i,ele)=>{
      //console.log(ele)
     $(ele).css("position", "relative")
     $(ele).wrap(
      `<div class="markup-area" id=${i}>
      </div>
      `
     );
     $(ele).append(
      `
      <div class="markup-area-copy" id=${i}>
       <p>copy</p>
      </div>
      `
     );
      
     });
     $(".markup-area-copy").on("click", function(){
      let that = $(this);
      let copiedText = that.prev().text();
      that.children("p").text("copied");
      that.addClass("copied");
      //console.log(that.prev().text())
      setTimeout(()=>{
      that.children("p").text("copy"); 
      that.removeClass("copied");
      },3000)
      return navigator.clipboard.writeText(copiedText);
    })
  });

   let { state } = useLocation(); 
   const [data, setData] = useState();
   const {id} = useParams();
   useEffect(() => {
   axios
     .get("https://www.junsan.info/public/engineer/wp-json/wp/v2/posts/" +id)
     .then(response => setData(response.data))
     .catch(error => console.log(error));
  }, [id]);


  
  const Render = ()=>{
    if(data){
      let publishDate = formatDate(data.date);
      let upadtedate = formatDate(data.modified);
      let prevPost = data["jetpack-related-posts"][0]?data["jetpack-related-posts"][0]:0;
      let nextPost = data["jetpack-related-posts"][1]?data["jetpack-related-posts"][1]:0;


      const PrevPost = ()=>{
        if(prevPost){
          return(
                <div className="article" id={prevPost.id} >
                      <Link to={`/blog/page/${prevPost.id}`} >
                        <div className="article_image">
                          <p>PREV</p>
                          <img src={prevPost.img.src?prevPost.img.src:noImg} alt="" />
                        </div>
                        <div className="article_remarks">
                          <h3 className="article_remarks_title">{prevPost.title}</h3>  
                        </div>
                      </Link>
                </div>
          )
        }
      }
      const NextPost = ()=>{
        if(nextPost){
          return(
            <div className="article" id={nextPost.id} >
            <Link to={`/blog/page/${nextPost.id}`} >
              <div className="article_image">
                <p>NEXT</p>
                <img src={nextPost.img.src?nextPost.img.src:noImg}  alt="" />
              </div>
              <div className="article_remarks">
                <h3 className="article_remarks_title">{nextPost.title}</h3>  
              </div>
            </Link>
      </div>
                
          )
        }
      }

      const RelatedPosts = ()=>{

        
      }

      return(
        <>
              <h1 className="section_content_title">{data.title.rendered}</h1>
              <div className="article" id={data.id} key={data.id}>
                <div className="article_date">
                    <p className="article_date_publish">
                        更新日: {upadtedate} 
                    </p>
                    <p className="article_date_publish">
                        公開日: {publishDate}
                    </p>
                </div>
                <div className="article_content">    
                        {parse(data.content["rendered"])}
                </div>
              </div>
              <div className="close_published_posts">
                  <div className="close_published_posts_prev">
                    <PrevPost />
                  </div>
       
                  <div className="close_published_posts_next">
                    <NextPost />
                  </div>
              </div>
                   
                
        </>

      )
    }
    
  }
   return (
      <Render />
    
   )

}

export {FetchAllPost,FetchThreePost,FetchPageData};