import React, { useRef,useState } from 'react'
import "../component/Contact.css"


import emailjs from '@emailjs/browser'
function Contact() {
    const [name,setName ] = useState();
    const[email,setEmail]= useState()
    const form = useRef()
    
    const sendEmail=(e)=>{
        
    
    e.preventDefault(e);
   
    emailjs.sendForm('service_ypsyuzg', 'template_1gki196', form.current, 'eyhHFmJ9gZxwp1Myl')
    .then((result) => {
        console.log(result.text);
        console.log(result.status(alert("get.messaage...thanks")))
    }, (error) => {
        console.log(error.text);
        
    });
     e.target.reset()
    }
  return (
    <div className='i-contact'>
      


    

    <div class="i-contact-info">
        <div className='i-contact-form'>

    <form ref={form} onSubmit={sendEmail} className="i-contact-left">
      <label>Name</label>
      <input type="text" name="user_name"  value={name} onChange={(e)=>setName(e.target.reset())} required/>
      <label>Email</label>
      <input type="email" name="user_email"    value={email} onChange={(e)=>setEmail(e.target.result())} required/>
      <label>Message</label>
      <textarea name="message" required/>
      <button type="submit" value="Send" >add</button>
      <h2 class="h2">Contact us</h2>
    
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not 
    hesitate to contact us directly.<br/> Our team will come back to you within
        a matter of hours to help you.</p>

    </form>
        </div>
       

    </div>

    </div>
  )
}

export default Contact
