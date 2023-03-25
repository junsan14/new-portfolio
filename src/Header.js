
import {Link} from "react-router-dom";
import $ from 'jquery';
import {useState } from "react";


function Header(){
  const [loadState, setLoadState]= useState(false);
  console.log(loadState)
  $(function(){
    if(!loadState){
      console.log("header読み込み")
      let $header = $('.js-header');
      let $toggleBtn = $('.js-toggle-sp');
      let $headerlist = $('.js-header-ul-li');
    
        $toggleBtn.on('click', ()=>{       
          if($header.hasClass('show')){
            $header.removeClass('show');
            $toggleBtn.removeClass('show');
            console.log($header.hasClass('show'))
          }else{
            $header.addClass('show');
            $toggleBtn.addClass('show');
            console.log($header.hasClass('show'))
          }
    
        })
        $headerlist.on('click',()=>{
          $header.removeClass('show');
          $toggleBtn.removeClass('show');
        })
        setLoadState(true);
    }



  })

  return(
    <aside className="aside">
      <div className="toggle-sp js-toggle-sp">
          <span></span>
          <span></span>
          <span></span>
      </div> 
      <header className="header js-header">
        <ul className="header_ul">
          <li className="header_ul_li js-header-ul-li"><Link to="/" >HOME</Link></li>
           <li className="header_ul_li js-header-ul-li"><Link to="/about" >ABOUT</Link></li>
           <li className="header_ul_li js-header-ul-li"><Link to="/blog">BLOG</Link></li>
           <li className="header_ul_li js-header-ul-li"><Link to="/contact">CONTACT</Link></li>
        </ul>
      </header>
    </aside>
   
    )

}



export default Header;

