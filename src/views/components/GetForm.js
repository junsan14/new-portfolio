import React, { useState,useRef } from "react";
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import $ from "jquery";


function Form(){
    const [name,setName]=useState("");
    const [address,setAddress]=useState("");
    const [subject,setSubject]=useState("");
    const [content,setContent]=useState("");
    const {formState: { errors }} = useForm();
    //const onSubmit = data => console.log(data);
    const form = useRef();
    let serviceId = process.env.REACT_APP_emailjs_service_id_KEY;
    let templateId =process.env.REACT_APP_emailjs_template_id_KEY;
    let publicKey = process.env.REACT_APP_emailjs_public_KEY ;
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          setName("");
          setAddress("");
          setSubject("");
          setContent("");
          $(function(){
      
            $(".js-send-success").addClass("show")
            $(".js-send-success-msg").text("");
            $(".js-send-success-msg").append(`
            お問い合わせありがとうございます。<br>
            確認メールが送信されましたのでご確認ください。
            `);

            setTimeout(()=>$(".js-send-success").removeClass("show"),4000 ) 
            })
          
      };
     
    return (
        <form onSubmit={sendEmail} className="form_control" ref={form}>
            <div className="form_control_item">
                <label htmlFor="email">名前</label>
                <input  id="name" className="form_control_item_input" name="user_name" required
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className="form_control_item">
                <label htmlFor="email">アドレス</label>
                <input  type="email" id="email" className="form_control_item_input" name="user_email"
                        required
                        value={address}
                        onChange={(e)=>setAddress(e.target.value)}
                />
            </div>

            <div className="form_control_item">
                <label htmlFor="subject">件名</label>
                <input type="text" id="subject" className="form_control_item_input" name="subject"
                       required
                       value={subject}
                       onChange={(e)=>setSubject(e.target.value)}
                />
            </div>
            {errors.subject && <p role="alert">{errors.subject?.message}</p>}
            <div className="form_control_item">
                <label htmlFor="content">内容</label>
                <textarea id="content" className="form_control_item_input" rows="10" name="content"
                          required
                          onChange={(e)=>setContent(e.target.value)}
                          value={content}
                ></textarea>
            </div>

            <input type="submit" value="送信" className="form_control_item_submit" />
      
        </form>
    );
    
}

export default Form;