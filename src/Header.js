
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import About from './About'
import Page from './Page';
import Contact from './Contact';
import logo from "./images/logo.png"
import $ from 'jquery';


function Header(){
  return(
    <aside className="aside">
      <div className="toggle-sp js-toggle-sp">
          <span></span>
          <span></span>
          <span></span>
      </div> 
      <header className="header js-header">
        <div className="header_logo">
            <img src={logo} alt="" />
        </div>
        <div className="header_name">
            <p>junsan14</p>
        </div>
        <ul className="header_ul">
          <li className="header_ul_li"><Link to="/">HOME</Link></li>
           <li className="header_ul_li"><Link to="./about" >ABOUT</Link></li>
           <li className="header_ul_li"><Link to="/page">BLOG</Link></li>
           <li className="header_ul_li"><Link to="/contact">CONTACT</Link></li>
        </ul>
      </header>
    </aside>
   
    )
}





export default Header;

