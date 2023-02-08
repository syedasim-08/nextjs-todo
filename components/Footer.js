import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex justify-center items-center gap-5 py-3'>
    
 <Link href="https://www.instagram.com/" target="_blank">
 <i className="fa-brands fa-instagram duration-300 hover:opacity-30 cursor-pointer"></i>  </Link>
 <Link href="https://in.linkedin.com/" target="_blank">
 <i className="fa-brands fa-linkedin-in duration-300 hover:opacity-30 cursor-pointer"></i></Link>
 <Link href="https://github.com" target="_blank">
 <i className="fa-brands fa-github duration-300 hover:opacity-30 cursor-pointer"></i></Link>
   </div>
  )
}

export default Footer