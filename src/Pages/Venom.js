import "./AboutProduct.css";

// Importing Icons
import ProductsObj from "../JSONObjects/ProductsObj";
import AOS from "aos";
import "aos/dist/aos.css";

import { useRef ,useEffect, useLayoutEffect , useState } from "react";

import Button from "../../src/Components/Button/Button";
import "@fontsource/montserrat";

//  Importing maps 
import Map1 from "../../src/Assets/Maps/Map1.jpg";
import Map2 from "../../src/Assets/Maps/Map2.PNG";


// Components Start ----------------------------------------------------------------
const BaseSpecs = (props) => {
    return (
    <div data-aos="fade-up" style={{border: "0.5px solid white",borderStyle:"solid none none none",margin:"auto" }} className="flex justify-between p-2 text-white">
    <p >{props.Property}</p>
    <p>{props.Value}</p>
    </div>
    )
}

const Specifications = (props) => {
    return (
        <div   className={`flex ${props.css} flex-col justify-between items-start md:items-center lg:items-center  my-5 py-5 gap-5`}>
        <div data-aos="fade-up" className="md:w-8/12 lg:w-8/12">
        <img  src={props.Image} className=" m-auto"></img>
        </div>
        <div data-aos="fade-up" className="mx-8 md:w-6/12 lg:w-6/12">
            <h1 className="text-white text-md font-bold ">{props.Heading}</h1>
            <h1 className="text-white text-md ">{props.Decription}</h1>
        </div>
         
        </div>
    )
}

// Map Button Styles 
const defaultStyle = {
    opacity: "0.2"
}
const selectStyle = {
    opacity: "1"
}

// Components End --------------------------------

//Section 1 (Landing Page) Start --------------------------------

const Section1 = () => {

    return(
        <div>
             <section id="Product-Section1"  className="flex flex-col  items-center  bg-right  md:bg-top lg:bg-top" >
             <img className="object-contain" src={ ProductsObj[1].Images.Image7}></img>
         
           <div>
         

           </div>

        </section>
        </div>
    )
}
// Section 1 End ----------------------------------------------------------------





// Section 3 (Carousel) Start  ----------------------------------------------------------------


// Section 3 End ----------------------------------------------------------------


// Section 4 Start ----------------------------------------------------------------
const Section4 = () => {
    return (
<div>
<section className=" bg-black py-10 max-w-6xl m-auto">
<div className="mx-5">
     <h1 data-aos='fade'  className="font-bold text-4xl">
        Turning Concepts into Reality 
     </h1>
        </div>
     <div>
        <Specifications
         Heading="Sample Heading 1"
         Decription="Sample Paragraph 1"
         css ="md:flex-row"
         Image={ProductsObj[1].Images.Image8}
        />
     </div>
     <div>
        <Specifications
         Heading="Sample Heading 2"
         Decription="Sample Paragraph 2"
         css ="md:flex-row-reverse"
         Image={ProductsObj[1].Images.Image13}
        />
        
     </div>
     <div>
        <Specifications
         Heading="Sample Heading 3"
         Decription="Sample Paragraph 3"
         css ="md:flex-row"
         Image={ProductsObj[1].Images.Image12}
        />
        
     </div>
     </section>

</div>
    )
}
// Section 4 End ----------------------------------------------------------------

// Section 5 Start ----------------------------------------------------------------

const Section5 = () => {
    return (
        <div>
 <section className="bg-black  py-10 ">
     <video src="https://github.com/TusharGeek/AliensWebsite/raw/main/src/Assets/GravityPlusImg/Aerodynamics.mov" autoPlay loop muted playsInline className="w-screen object-cover"></video>
     <div className="text-white p-8  flex flex-col max-w-6xl m-auto">
     <div>
     <h1 data-aos='fade-up'  className="font-bold text-4xl">
        Designed for Power and Efficiency
     </h1>
            <p data-aos='fade-up' className="text-2xl">
            600 Km
            
            </p>
            <p data-aos='fade-up' className="text-2xl">
            0-100 Km in 2.1 sec
            </p>
    
     </div>
     <div data-aos="fade-up" >
      <Button
        Position ="items-start"
        Text="Order Now"
      />
     </div>
   
     </div>
    
        
     </section>

        </div>
    )
}

