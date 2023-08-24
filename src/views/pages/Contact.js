import {ScrollRestoration } from 'react-router-dom';
import Form from '../components/GetForm';

export default function Contact() {
  return (
   <>
    <div className="modal js-send-success">
      <p className='modal_msg js-send-success-msg'></p>
    </div>
    <main className="main wrapper">
      <ScrollRestoration />
      <div className="contact">
          <section className="section">
            <h1 className="section_title">
              <div className="section_title_jp">CONTACT</div>
            </h1>         
            <div className="section_content contact_content">
              <Form />
            </div>

          </section>
      </div>
    </main>
  </>
   
  );
}


