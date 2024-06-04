import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        
                <nav className="Navcomponent  navbar navbar-expand-lg navbar-light bg-white w-auto ">
                    <div className="container-fluid d-flex justify-content-between">
                        <div className='navbar-brand'>
                    <img src="https://www.ourstaging.in/wp-content/uploads/2024/04/fs-logo.png" className="img-fluid" style={{width:'5rem'}} alt="..." />

                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                      
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <h6><Link style={{color:"blue"}} className="nav-link active " aria-current="page" href="#">Home</Link></h6>
                                </li>
                                <li className="nav-item">
                                    <h6><Link className="nav-link" href="#">About Us</Link></h6>
                                </li>
                                <li className="nav-item">
                                    <h6><Link className="nav-link" href="#">Resume</Link></h6>
                                </li>
                                <li className="nav-item">
                                    <h6><Link className="nav-link" href="#">Our Services</Link></h6>
                                </li>
                                <li className="nav-item">
                                    <h6> <Link className="nav-link" href="#">Our Portfolio</Link></h6>
                                </li>
                                <li className="nav-item">
                                    <h6><Link className="nav-link" href="#">Blog</Link></h6>
                                </li>
                                <li className="nav-item">
                                    <h6>  <Link className="nav-link" href="#">Contact Us</Link></h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

         
    )
}

export default Header













// import React from 'react'
// import { Link } from 'react-router-dom'

// const Header = () => {
//     return (
//         <div>
//             <div>
//                 <nav className="navbar navbar-expand-lg navbar-light bg-white">
//                     <div className="container-fluid d-flex justify-content-between">
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon" />
//                         </button>
//                         <div>
//                             <img src="	https://www.ourstaging.in/wp-content/uploads/2024/04/fs-logo.png" className="img-fluid" alt="..." />
//                         </div>
//                         <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//                             <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
//                                 <li className="nav-item">
//                                     <h6><Link style={{color:"blue"}} className="nav-link active " aria-current="page" href="#">Home</Link></h6>
//                                 </li>
//                                 <li className="nav-item">
//                                     <h6><Link className="nav-link" href="#">About Us</Link></h6>
//                                 </li>
//                                 <li className="nav-item">
//                                     <h6><Link className="nav-link" href="#">Resume</Link></h6>
//                                 </li>
//                                 <li className="nav-item">
//                                     <h6><Link className="nav-link" href="#">Our Services</Link></h6>
//                                 </li>
//                                 <li className="nav-item">
//                                     <h6> <Link className="nav-link" href="#">Our Portfolio</Link></h6>
//                                 </li>
//                                 <li className="nav-item">
//                                     <h6><Link className="nav-link" href="#">Blog</Link></h6>
//                                 </li>
//                                 <li className="nav-item">
//                                     <h6>  <Link className="nav-link" href="#">Contact Us</Link></h6>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>

//             </div>
//         </div>
//     )
// }

// export default Header