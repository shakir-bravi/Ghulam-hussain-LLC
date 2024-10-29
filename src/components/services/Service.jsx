import React from 'react'
import "./service.css";

import lanscaping from "./landcaping.jpg";
import { Link } from 'react-router-dom';










 function ServicePage() {
  return (
    <div>Service</div>
  )
}



 function ServiceGrid({}) {

  return (<>





<div className="service-body">

{
  services.map((s,i)=>{

return(<>



<div key ={s.id} className='service-card'>

  <img src={s.img} alt="" />
  <Link to={`http://wa.me/+971545410566?text=Hello Ghulam Hussain Landscaping L.L.C %0A I am genuinely impressed with the quality and attention to detail in your *${s.draft}* work. %0A Could you kindly share more insights into your hardscaping services? %0A Thank you once again for your excellent craftsmanship.`}  className='got-to-service'>{s.text}</Link>
</div>


</>)


  } )
}





</div>





</>  )
}


export {ServiceGrid,ServicePage}








const services = [

  {
    id:0,
    img:"https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729940995/ghulam%20Hussain%20Landscaping/tffslltoteohukw9ykjd.jpg",
    text:"landscapping",
    draft:"Hardscaping"
  },
  
  {

    id:1,
    img:"https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729917955/ghulam%20Hussain%20Landscaping/wyo32ze0wec0z6wx1d8e.jpg",
    text:"hardscapping",
    draft:"Hardscaping"
  },
  {

    id:2,
    img:"https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729940986/ghulam%20Hussain%20Landscaping/uaifku8ddy87qyihultk.jpg",
    text:"garden lighting",
    draft:"Garden Lighting"
  },
  {

    id:3,
    img:"https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729940491/ghulam%20Hussain%20Landscaping/nldcgguw49vvtbbz6re9.jpg",
    text:"tiles fixing",
    draft:"Tiles Fixing"
  },  
  {

    id:4,
    img:"https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729940474/ghulam%20Hussain%20Landscaping/mwuozqyfd1v7mkj8irws.jpg",
    text:"Ferilizer & sweet sand",
    draft:"Fertilizer And Sweet Sand"
  
  },
  {

    id:5,
    img:"https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729940491/ghulam%20Hussain%20Landscaping/rh9vztua8io1ip4ccyxb.jpg",
    text:"pulmbing & interlocks",
    draft:"Plumbing And Interlocks"
  }, 
   {

    id:6,
    img:"https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729917955/ghulam%20Hussain%20Landscaping/nxsoszusxbms9f5toyy1.jpg",
    text:"water falls & painting",
    draft:"Water Falls And Painting"
  },
  {

    id:7,
    img:"https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729940476/ghulam%20Hussain%20Landscaping/pobwiuhwhfyiwaigtue8.jpg",
    text:"wooden gazebo & pergola",
    draft:"Wooden Gazedo And Pebola"
  
  },
  {

    id:8,
    img:"https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729941617/ghulam%20Hussain%20Landscaping/l63iu3tgibsfqtulvnr4.jpg",
    text:"outdoor electrical works ",
    draft:"Outdoor Electrical Works"
  
  },




]