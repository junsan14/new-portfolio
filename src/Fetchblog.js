import React, {useEffect, useState } from "react";
import axios from "axios";
import noImg from './images/no_image.png'
import parse from 'html-react-parser';
import {Link,useParams} from "react-router-dom";
import $ from 'jquery';

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
          let publishDate = new Date(item.date).getFullYear()+ "/" 
            +(new Date(item.date).getMonth()+1).toString().padStart(2, '0')+ "/" 
            +new Date(item.date).getDate().toString().padStart(2, '0')+ " "
            +new Date(item.date).getHours().toString().padStart(2, '0')+ ":"
            +new Date(item.date).getMinutes().toString().padStart(2, '0'); 
          let upadtedate = new Date(item.modified).getFullYear()+ "/" 
            +(new Date(item.modified).getMonth()+1).toString().padStart(2, '0')+ "/" 
            +new Date(item.modified).getDate().toString().padStart(2, '0')+ " "
            +new Date(item.modified).getHours().toString().padStart(2, '0')+ ":"
            +new Date(item.modified).getMinutes().toString().padStart(2, '0');   
          let thumbnail = item["_embedded"]["wp:featuredmedia"]?item["_embedded"]["wp:featuredmedia"][0]["source_url"]:noImg;

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
          {data.map((item,i) => {
          let date = new Date(item.date).getFullYear()+ "/" 
          +new Date(item.date).getMonth().toString().padStart(2, '0')+ "/" 
          +new Date(item.date).getDate().toString().padStart(2, '0')+ "　"
          +new Date(item.date).getHours().toString().padStart(2, '0')+ ":"
          +new Date(item.date).getMinutes().toString().padStart(2, '0');   
          let thumbnail = item["_embedded"]["wp:featuredmedia"]?item["_embedded"]["wp:featuredmedia"][0]["source_url"]:noImg;

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
  })
   const [data, setData] = useState();
   const {id} = useParams();
   useEffect(() => {
   axios
     .get("https://www.junsan.info/public/engineer/wp-json/wp/v2/posts/" +id)
     .then(response => setData(response.data))
     .catch(error => console.log(error));
  }, []);



  const Render = ()=>{
    if(data){
      let publishDate = new Date(data.date).getFullYear()+ "/" 
          +(new Date(data.date).getMonth()+1).toString().padStart(2, '0')+ "/" 
          +new Date(data.date).getDate().toString().padStart(2, '0')+ " "
          +new Date(data.date).getHours().toString().padStart(2, '0')+ ":"
          +new Date(data.date).getMinutes().toString().padStart(2, '0'); 
      let upadtedate = new Date(data.modified).getFullYear()+ "/" 
          +(new Date(data.modified).getMonth()+1).toString().padStart(2, '0')+ "/" 
          +new Date(data.modified).getDate().toString().padStart(2, '0')+ " "
          +new Date(data.modified).getHours().toString().padStart(2, '0')+ ":"
          +new Date(data.modified).getMinutes().toString().padStart(2, '0'); 
        
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
                   
                
        </>

      )
            }
    
  }
   return (
      <Render />
    
   )

   //console.log((data.content))

}

export {FetchAllPost,FetchThreePost,FetchPageData};
