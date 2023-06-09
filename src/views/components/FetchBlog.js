import React, {useEffect, useState} from "react";
import axios from "axios";
import noImg from '../../images/no_image.png'
import parse from 'html-react-parser';
import {Link,useParams} from "react-router-dom";
import $ from 'jquery';
import { ModalShow } from "../../app";
let blogURL = "https://www.junsan.info/wp/wp-json/wp/v2/posts";


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
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('')

   useEffect(() => {
    let fetchURL = blogURL+"?_embed&per_page=20";
    if(keyword && category){
      fetchURL +=  "&search=" + keyword  + "&categories=" + category;
    }else if(keyword){
      fetchURL +=  "&search=" + keyword;
    }else if(category){
      fetchURL += "&categories=" + category;
    }
    
    axios
    .get(fetchURL)
    .then(response => setData(response.data) )
    .catch(error => console.log(error));
    
  }, [keyword,category]);

  const Render = ()=>{
    //console.log(data)
    if(data.length >0){
      return(
        <>  
          {data.map((item,i) => {
          //let publishDate = formatDate(item.date);
          let upadtedate = formatDate(item.modified); 
          let thumbnail = getThumbnail(item)

            return(
              <div className="article" id={item.id} key={item.id}>
                <Link to={`/blog/${item.id}`} state={{content:item.content, test:"a"}}>
                  <img src={thumbnail} alt="" />
                  <div className="article_remarks">
                    <h3 className="article_remarks_title">{item.title.rendered}</h3>
                    <div className="article_remarks_text">
                        {parse(item.excerpt.rendered)}
                    </div>
                    <p className="article_remarks_date">
                        更新日:　{upadtedate}<br/>
                    </p>
                  </div>
                </Link>
              </div>
            )          
          })}           
        </>

      )
    }else{
      return(
        <p>{keyword}の検索では記事がありません</p>
      )
    }
  }
   return (
    <>
    <ul className="category_tab tab">  
      <li className="category_tab_li" tabIndex="-1" value="28" onClick={(e)=>setCategory(e.target.value)}>TIPS</li>
      <li className="category_tab_li" tabIndex="-1" value="27" onClick={(e)=>setCategory(e.target.value)}>WORKS</li> 
      <li className="category_tab_li" tabIndex="-1" value="29" onClick={(e)=>setCategory(e.target.value)}>DIARY</li>
    </ul>
    <div className="search_area">
      <input type="text" className="search_area_input" placeholder="記事検索ワード" onChange={(e)=>setKeyword(e.target.value)} />
    </div>
    <Render />
    </>
   
   )
}



function FetchThreePost() {
  const [data, setData] = useState([]);
   useEffect(() => {
   axios
     .get(blogURL + "?per_page=6&_embed")
     .then(response => setData(response.data))
     .catch(error => console.log(error));
  }, []);


  const Render = ()=>{
    if(data){
      return(
        <>
          {data.map((item,i,data) => {
          
          let date = formatDate(item.date);
          let thumbnail = getThumbnail(item);
            return(
              <div className="article" id={item.id} key={item.id}>
                <Link to={`/blog/${item.id}`} >
                  <img src={thumbnail} alt="" />
                  <div className="article_remarks">
                    <h3 className="article_remarks_title">{item.title.rendered}</h3>
                    <div className="article_remarks_text">
                        {parse(item.excerpt.rendered)}
                    </div>
                    <p className="article_remarks_date">
                        {date}<br/>
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
     .get(blogURL + "/" +id)
     .then(response => setData(response.data))
     .catch(error => console.log(error));
  }, [id]);


    console.log(data)
    if(data){ console.log(data)
      //記事のスタイル装飾
      $(function(){
        let $markupElements = $(".language-markup");
        //setImgNum($(".js-show-modal").length)
        //imgタグにモーダル用のクラス付与
        $("img").each((i,ele)=>{
          if(String($(ele).attr("class")).indexOf("wp-image") !== -1){
            //画像URLリサイズなし調整
            let originalurl = $(ele).attr("src").substring(0, $(ele).attr("src").indexOf("?resize"));
            $(ele).attr("src", originalurl);
        
            $(ele).wrap(`<div class="js-show-modal" data-index="${i-2}"></div>`);
            $(ele).append(`<div class="image_modal js-image-modal"></div>`); 
            
          }   
        })
        

        //モーダルjs呼び出し 
        ModalShow($(".js-show-modal"), "wordpress");

        //リンク
        $("a").attr("target", "_blank");
        $("a").attr("rel", "noopener noreferrer");
        
        //コピーエリア作成
        $markupElements.each((i,ele)=>{
        $(ele).css("position", "relative")
          $(ele).append(
              `
              <div class="markup-area-copy">
              <div class="markup-area-copy_text">copy</div>
              </div>
              `
          );
        });

        //コピーボタン
        $(".markup-area-copy").on("click", function(){
          let that = $(this);
          let copiedText = that.prev().text();
          that.children("div").text("copied");
          that.addClass("copied");
          //console.log(that.prev().text())
          setTimeout(()=>{
          that.children("div").text("copy"); 
          that.removeClass("copied");
          },3000)
          return navigator.clipboard.writeText(copiedText);
        })
      });
      let publishDate = formatDate(data.date);
      let upadtedate = formatDate(data.modified);
      let prevPost = data["jetpack-related-posts"][1]?data["jetpack-related-posts"][1]:0;
      let nextPost = data["jetpack-related-posts"][0]?data["jetpack-related-posts"][0]:0;
      
      const PrevPost = ()=>{
        if(prevPost){
          return(
                
                <div className="article" id={prevPost.id} >
                      <Link to={`/blog/${prevPost.id}`} >
                        <div className="article_image">
                          <p>関連投稿</p>
                          <img src={prevPost.img.src?prevPost.img.src:noImg} alt="" />
                        </div>
                        <div className="article_remarks">
                          <h3 className="article_remarks_title">{parse(prevPost.title)}</h3>  
                        </div>
                      </Link>
                </div>
          )
        }
      }
      const NextPost = ()=>{
        if(nextPost){
          //console.log(nextPost)
          return(
            <div className="article" id={nextPost.id} >
            <Link to={`/blog/${nextPost.id}`} >
              <div className="article_image">
                <p>関連投稿</p>
                <img src={nextPost.img.src?nextPost.img.src:noImg}  alt="" />
              </div>
              <div className="article_remarks">
                <h3 className="article_remarks_title">{parse(nextPost.title)}</h3>  
              </div>
            </Link>
      </div>
                
          )
        }
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
    }else{
      return(<></>)
    }
    


}

export {FetchAllPost,FetchThreePost,FetchPageData};
