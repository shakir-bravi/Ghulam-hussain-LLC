import React, { useEffect, useState } from 'react'
import Nav from '../common/Nav.jsx';

import "./home.css";
import Hero from './Hero.jsx';
import { AboutSec, Team } from '../about/About.jsx';
import { Link } from 'react-router-dom';
import { ServiceGrid } from '../services/Service.jsx';
import Footer from '../footer/Footer.jsx';

export default function Home() {

const [index,setIndex] =useState(2)


useEffect(() => {


  setTimeout(()=>{
    setIndex((prevIndex) => (prevIndex + 1) %carousel.length)
  },3000)

console.log(index);


});













  return (<>


  <div className="home-landing">

    <Nav/>
    <Hero/>
  <AboutSec/>


{/* Provideing a premium  */}

<div className="Providing-Premium">

<h1>Providing Premium <br /> Landscaping  Since 2010</h1>

<h2>We are dedicated to providing our 
customers with the <br /> highest quality
 products and services. </h2>

</div>


<div className="provideing-simple-carousel">
<div className="prov0d0ng-carousel-bg"></div>

<div className="crousel-div">

<div style={{backgroundImage:`url(${carousel[index]})`}} className="carousel"></div>



</div>


</div>




<div className="Providing-Premium">
  
<h1>Enhance Your Home with Our Custom <br />
Landscaping Services</h1>

</div>




<center> <Link  className='se-al-serv'>SEE ALL SERVIECES</Link></center>




<ServiceGrid/>


<Team/>
<Footer/>




  </div>
  
  
  
  
  
  
  
  </>  )
}




const carousel = [ 
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729917955/ghulam%20Hussain%20Landscaping/wyo32ze0wec0z6wx1d8e.jpg",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729917955/ghulam%20Hussain%20Landscaping/nxsoszusxbms9f5toyy1.jpg",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729917955/ghulam%20Hussain%20Landscaping/t2lcur5iisd3osipe2qm.jpg",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729918673/al-maroo-hostel/u8h8nrd49mn9igrycxqe.jpg",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729918671/al-maroo-hostel/pibfjqtpsjimmsffe1n8.jpg",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729918673/al-maroo-hostel/m2y5jfy2pr3bai5vn6uz.jpg",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729918672/al-maroo-hostel/rwme0lyz3qlehnuzegwu.jpg",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729918672/al-maroo-hostel/gmzc5k7fburh23psmjj5.jpg",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729918673/al-maroo-hostel/m2y5jfy2pr3bai5vn6uz.jpg",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729918672/al-maroo-hostel/t2txtawsszfb0x7llzgb.jpg",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729918672/al-maroo-hostel/gmzc5k7fburh23psmjj5.jpg",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729918671/al-maroo-hostel/i0qcwgr04clddsbzxgbd.jpg",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729918671/al-maroo-hostel/q1soclhnetj4qq5bzak1.jpg",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729918671/al-maroo-hostel/habywkqphbd5uyhou4jj.jpg"


]