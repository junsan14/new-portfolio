import React, {useEffect, useState} from "react";
import axios from "axios";
import noImg from '../../images/no_image.png'
import parse from 'html-react-parser';
import {Link,useParams} from "react-router-dom";
import $ from 'jquery';
import { ModalShow } from "../../app";
let blogURL = "https://www.junsan.info/wp/wp-json/wp/v2/posts";
let tagURL = "https://www.junsan.info/wp/wp-json/wp/v2/tags?_fields=id,name";

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
  const [tags, setTags] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [tagid,setTagid] = useState('');
  let categoryTag = [];
  let tagAry = [];

   useEffect(() => {
    let fetchURL = blogURL+"?_embed&per_page=100";

    if(category && keyword){
      fetchURL +=  "&search=" + keyword  + "&categories=" + category;
    }else if(category && tagid){
      fetchURL +=  "&tags=" + tagid + "&categories=" + category;
    }else if(keyword){
      fetchURL +=  "&search=" + keyword;
    }else if(category){
      fetchURL += "&categories=" + category;
    }else if(tagid){
      console.log(tagid)
      fetchURL += "&tags=" + tagid;
    }
    
    axios
    .get(fetchURL)
    .then(response => setData(response.data) )
    .catch(error => console.log(error));

    axios
    .get(tagURL)
    .then(response => setTags(response.data) )
    .catch(error => console.log(error));

    
  }, [keyword,category,tagid]);



  const Render = ()=>{
    if(data.length >0){
      return(
        <>  
          {data.map((item,i) => {
          //let publishDate = formatDate(item.date);
          let upadtedate = formatDate(item.modified); 
          let thumbnail = getThumbnail(item);

            return(
              <div className="article" id={item.id} key={item.id}>
                <Link to={`/blog/${item.id}`} >
                  <img className="thumbnail" src={thumbnail} alt="" />
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
    }else if(keyword){
      return(
        <>
          <p>{keyword}の検索では記事がありません</p>
          <div className="article" >
          </div>
        </>
      )
    }else{
      return(
        <div className="loading">
          <div className="loading_icon"></div>
          <p className="loading_text">読み込んでいます｡</p>
        </div>
        
      )
    }
  }
  const reset = ()=>{
     $(".search_area_input").val("");
      setTagid("");
      setKeyword("");
  }
  const LoadTag = ()=>{
      data.forEach((item,i)=>{
        if(item.tags.length>1){
            item.tags.forEach((ele,i)=>{
            categoryTag.push(ele)
            })
        }else if(item.tags.length === 1){
            categoryTag.push(item.tags[0])
        }
      })
        //重複チェック
        const set = new Set(categoryTag);
        const newArr = [...set];
 
    for(let i=0; i<tags.length;i++){
      if(newArr.indexOf(tags[i]["id"]) !== -1){
        tagAry.push([tags[i]["id"],tags[i]["name"]]);
      }
    }


    return(
        tagAry.map((tag,i)=>{
          return(
              <option value={tag[1]} key={tag[0]}>{tag[1]}</option>
            )
        })
      )
  }
   return (
    <>
    <ul className="category_tab tab">  
      <li className="category_tab_li" tabIndex="-1" value="28" onClick={(e)=>{
        setCategory(e.target.value);
        reset();
        }}>Wiki
      </li>
      <li className="category_tab_li" tabIndex="-1" value="1" onClick={(e)=>{
        setCategory(e.target.value);
        reset();
        }}>Note
      </li>
      <li className="category_tab_li" tabIndex="-1" value="50" onClick={(e)=>{
        setCategory(e.target.value);
        reset();
        }}>Tool
        </li> 
      <li className="category_tab_li" tabIndex="-1" value="29" onClick={(e)=>{
        setCategory(e.target.value);
        reset();
        }}>Diary
      </li>
    </ul>
    <div className="search_area">
      <button type="button" className="search_area_reset" value="RESET" onClick={reset}>Clear</button>
      <input list="tag-list"  className="search_area_input" id="tag-choice" name="tag-choice" placeholder="記事検索ワード" 
        onChange={(e)=>{
          let id = tagAry.map(x=>x[1]).indexOf(e.target.value);
          if(id !==-1){
            setTagid(tagAry[id][0])
           
          }else{
            setKeyword(e.target.value);
          }
        }} 
      />
      <datalist id="tag-list">
       <LoadTag />
      </datalist>
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


 
    if(data){ 
      
      //記事のスタイル装飾
      $(function(){
        let $markupElements = $(".language-markup");
        let $subContent = $("h3");
        

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
        $("a").each((i,ele)=>{
            
            if($(ele).attr("href").indexOf("https://junsan.info/") ===-1){
              
              $(ele).attr("target", "_blank");
            }
            $(ele).attr("rel", "noopener noreferrer");
        });

        
        //コピーエリア作成
        $markupElements.each((i,ele)=>{
            $(ele).replaceWith(function() {
            $(this).replaceWith(`
              <div class="language-markup" style="position:relative;">
                <pre class="code">${$(this).html()}</pre>
                <div class="markup-area-copy">
                <div class="markup-area-copy_text">copy</div>
                </div>
              </div>
            `)
          });

        });
        $subContent.each((i,ele)=>{
          $($(ele).nextAll().not("h3").not("h2")).addClass("sub_content");
        })

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
      let upadtedate = formatDate(data.modified) === formatDate(data.date)?"":"更新日: " +formatDate(data.modified);
      let related_post = [];
      for(let i=0; i<data["jetpack-related-posts"].length;i++){
         related_post.push(data["jetpack-related-posts"][i])
      }
      
      let related_post00 = data["jetpack-related-posts"][0]?data["jetpack-related-posts"][0]:0;

      const RelatedPost = ()=>{
          return(
            <>
              {related_post.map((post,i)=>{
                return(
                  <div className="article" id={post.id} key={post.id}>
                    <Link to={`/blog/${post.id}`} >
                      <img src={post.img.src?post.img.src:noImg} alt="" />
                      <div className="article_remarks">
                        <h3 className="article_remarks_title">{parse(post.title)}</h3>
                        <div className="article_remarks_text">
                            {parse(post.excerpt)}
                        </div>
                        <p className="article_remarks_date">
                         {parse(post.date)}
                            <br/>
                        </p>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </>
            )        
      }
      
      return(
        <>
              <h1 className="section_content_title">{data.title.rendered}</h1>
              <div className="article" id={data.id} key={data.id}>
                <div className="article_date">
                    <p className="article_date_publish">
                        {upadtedate}
                    </p>
                    <p className="article_date_publish">
                        公開日: {publishDate}
                    </p>
                </div>
                <div className="article_content">    
                        {parse(data.content["rendered"])}
                </div>
              </div>
              <p className="related-posts">関連投稿</p>
              <div className="posts">
                    <RelatedPost />                        
              </div>                                
        </>
      )
    }
}

export {FetchAllPost,FetchThreePost,FetchPageData};
