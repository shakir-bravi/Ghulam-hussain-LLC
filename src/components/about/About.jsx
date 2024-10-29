import React from 'react'
import "./about.css"
import abouflowers from "./about-bg.png"
import Nav from '../common/Nav'
// import teamBg from ""



function AboutPage() {
  return (<>


  <div className="about-body">

<Nav/>



<div style={{backgroundImage:"url(https://images.unsplash.com/photo-1646840093996-09ccf344180d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}} className="about-hero">



  <div  className="hero-heading-one">
  <h1 style={{fontFamily:"'Kavivanar', cursive"}}>You deserve the best in <br /> landscape design, build & <br /> maintenance.</h1>  

  <p>Founded in 2010,  Ghulam Hussain L.L.C offers a proven track record of professional, quality, landscape design, installation and maintenance services. With a vast array of services and custom builds, our team can help you create your dream landscape environment.</p>
  </div>

  
</div>















  </div>















</>  )
}



function AboutSec() {  
    return (<>
    

    <section className='about-sec'>

<center><h1>About</h1></center>

<p>contracting of Gardening  Landscaping & agriculture All Kinds Indoor-Outdoor Plants Fertilizer & Garden Equipment  & Garden Maintenance - Irrigation & Waterfall.</p>

<div style={{backgroundImage:`url(${abouflowers})`}} className='about-bg'>

</div>

{/* <img src={abouflowers} alt="" /> */}

    </section>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}



 function Team() {
  return (
<>



<div style={{backgroundImage:"url(https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729940495/ghulam%20Hussain%20Landscaping/o38gptupsjroifzkxab8.jpg)"}} className="team-body">

<h1>Transform your yard into the <br />
 ultimate outdoor living space, <br />
 today.</h1>

<center>
<img src="https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729941012/ghulam%20Hussain%20Landscaping/yb9gxxtkmnnbidumr9bd.jpg" alt="" />
</center>


</div>








</>  )
}







export {AboutPage,AboutSec,Team}

const simpleSlider = [

  {
    id:0,
  }
]