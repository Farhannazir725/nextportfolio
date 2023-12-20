import React from 'react'
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <section id="error-page">
        <div className="content">
            <h2 className="header">404</h2>
            <h4>Sorry! This Page is Not Found</h4>
            <p>
                Oops ! It seems like the page you're trying to access dosen't exists.
                If you believe there's an issue, feel free to report it , and we'll look into it.
            </p>
            <div className="btns">
                <Link href='/'>Return Home</Link>
                <Link href='/contact'>Report Problem</Link>
            </div>
        </div>
      </section>
    </>
  )
}
