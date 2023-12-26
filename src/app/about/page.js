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
    


                    {/* Education */}
     <h1 className="sub-title" style={{color:'white',fontSize:'36px',marginLeft:'-100px'}}>Education</h1>
      <div className="about-container" style={{marginTop:'40px'}}>
        <div className="about-details">
          <div className="about-card">
          <i class='bx bx-certification' style={{fontSize:'70px',color:'teal',marginLeft:'100px',marginTop:'50px'}}></i><span  className='about-span'>Degree</span>
            <h1>Msc  <span>Forensic Science </span></h1>
            
          </div>

          <div className="about-card">
          <i class='bx bx-certification' style={{fontSize:'70px',color:'teal',marginLeft:'100px',marginTop:'50px'}}></i><span className='about-span'>Degree</span>
            <h1>Bsc (H) <span>Forensic Science </span></h1>
           
          </div>

          <div className="about-card">
          <i class='bx bx-certification' style={{fontSize:'70px',color:'teal',marginLeft:'100px',marginTop:'50px'}}></i><span className='about-span'>Degree</span>
            <h1>Php <span>Laravel</span>  </h1>
           
          </div>

        </div>
      </div>


                            {/* //Experience */}
 <h1 className="sub-title" style={{color:'white',fontSize:'36px',marginLeft:'-100px'}}>Experience</h1>
<div className="about-container" style={{marginTop:'40px'}}>
  <div className="about-details">
    <div className="about-card" style={{width:'280px'}}>
    <img src="logo/logo1.jpeg" width='70' style={{fontSize:'40px',color:'teal',marginLeft:'104px',marginTop:'50px'}} alt="" />
      <h1>Director </h1>
      <h4 style={{textAlign:'center'}}>Ormap Forensicmart Private limited</h4>
      <h4 style={{textAlign:'center'}}>May-2019 To Continue...</h4>
    </div>

    <div className="about-card" style={{width:'280px'}}>
    <img src="logo/logo2.jpeg" width='50' style={{fontSize:'40px',color:'teal',marginLeft:'104px',marginTop:'50px'}} alt="" />
      <h1>Scientific Assistant  </h1>
      <h3>Crime scene technical</h3>
      <h4 style={{textAlign:'center'}}>State Forensic science laboratory</h4>
      <h4 style={{textAlign:'center'}}>Oct-2020 To Continue...</h4>
    </div>


    <div className="about-card" style={{width:'280px'}}>
    <img src="logo/logo3.jpeg" width='50' style={{fontSize:'40px',color:'teal',marginLeft:'104px',marginTop:'50px'}} alt="" />
      <h1>Internship</h1>
      <h4 style={{textAlign:'center'}}> Central Forensic Science Laboratory - CFSL- CBI, Delhi</h4>
      <h4 style={{textAlign:'center'}}>Jun-2018 To Jul-2018</h4>
    </div>

    <div className="about-card" style={{width:'280px'}}>
    <img src="logo/logo4.png" width='50' style={{fontSize:'40px',color:'teal',marginLeft:'104px',marginTop:'50px'}} alt="" />
      <h1>Intern  </h1>
      <h4 style={{textAlign:'center'}}>Codon Biotech Private Limited </h4>
      <h4 style={{textAlign:'center'}}>May-2016 To Jul-2016</h4>
    </div>

  </div>
</div>




                                        {/* // project */}
      <h1 className="sub-title" style={{color:'white',fontSize:'36px',marginLeft:'-100px'}}>Project & Achievemnets</h1>
      <div className="about-container" style={{marginTop:'40px'}}>
        <div className="about-details">
     

          <div className="about-card">
          <i class='bx bxl-dev-to' style={{fontSize:'40px',color:'teal',marginLeft:'100px',marginTop:'50px'}}></i><span  className='about-span' style={{marginBottom:'20px', fontSize:'14px'}}>Development</span>
            <h2 style={{textAlign:'center', marginBottom:'20px',fontSize:'14px', marginTop:'40px'}} >Forensic Exam Android App</h2>
            <h2 style={{textAlign:'center',marginBottom:'20px'}}>Project Head</h2>
            <h3>Ormap Forensicmart Private Limited</h3>
          </div>

          <div className="about-card">
          <i class='bx bxl-dev-to' style={{fontSize:'40px',color:'teal',marginLeft:'100px',marginTop:'50px'}}></i><span  className='about-span' style={{marginBottom:'20px', fontSize:'14px'}}>Development</span>
            <h2 style={{textAlign:'center', marginBottom:'20px', fontSize:'14px', marginTop:'40px'}} >Forensic science and Criminology Android</h2>
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
