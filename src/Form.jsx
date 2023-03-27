import { useState } from "react";


function Form(){
    const [value,setValue]=useState("");
   const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(value);
   }
   console.log(value);
    return (
        <form onSubmit={handleSubmit} className="form_control">
            <div className="form_control_item">
                <label htmlFor="email">アドレス</label>
                <input type="email" id="email" className="form_control_item_input" 
                       onChange={(e)=>setValue(e.target.value)}
                       value={value}
                />
            </div>
            <div className="form_control_item">
                <label htmlFor="subject">件名</label>
                <input type="text" id="subject" className="form_control_item_input"/>
            </div>
            <div className="form_control_item">
                <label htmlFor="content">内容</label>
                <textarea id="content" className="form_control_item_input" rows="10"></textarea>
            </div>

            <input type="submit" value="Submit" className="form_control_item_submit" />
      
        </form>
    );
    
}

export default Form;