'use client'
import React from 'react'
import { useState } from "react"

export default function page() {
  const [contact, setContact] = useState({
       
    name:"",

    email:"",
    message:"",
});
const handleInput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setContact({
        ...contact,
        [name]:value

    })     
}

const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(contact)
   
}
  return (
  
     
  <>
  <section className="section-contact">
     <div className="contact-content container">
      <h1 className="sub-title " style={{color:'white'}}>My<span>Contact </span></h1>
     </div>
          
          <div className="container grid grid-two-cols">
                  <div className="contact-img">
                      <img src="/images/contact.png " alt="Someone is trying to do login" width="500" height="500" />
                  </div>
        


                  {/* contact form  */}
                  <section className="section-form">
                  <form onSubmit={handleSubmit} >
                   

                   <div>
                       <label htmlFor="name">Name</label>
                       <input type="text" name="name" required  id="name" autoComplete="off" value={contact.name} onChange={handleInput}/>
                   </div>

                   <div>
                       <label htmlFor="email">Email</label>
                       <input type="email" name="email" required  id="email" autoComplete="off" value={contact.email} onChange={handleInput}/>
                   </div>

        
                   <div>
                       <label htmlFor="message">Message</label>
                         
                       <textarea name="message" id="message" cols="30" rows="6" autoComplete="off" value={contact.message} onChange={handleInput}/>
                      
                   </div>

                  
                   <div>
                   <button type="submit" className="btn btn-submit">Submit</button>
                   </div>

               </form>
                  </section>
                  
                  

                  </div>


                 
         
   
  </section>

                   {/* contact form  */}
         <section className="section-map">
        <div className="col-lg-6 col-md-6 mb-5 px-4">
      <div className="bg-white rounded shadow p-4 ">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.8377684672187!2d75.39754747531826!3d29.984092021428072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39111f6f030d9439%3A0x8cf84aa648456850!2sForensicmart!5e0!3m2!1sen!2sae!4v1702418694375!5m2!1sen!2sae" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <h5>Address</h5>
        <a href="https://goo.gl/maps/oRGV1Wh3bc577qeb7" target="_blank" className="d-inline-block text-decoration-none text-dark mb-2"><i class='bx bxs-location-plus' ></i> #59 Narula street, Sadar, Mansa, Punjab 151505, India</a>

        <h5 className="mt-4">Call Us </h5>
        <a  href="tel: +917986512092" className="d-inline-block mb-2 text-decoration-none text-dark"><i class='bx bxs-phone-call' ></i>+917986512092"</a>
        <br/>
        <a  href="tel: +919509390034" className="d-inline-block text-decoration-none text-dark"><i class='bx bxs-phone-call' ></i>+919509390034</a>

        <h5 className="mt-4">Email</h5>
        <a href="mailto: forensicmart@gmail.com" className="d-inline-block text-decoration-none text-dark" ><i class='bx bxs-envelope' ></i> forensicmart@gmail.com</a>
        <h5 className='mt-4'>Official Website</h5>
        <a href="https://www.forensicmart.com/" className="d-inline-block text-decoration-none text-dark" ><i class='bx bxs-envelope' ></i> https://www.forensicmart.com/</a>

        <h5 className="mt-4">Follow US </h5>
        <a  href="#" className="d-inline-block text-dark fs-5 me-2">
        <i class='bx bxl-instagram-alt' ></i>
        </a>
        
        <a  href="#" className="d-inline-block text-dark fs-5 me-2">
        <i class='bx bxl-facebook-circle' ></i> 
        </a>
        
        <a  href="#" className="d-inline-block text-dark fs-5 ">
        <i class='bx bxl-linkedin' ></i>
        </a>

        </div>
      </div>
                   
            

                 </section>
  </>
  )
}
