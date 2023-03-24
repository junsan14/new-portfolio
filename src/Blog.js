import React, { useEffect, useState } from "react";
import axios from "axios";
import noImg from './images/no_image.png'





function FetchBlogHome() {
  const [id, setId] = useState(0);
  const [data, setData] = useState([]);
  const test = "";
   useEffect(() => {
   axios
     .get("https://www.junsan.info/public/engineer/wp-json/wp/v2/posts?_embed")
     .then(response => setData(response.data))
     .catch(error => console.log(error));
  }, []);

 
  const Render = ()=>{
    if(data){
      return(
        <React.Fragment>
          {data.map((item,i) => {
          let date = new Date(item.date).getFullYear()+ "/" 
          +new Date(item.date).getMonth().toString().padStart(2, '0')+ "/" 
          +new Date(item.date).getDate().toString().padStart(2, '0')+ "　"
          +new Date(item.date).getHours().toString().padStart(2, '0')+ ":"
          +new Date(item.date).getMinutes().toString().padStart(2, '0');   
          let thumbnail = item["_embedded"]["wp:featuredmedia"]?item["_embedded"]["wp:featuredmedia"][0]["source_url"]:noImg;

            return(
              <div className="article" id={item.id} key={item.id}>
                <a href={item.link}>
                  <img src={thumbnail} alt="" />
                  <div className="article_remarks">
                    <h3 className="article_remarks_title">{item.title.rendered}</h3>
                    <p className="article_remarks_text">
                        {item.excerpt.rendered}
                    </p>
                    <p className="article_remarks_date">
                        公開日:　{date}<br/>
                    </p>

                  </div>
                </a>
              </div>
            )          
          })}           
        </React.Fragment>

      )
    }
  }
   return (
    <Render />
   )
}

function PageBlog(){
  const [data, setData] = useState([]);
   useEffect(() => {
   axios
     .get("https://www.junsan.info/public/engineer/wp-json/wp/v2/posts/30")
     .then(response => setData(response.data))
     .catch(error => console.log(error));
  }, []);
   //console.log((data.content))

}

export {PageBlog,FetchBlogHome};
