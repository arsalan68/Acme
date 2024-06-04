import React from 'react'
import Footer from './Footer';
import Slidercard from './Slidercard';

const Home = () => {
  return (
    <div>
      <div className="row ">
        <div className="col-sm-7 Pagebackground text-white  " >
          <div style={{ marginLeft: '3rem', marginTop: '4rem', marginRight: '3rem' }}>
            <h6 ><svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" viewBox="0 0 40 16" fill="none"><rect x="0.5" y="0.5" width="25.6667" height="15" rx="7.5" stroke="#384BFF"></rect><rect x="13.3334" width="26.6667" height="16" rx="8" fill="#384BFF"></rect></svg> BEST IT SOULTION PROVIDER</h6>
            <h1 className='mt-4' style={{ fontSize: '3.5rem' }} >Excellent It Services for Your Success</h1>
            <p className='mt-4'><small>Consectetur adipiscing elit aenean scelerisque at augue  vitae consequat <br /> quisque eget congue velit in cursus leo sed sodales est eget turpis.</small></p>
            <button type="button" class="btn btn-danger mt-2">Explore More</button>
          </div>
        </div>

        <div className="col-sm-5 Pagebackground text-center" >
          <img src="https://www.ourstaging.in/wp-content/uploads/2024/04/hero.png" className="img-fluid " style={{ height: '400px' }} alt="..." />
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-content mt-1"> WordPress Development IT Solution Woocommerce Development Woocommerce Development Magento Development Joomla Development PHP Development 3rd Party APIs Integration </div>
      </div>

      <div className="row px-5 py-5">
        <div className="col-sm-4 mt-4 ms-5">
          <div className="image-container">
            <img
              src="https://www.ourstaging.in/wp-content/uploads/2024/04/01.jpg"
              className="img-fluid firstimg"
              alt="Background"
            />
            <img
              src="https://www.ourstaging.in/wp-content/uploads/2024/04/02.jpg"
              className="img-fluid overlay-image imagetwo"
              alt="Overlay"
            />
          </div>
        </div>
        
        <div className="col-sm-6 " style={{marginLeft:'120px'}}>
          <div className="row text-primary text-center">ABOUT INFOTECK</div>
          <h2>We Are Increasing Business Success With <span style={{color: "blue"}}>Technology</span></h2>
          <div className="row mt-4">It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point.</div>
          <div className="row mt-4">
            <div className="col">
             <h3>Problem Solving</h3>
             <p>Aliquam erat volutpat Nullam imperdiet</p>
            </div>
            <div className="col">
             <h3>Mission & Vision</h3>
             <p>Aliquam erat volutpat Nullam imperdiet</p>
            </div>

          </div>
          <div className="row mt-4 w-50">
          <button type="button" className="btn btn-primary">Explore More</button>
          </div>
        </div>
      </div>
      <Slidercard/>
      <Footer/>
    </div> 
     
  )
}

export default Home
