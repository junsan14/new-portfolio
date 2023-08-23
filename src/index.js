import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import "./styles/style.scss"
import "./styles/reset.css"

import Header from './views/components/Header';
import Footer from './views/components/Footer';
import Home from './views/pages/Home';
import About from './views/pages/About';
import Blog from './views/pages/Blog';
import Page from './views/pages/Page';
import Contact from './views/pages/Contact';
import ErrorPage from './views/pages/ErrorPage';
import reportWebVitals from './reportWebVitals';
import { mainFadeIn } from './app';

const router = createBrowserRouter([
  {
    path: "/",
    element:(
      <>
        <Header />
        <Home />
      </>
      ),
    errorElement:(
      <>
        <Header />
        <ErrorPage />
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
    path: "blog/:id",
    element:(
      <>
        <Header />
        <Page />
      </>
      ),
    errorElement:(
      <>
        <Header />
        <ErrorPage />
      </>
    )
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <>      
        <RouterProvider router={router} />
        <Footer />
      </>

);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

