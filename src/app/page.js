import Link from 'next/link';
import Service from './services/page';

import About from './about/page';
import Contact from './contactus/page';

export default function Home() {
  return (
  <>
  <section className="container grid grid-two-cols home" >
  <div className="home-content" style={{marginBottom:'170px'}}>
        <h3>Hey, It's Me</h3>
        <h2>Madhav Goyal</h2>
        <h3><span>Foresic Expert</span></h3>
        <p>I am a Very highly dedicated, professional and educated forensic expert. I have experienced private as well as government forensic labs which is recognised by ISO, NABL and many more.</p>
        <div className="home-i">   
            <Link href="https://www.facebook.com/ormapforensicmart?mibextid=JRoKGi" ><i className='bx bxl-facebook'></i></Link>
            <Link href="https://www.youtube.com/@Madhav_Forensic_Expert" ><i className='bx bxl-youtube'></i></Link>
            <Link href="https://www.instagram.com/forensic_mart?igsh=eXl2anp6MjdxdHBm" ><i className='bx bxl-instagram'></i></Link>
            <Link href="https://wa.me/917986512092" ><i className='bx bxl-whatsapp'></i></Link>
            <Link href="https://www.linkedin.com/in/madhav-goyal-356875117?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" ><i className='bx bxl-linkedin'></i></Link>
        </div>
        
    </div>
    <div className='image'>
      <img src="/images/profile.png" style={{backgroundColor:"#fff", borderRadius:"70px",marginBottom:"20px"}}  width={400} height={400} alt="" />
    </div>
  </section>
  <About/>
<Service/>


<Contact/>


  </>
  )
}
