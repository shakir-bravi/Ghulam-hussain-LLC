import React from 'react'
import herobg from "./hero-bg.jpg";
import { Link } from 'react-router-dom';
export default function Hero() {
  return (<>
  
<section style={{backgroundImage:`url(${herobg})`}} className='hero-section'>

<div className="hero-layer">



<div className='heading-1'>

    <h1>highest  Rated  <br/> landscaper in Dubai</h1>
</div>

<div className="hero-custom-logo">

    <div><h1>GH</h1></div>
</div>


<div className="heading-2">

    <h1>Ghulm Hussain <br /> Landscaping  L.L.C <br /> & fencing</h1>
</div>


<div className="hire-now">

  
  <Link className='hire-link' to="https://wa.me/+971545410566?text=Hello%2C%20I%20am%20interested%20in%20your%20services.%0A%0APlease%20send%20more%20details." target={"_blank"}> Hire    <i class="fa-brands fa-whatsapp"></i>
    </Link>
  
  </div>












</div>  </section>
  
  
  
  
  
  
  
  
  
  
  
  
  </>
  )
}