// Section 5 End --------------------------------

const Section6 = () => {
    return (
        <div>
    <section className=" bg-black text-wite max-w-8xl m-auto px-10 py-10 lg:flex lg:justify-evenly lg:items-evenly  " >
    <div  className=" lg:w-5/12">
    <img src={ProductsObj[1].Images.Image14} className=""></img>
    
    </div>
    <div className="lg:w-4/12 ">
    <div className="my-1">
    <p className="my-4 text-white">
    <span className="text-3xl  font-bold ">{ProductsObj[1].Name}</span> Specifications
    </p>
    <h1 data-aos="fade-up" className="font-bold text-white">Base Specs</h1>
    <BaseSpecs
        Property="Range"
        Value="600 Km"
    />
    <BaseSpecs
        Property="0-100 Km/hr"
        Value="2.1 sec"
    />
     <BaseSpecs
        Property="Top Speed"
        Value="260 Km/hr"
    />
     <BaseSpecs
        Property="Peak Power"
        Value="1,020 hp"
    />
    </div>
   
    <div className="my-1">
    <h1 data-aos="fade-up" className="font-bold text-white">Dimensions</h1>
    <BaseSpecs
        Property="Length"
        Value="4749 mm"
    />
    <BaseSpecs
        Property="Height"
        Value="1260 mm"
    />
     <BaseSpecs
        Property="Wheelbase"
        Value="2900 mm"
    />
     <BaseSpecs
        Property="Kerb Weight"
        Value="1450 kg"
    />
      
    </div>
    <div className="my-1">
    <h1 data-aos="fade-up" className="font-bold text-white">Wheels & Tyres</h1>
    <BaseSpecs
        Property="Front Wheels"
        Value="8.5' x 19"
    />
    <BaseSpecs
        Property="Back Wheels"
        Value="12.5' x 20"
    />
    <BaseSpecs
        Property="Front Tyres"
        Value="265/35 ZR 19"
    />
    <BaseSpecs
        Property="Back Tyres"
        Value="345/30 ZR 20"
    />
    </div>
    </div>
   
    </section>
        </div>
    )
}





const AboutProduct = () => {

    useEffect(() => {
        
        AOS.init({duration:1500});
      },[]);





return (
    <div   className="bg-black">
    <Section1 />
 
{/* Section Specs */}
<div className="bg-black text-white">
<div className="p-8 max-w-6xl m-auto " >
   
            <div className="flex justify-around my-5 md:flex-row  flex-col">
            <div data-aos="fade-up" className="mx-2 my-2">
            <p className="font-medium text-2xl">Upto<span className="text-4xl font-bold">418</span> km<br/><span className="text-lg font-light">Electric range</span></p>
            </div>
            <div data-aos="fade-up"  className="mx-2 my-2">
            <p className="font-medium text-2xl"><span className="text-4xl font-bold">4.9</span> s<br/><span className="text-lg font-light">Accleration (0-100 km/h)</span></p>
            </div>
            <div data-aos="fade-up"  className="mx-2 my-2">
            <p className="font-medium text-2xl"><span className="text-4xl font-bold">408</span> hp<br/><span className="text-lg font-light">Power</span></p>
            </div>
            <div data-aos="fade-up"  className="mx-2 my-2">
            <p className="font-medium text-2xl">Around<span className="text-4xl font-bold">28</span> min<br/><span className="text-lg font-light">Fast charge 10-80%</span></p>
            </div>
            </div>
    
     </div>
</div>




<div data-aos="fade-up"  class="container py-5">
  <img className="GalleryImg" src={ProductsObj[1].Images.Image8}/>
  <img className="GalleryImg" src={ProductsObj[1].Images.Image9}/>
  <img className="GalleryImg" src={ProductsObj[1].Images.Image10}/>
  <img className="GalleryImg" src={ProductsObj[1].Images.Image11}/>
</div>

<Section4/>

 <Section6/> 
     
    </div>
)
}


export default AboutProduct;