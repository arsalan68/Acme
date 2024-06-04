import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
       <div className='m-0' >
         <div className='footerPages'>
            <div className='text-light d-flex justify-content-between m-auto mx-5 mt-5'>
                <div className='ulPages mt-5'>
                   <img src="https://www.ourstaging.in/wp-content/uploads/2024/04/fs-logo.png" className="img-fluid " alt="" />  
                   <p className='mt-3'>My name is Fahim Shakir. In the discipline of Web Development  <br />
                      and Design I am full stack prominent as PHP Programmer / Web  <br />
                      Developer / Web Freelancer. I am reputated by my outstanding  <br />
                         work, excellent programming skills and versatile nature of  <br />
                       program coding with Software and Website Development. I am <br />
                        full stack developed many web based applications. I am persistent <br />
                         in developing the web application as well as dynamic websites</p>
                </div>

                <ul className='ulPages mt-5'>
                    <h6><Link href="" className='text-white'>Usefull Links</Link></h6>
                    <li className='mt-4'><Link href="#">About Us</Link></li>
                    <li><Link href="#">My Resume</Link></li>
                    <li><Link href="#">Our Services</Link></li>
                    <li><Link href="#">Our Portfolio</Link></li>
                    <li><Link href="#">Blog</Link></li>
                    <li><Link href="#">Privacy Policy</Link></li>
                    <li><Link href="#">Terms & Conditions</Link></li>
                </ul>
                <ul className='ulPages mt-5'>
                    <h6><Link href="" className='text-white'>Contact Us</Link></h6>
                    <li className='mt-4'><Link href="#">Block C-11B, Top Floor, New Ashok Nagar,</Link></li>
                    <li><Link href="#">Delhi NCR 110096, India</Link></li>
                    <li><Link href="#">09718925775</Link></li>
                    <li><Link href="#">09268751849</Link></li>
                    <li><Link href="#">Fahimshakir786@Gmail.Com</Link></li>
                    <li><Link href="#">Info@Fahimshakir.Com</Link></li>
                    <li><Link href="#">Fahim.Shakir40</Link></li>
                    </ul>
            </div>
        </div>
        <div className='bgPages mb-10 text-center fw-bold'>
            <p className='px-5 py-2'>Copyright © 2024 Fahim Shakir Web Developer All rights reserved.</p>
        </div>
       </div>

    )
}

export default Footer

