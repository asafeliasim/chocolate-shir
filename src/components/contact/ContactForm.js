import React,{useState} from 'react';

const ContactForm = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [msg,setMsg] = useState("");

    return (
        <div className="contact_form">
           <form action="#" className="form">
               <div className="form_group">
                   <label htmlFor="name" className="form_label">שם מלא</label>
                   <input type="text" className="form_input" placeholder="שם מלא" id="name" required/>

               </div>
               <div className="form_group">
                   <label htmlFor="email" className="form_label">דוא"ל</label>
                   <input type="email" className="form_input" placeholder='דוא"ל' id="email" required/>

               </div>
               <div className="form_group">
                   <label htmlFor="phone" className="form_label">טלפון</label>
                   <input type="text" className="form_input" placeholder="טלפון" id="phone"/>

               </div>
               <div className="form_group">
                   <label htmlFor="msg" className="form_label">הודעה</label>
                   <textarea  className="form_input form_input-msg" placeholder="אהבתי מאוד את הכרמל מלוח, אני ממליץ על...." id="msg" />
               </div>
               <div className="form_group-btn">
                   <a href="#" className="button button-success">
                       שלח הודעה
                   </a>
               </div>
           </form>
        </div>
    );
};

export default ContactForm;
