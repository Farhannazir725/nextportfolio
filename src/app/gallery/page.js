'use client';
import React, { useState } from 'react'
import Link from'next/link'
import media from './../../navbar/media';


export default function Gallery() {
  const[file,setFile]= useState(null);
  return (
    <>
    
    <section id='gallery'>
    <div className="services" id="services">
    <h1 className="sub-title" style={{color:'white'}}>My<span>Gallery </span></h1>
        <div className="container">
            <div className="services-list row">
              {
                media.map((file, index) =>(
                  <div className='col-lg-4' key={index} onClick={()=>setFile(file)}>
                  {
                    <img src={file.image} alt="" />
                  }
                    <Link href="/" className="read">More Details</Link>
                </div>

                ))
              }

            </div>
        </div>
    </div>

<div className="popup-media" style={{display: file ? 'block' : 'none'}}>
  <span onClick={()=>setFile(null)}>&times;</span>

    {
      <img src={file?.image} alt="" />
    }

</div>

</section>
    
    </>
  )
}
