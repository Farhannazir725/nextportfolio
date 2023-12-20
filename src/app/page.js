import Link from 'next/link';


export default function Home() {
  return (
  <>
  <section className="container grid grid-two-cols home">
  <div className="home-content">
        <h3>Hey, It's Me</h3>
        <h2>Madhav Goyal</h2>
        <h3><span>Foresic Expert</span></h3>
        <p>I am a Very highly dedicated, professional and educated forensic expert. I have experienced private as well as government forensic labs which is recognised by ISO, NABL and many more.</p>
        <div className="home-i">   
            <Link href="https://www.facebook.com/forensic.mart" ><i className='bx bxl-facebook'></i></Link>
            <Link href="/" ><i className='bx bxl-youtube'></i></Link>
            <Link href="/" ><i className='bx bxl-instagram'></i></Link>
            <Link href="tel: +917986512092" ><i className='bx bxl-whatsapp'></i></Link>
        </div>
        <Link href="/" className="btn-box"> More Information</Link>
    </div>
    <div className='image'>
      <img src="/images/profile.png" style={{backgroundColor:"#fff", borderRadius:"70px",marginBottom:"20px"}}  width={400} height={400} alt="" />
    </div>
  </section>
  </>
  )
}
