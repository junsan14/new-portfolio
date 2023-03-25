import title_contact from './images/title_contact.png';
import {ScrollRestoration } from 'react-router-dom';

function Contact() {
  return (
    <main className="main wrapper">
      <ScrollRestoration />
      <div className="about">
          <section className="section">
            <h1 className="section_title">
              <img className="section_title_en" src={title_contact} alt=""/>
              <div className="section_title_jp">問合せ</div>
            </h1>
                    
            <div className="section_content about-page">
              <h2 className="section_content_title">
                BIOGRAPHY
              </h2>
            </div>
          </section>
      </div>
    </main>

   
  );
}

export default Contact;
