import React from 'react';
import ReactDOM from 'react-dom/client';


import {
  createBrowserRouter,
  RouterProvider, 
} from "react-router-dom";

import "./styles/style.scss"
import "./styles/reset.css"

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Page from './Page';
import Contact from './Contact';
import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
  {
    path: "/",
    element:(
      <>
      <Header />
      <Home />
      </>
      ),
  },
  {
    path: "about",
    element:(
      <>
      <Header />
      <About />
      </>
      ),
  },
  {
    path: "blog",
    element:(
      <>
      <Header />
      <Blog />
      </>
      ),
  },
  {
    path: "contact",
    element:(
      <>
      <Header />
      <Contact />
      </>
      ),
  },
  {
    path: "blog/page/:id",
    element:(
      <>
      <Header />
      <Page />
      </>
      ),
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <>      
        <RouterProvider router={router} />
        <Footer />
      </>

);

<React.StrictMode>
</React.StrictMode>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

