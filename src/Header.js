
import {Link} from "react-router-dom";
import $ from 'jquery';
import {useState } from "react";
import twitter from './images/twitter_icon.png';
import instagram from './images/instagram_icon.png';

function Header(){
  SpMenuShow();
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
        <div className="header_sns">
          <a href="https://twitter.com/junsan_junsan14" target="_blank">
            <img src={twitter} alt="" />
          </a>
          <a href="https://www.instagram.com/junsan_junsan14/">
            <img src={instagram} alt="" target="_blank" />
          </a>
        </div>
      </header>
    </aside>
   
    )

}

function SpMenuShow(){
  const [loadState, setLoadState]= useState(false);
  console.log(loadState)
  $(function(){
    if(!loadState){
   
      let $header = $('.js-header');
      let $toggleBtn = $('.js-toggle-sp');
      let $headerlist = $('.js-header-ul-li');
    
        $toggleBtn.on('click', ()=>{       
          if($header.hasClass('show')){
            $header.removeClass('show');
            $toggleBtn.removeClass('show');
            $("body").removeClass('noscroll');
            console.log($header.hasClass('show'))
          }else{
            $header.addClass('show');
            $toggleBtn.addClass('show');
            $("body").addClass('noscroll');
            console.log($header.hasClass('show'))
          }
    
        })
        $headerlist.on('click',()=>{
          $header.removeClass('show');
          $toggleBtn.removeClass('show');
          $("body").removeClass('noscroll');
        })
        setLoadState(true);
    }



  })
}

export default Header;

