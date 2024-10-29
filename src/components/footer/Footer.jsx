import React from 'react';
import "./footer.css"
import logo from "../common/nav-logo.png"
import { Link } from 'react-router-dom';

export default function Footer() {

  const text = ` hello Dear Masroor ! \n<b> How are you </b>` 
  return (


    <div style={{backgroundImage:"url(https://i.pinimg.com/1200x/99/a1/64/99a16414bc8caf27e3a28433c9c1c5d0.jpg)"}} className="footer-body">




<div className='footer-gh'>


    <div style={{display:"flex" ,justifyContent:"center",alignItems:"center"}}>
<img src={logo} alt="" />
<h2>Ghulam <br />Hussain</h2>
</div>
<div>
<h2>LANDSCAPING L.L.C</h2>

</div>
</div>



<div className="footer-icons-div">
<Link  to="https://wa.me/923313190104?text=Hello%2C%20I%20am%20interested%20in%20your%20services.%0A%0APlease%20send%20more%20details." target='_main' className='footer-Link' ><i class="fa-brands fa-facebook-f"></i></Link>
{/* <Link   to="https://wa.me/923313190104?text=Hello!%20Please%20check%20out%20this%20image:%20https://cdn.pixabay.com/photo/2017/01/31/22/47/tree-2027899_1280.png" target='_main' className='footer-Link' ><i class="fa-brands fa-facebook-f"></i></Link> */}
<Link  className='footer-Link'><i class="fa-brands fa-instagram"></i></Link>
<Link  className='footer-Link'><i class="fa-brands fa-pinterest"></i></Link>
</div>



<div className="footer-date">

    <p>Monday-to-friday ~ 9 :00 AM - 900 PM    </p>
    <p style={{textDecoration:"underline 1px solid white" , textUnderlineOffset:"2px"}}>+971 54 541 0566</p>
</div>



<div className="footer-links-div">



<div>
<p>featured</p>

<Link className='footer-links' >Home</Link>
<Link className='footer-links'> About</Link>
<Link className='footer-links'>Services</Link>
<Link className='footer-links'>Contact</Link>
  </div>

  <div>
<p>Services</p>

<Link className='footer-links' >Landscaping</Link>
<Link className='footer-links'>Plumbing</Link>
<Link className='footer-links'>Electrical works</Link>
<Link className='footer-links'>........</Link>
  </div>
  




</div>




<div className="footer-copyright-div">
  <p style={{color:"#ffffffbd"}}>copyright</p>
  <p style={{color:"white",marginTop:"5px"}}>@ 2024 Ghulam Hussain L.L.C Dubai</p>
</div>








    </div>
  )
}
