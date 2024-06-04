import React from 'react'
import { MdEmail } from "react-icons/md";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { CiFacebook } from "react-icons/ci";
import { IoLogoPinterest } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiGooglePlayLine } from "react-icons/ri";
import Header from './Header';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button> */}
                    <div className="collapse navbar-collapse d-flex w-auto" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-3">
                            <li className="nav-item">
                                <h6 className='text-white'><MdEmail /> <small>fahimshakir786@gmail.com</small></h6>
                            </li>
                            <li className="nav-item">
                                <h6 className='text-white'><MdEmail /> <small>fahim.shakir40</small></h6>
                            </li>
                            <li className="nav-item">
                                <h6 className='text-white'><MdOutlineWifiCalling3 /><small>09718925775</small></h6>
                            </li>
                            <li className="nav-item">
                                <h6 className='text-white'><SiWhatsapp /> <small>09268751849</small></h6>
                            </li>
                        </ul>

                        <ul className="navbar-nav mx-5 me-auto mb-2 mb-lg-0 d-flex gap-3">
                            <li className="nav-item">
                                <h6 className='text-white'>Follow Us:</h6>
                            </li>
                            <li className="nav-item">
                                <h6 className='text-white'><CiFacebook /></h6>
                            </li>
                            <li className="nav-item">
                                <h6 className='text-white'><IoLogoPinterest /></h6>
                            </li>
                            <li className="nav-item">
                                <h6 className='text-white'><BsTwitterX /></h6>
                            </li>
                            <li className="nav-item">
                                <h6 className='text-white'><FaLinkedinIn /></h6>
                            </li>
                            <li className="nav-item">
                                <h6 className='text-white'><FaInstagram /></h6>
                            </li>
                            <li className="nav-item">
                                <h6 className='text-white'><FaGithub /></h6>
                            </li>
                            <li className="nav-item">
                                <h6 className='text-white'><RiGooglePlayLine /></h6>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Header />

        </div>
    )
}

export default Navbar





