import {ScrollRestoration } from 'react-router-dom';
import Form from '../components/GetForm';
import {Helmet} from "react-helmet";
export default function Contact() {
  return (
   <>
     <Helmet>
        <meta name="description" content="WEBエンジニアとしてのポートフォリオ､またWEB制作やWEB開発に関わる知識を発信しています" />
        <title>junsan14｜CONTACT</title>
     </Helmet>
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


