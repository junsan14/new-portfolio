
import {Link} from "react-router-dom";
import $ from 'jquery';
import {useState } from "react";
import twitter from '../../images/twitter_icon.png';
import instagram from '../../images/instagram_icon.png';


function Header(){
 
  SpMenuShow();
  return(
    <header className="header">
      <div className="toggle-sp js-toggle-sp">
          <span></span>
          <span></span>
          <span></span>
      </div> 
      <nav className="nav js-nav">
        <ul className="nav_ul">
          <li className="nav_ul_li js-nav-ul-li"><Link to="/" >HOME</Link></li>
           <li className="nav_ul_li js-nav-ul-li"><Link to="/about" >ABOUT</Link></li>
           <li className="nav_ul_li js-nav-ul-li"><Link to="/blog">BLOG</Link></li>     
           <li className="nav_ul_li js-nav-ul-li"><Link to="/contact">CONTACT</Link></li>
        </ul>
        <div className="nav_sns">
          <a href="https://twitter.com/junsan_junsan14" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="" />
          </a>
          <a href="https://www.instagram.com/junsan_junsan14/" rel="noopener noreferrer">
            <img src={instagram} alt="" target="_blank" />
          </a>
        </div>
      </nav>
    </header>
   
    )

}

function SpMenuShow(){
  const [loadState, setLoadState]= useState(false);
  //console.log(loadState)
  $(function(){
    if(!loadState){
   
      let $nav = $('.js-nav');
      let $toggleBtn = $('.js-toggle-sp');
      let $naviList = $('.js-nav-ul-li');
    
        $toggleBtn.on('click', ()=>{       
          if($nav.hasClass('show')){
            $nav.removeClass('show');
            $toggleBtn.removeClass('show');
            $("body").removeClass('noscroll');
            //console.log($header.hasClass('show'))
          }else{
            $nav.addClass('show');
            $toggleBtn.addClass('show');
            $("body").addClass('noscroll');
            //console.log($header.hasClass('show'))
          }
    
        })
        $naviList.on('click',()=>{
          $nav.removeClass('show');
          $toggleBtn.removeClass('show');
          $("body").removeClass('noscroll');
        })
        setLoadState(true);
    }



  })
}

export default Header;

