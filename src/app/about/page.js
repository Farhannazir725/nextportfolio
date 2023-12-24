import React from 'react'
import Link from 'next/link';

export default function About() {
  return (
    <>
    <section id='about'>
    
      <h1 className="sub-title" style={{color:'white',fontSize:'36px'}}>About <span>Us</span></h1>
      <div className='contentabout' style={{fontSize:'20px'}}>To obtain a position in a fast-paced and challenging environment
where I can use my skills and experience to make a significant
contribution</div>
      <section className="section-contact">
     <div className="contact-content container">
    
     </div>
    



     <h1 className="sub-title" style={{color:'white',fontSize:'36px',marginLeft:'-100px'}}>Education</h1>
      <div className="about-container" style={{marginTop:'40px'}}>
        <div className="about-details">
          <div className="about-card">
          <i class='bx bx-certification' style={{fontSize:'70px',color:'teal',marginLeft:'100px',marginTop:'50px'}}></i><span  className='about-span'>Degree</span>
            <h1>Msc  <span>Forensic Science </span></h1>
            <h3>July-2017 TO May-2019</h3>
          </div>

          <div className="about-card">
          <i class='bx bx-certification' style={{fontSize:'70px',color:'teal',marginLeft:'100px',marginTop:'50px'}}></i><span className='about-span'>Degree</span>
            <h1>Bsc (H) <span>Forensic Science </span></h1>
            <h3>July-2014 TO May-2017</h3>
          </div>

          <div className="about-card">
          <i class='bx bx-certification' style={{fontSize:'70px',color:'teal',marginLeft:'100px',marginTop:'50px'}}></i><span className='about-span'>Degree</span>
            <h1>Php <span>Laravel</span>  </h1>
            <h3>Croma Campus</h3>
          </div>

        </div>
      </div>


                            {/* //Experience */}
 <h1 className="sub-title" style={{color:'white',fontSize:'36px',marginLeft:'-100px'}}>Experience</h1>
<div className="about-container" style={{marginTop:'40px'}}>
  <div className="about-details">
    <div className="about-card">
    <i class='bx bxs-briefcase' style={{fontSize:'70px',color:'teal',marginLeft:'100px',marginTop:'50px'}}></i><span  className='about-span'>Experience</span>
      <h1>Director at Ormap  <span>Forensicmart Private Limited </span> </h1>
      <h3>May-2019 To Continue...</h3>
    </div>

    <div className="about-card">
    <i class='bx bxs-briefcase' style={{fontSize:'70px',color:'teal',marginLeft:'100px',marginTop:'50px'}}></i><span  className='about-span'>Experience</span>
      <h1>Scientific Assistant <span>Forensic Science Laboratory </span> </h1>
      <h3>Crime Scene Technical at State</h3>
      <h3>Oct-2020 To Continue...</h3>
    </div>


    <div className="about-card">
    <i class='bx bxs-briefcase' style={{fontSize:'70px',color:'teal',marginLeft:'100px',marginTop:'50px'}}></i><span  className='about-span'>Experience</span>
      <h1>Intern at <span>Central Forensic  </span> </h1>
      <h3>Science Laboratory - CBI, Delhi</h3>
      <h3>Jun-2018 To Jul-2018</h3>
    </div>

  </div>
</div>




                                        {/* // project */}
      <h1 className="sub-title" style={{color:'white',fontSize:'36px',marginLeft:'-100px'}}>Exp & Project</h1>
      <div className="about-container" style={{marginTop:'40px'}}>
        <div className="about-details">
        <div className="about-card">
    <i class='bx bxs-briefcase' style={{fontSize:'70px',color:'teal',marginLeft:'100px',marginTop:'50px'}}></i><span  className='about-span'>Experience</span>
      <h1>Intern at <span>Codon Biotech  </span> </h1>
      <h3>Codon Biotech Pvt. ltd </h3>
      <h3>May-2016 To Jul-2016</h3>
    </div>

          <div className="about-card">
          <i class='bx bxl-dev-to' style={{fontSize:'70px',color:'teal',marginLeft:'100px',marginTop:'50px', marginBottom:'20px'}}></i><span  className='about-span' style={{marginBottom:'20px'}}>Development</span>
            <h2 style={{textAlign:'center', marginBottom:'20px'}} >Forensic Exam Android App</h2>
            <h2 style={{textAlign:'center',marginBottom:'20px'}}>Project Head</h2>
            <h3>Ormap Forensicmart Private Limited</h3>
          </div>

          <div className="about-card">
          <i class='bx bxl-dev-to' style={{fontSize:'70px',color:'teal',marginLeft:'100px',marginTop:'50px', marginBottom:'20px'}}></i><span  className='about-span' style={{marginBottom:'20px'}}>Development</span>
            <h2 style={{textAlign:'center', marginBottom:'20px'}} >Forensic science and Criminology Android</h2>
            <h2 style={{textAlign:'center',marginBottom:'20px'}}>Project Head</h2>
            <h3>Ormap Forensicmart Private Limited</h3>
          </div>

       

        </div>
      </div>


    </section>
    </section>
    </>
  )
}
