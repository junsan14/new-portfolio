import React, {useEffect, useState } from "react";
import axios from "axios";
import noImg from './images/no_image.png'
import parse from 'html-react-parser';
import {Link,useParams} from "react-router-dom";


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


function FetchSixPost() {
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
      let date = new Date(data.date).getFullYear()+ "/" 
          +new Date(data.date).getMonth().toString().padStart(2, '0')+ "/" 
          +new Date(data.date).getDate().toString().padStart(2, '0')+ " "
          +new Date(data.date).getHours().toString().padStart(2, '0')+ ":"
          +new Date(data.date).getMinutes().toString().padStart(2, '0'); 
      return(
        <>
              <h1 className="section_content_title">{data.title.rendered}</h1>
              <div className="article" id={data.id} key={data.id}>
                <div className="article_date">
                    <p className="article_date_publish">
                        更新日: {date} 
                    </p>
                    <p className="article_date_publish">
                        公開日: {date}
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



export {FetchAllPost,FetchSixPost,FetchPageData};
