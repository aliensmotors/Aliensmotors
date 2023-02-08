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
        <img style={{aspectRatio:"3/1.5"}} src={props.Image} className=" m-auto"></img>
        </div>
        <div data-aos="fade-up" className="mx-8 md:w-6/12 lg:w-6/12">
            <h1 className="text-black text-md font-bold ">{props.Heading}</h1>
            <h1 className="text-black text-md ">{props.Decription}</h1>
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
             <img className="object-contain" src={ ProductsObj[0].Images.Image7}></img>
         
           <div>
         

           </div>

        </section>
        </div>
    )
}
// Section 1 End ----------------------------------------------------------------

//Section 2 Start  ----------------------------------------------------------------

const Section2 = () => {
    return (
        <div>
        <section style={{backgroundColor:"#fbfffa"}} className="px-10 py-10 ">
        <div className="flex flex-col md:flex-col lg:flex-row items-center  max-w-6xl m-auto">
        <div className=" ">
        <video  src="https://github.com/TusharGeek/AliensWebsite/raw/main/src/Assets/GravityPlusImg/Overview.mov" autoPlay muted playsInline className="w-screen object-cover" ></video>
        </div>
       <div className="md:w-10/12 md:text-left">
        <h1 data-aos="fade-up"  className="font-bold text-2xl">Safe. Relaxing. Good to ride in. Subtly decorated.</h1>
        <p data-aos="fade-up"  className="text-lg">The Gravity+ sits right at the heart of the big-selling mid-size crossover crowd.  They produce zero emissions, which makes them better for the environment and helps to reduce air pollution. They are also typically cheaper to operate, as electricity is generally cheaper than gasoline and electric cars require less maintenance than internal combustion engines.</p>
       </div>
        </div>
     </section> 
        </div>
    )
}

// Section 2 End ----------------------------------------------------------------

// Section 3 (Carousel) Start  ----------------------------------------------------------------


// Section 3 End ----------------------------------------------------------------


// Section 4 Start ----------------------------------------------------------------
const Section4 = () => {
    return (
<div>
<section className=" bg-white py-10 max-w-6xl m-auto">
<div className="mx-5">
     <h1 data-aos='fade'  className="font-bold text-4xl">
        Turning Concepts into Reality 
     </h1>
        </div>
     <div>
        <Specifications
         Heading="Room for Everything"
         Decription="With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too."
         css ="md:flex-row"
         Image={ProductsObj[0].Images.Image4}
        />
     </div>
     <div>
        <Specifications
         Heading="Stay Connected"
         Decription="Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."
         css ="md:flex-row-reverse"
         Image={ProductsObj[0].Images.Image2}
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
    <section className=" bg-black text-wite max-w-8xl m-auto px-10 py-10 lg:flex lg:justify-evenly lg:items-evenly   " >
    <div  className=" md:w-7/12 w-12/12">
    <img src={ProductsObj[0].Images.Image22} className=""></img>
    
    </div>
    <div className="lg:w-4/12 ">
    <div className="my-1">
    <p className="my-4 text-white">
    <span className="text-3xl  font-bold ">{ProductsObj[0].Name}</span> Specifications
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

      //Hooks to change Map
      const [Map, SetMap] = useState(Map2);

      const HandleClickMap1 = () => {
        SetMap(Map2);

      }
      const HandleClickMap2 = () => {
        SetMap(Map1);
      }

     // Hooks to change Specs 
     
     const [SpecsImg, SetSpecsImg] = useState(ProductsObj[0].Images.Image12);

     const HandleClickDriveMode = () => {
        SetSpecsImg(ProductsObj[0].Images.Image12);
     }

     const HandleClickBatteryRange = () => {
        SetSpecsImg(ProductsObj[0].Images.Image13);
     }

     const HandleClickPower = () => {
        SetSpecsImg(ProductsObj[0].Images.Image14);
     }

     const HandleClickAirBags = () => {
        SetSpecsImg(ProductsObj[0].Images.Image15);
     }

     const HandleClickMultimedia= () => {
        SetSpecsImg(ProductsObj[0].Images.Image16);
     }


    //  Hooks for Tech Section 

    const [TechImg, SetTechImg] = useState(ProductsObj[0].Images.Image17);


     const HandleClickRadar = () => {
        SetTechImg(ProductsObj[0].Images.Image17);
     }

     const HandleClickSensor = () => {
        SetTechImg(ProductsObj[0].Images.Image18);
     }

     const HandleClickCamera = () => {
        SetTechImg(ProductsObj[0].Images.Image19);
     }

     const HandleClickLaser = () => {
        SetTechImg(ProductsObj[0].Images.Image20);
     }

     const HandleClick360view = () => {
        SetTechImg(ProductsObj[0].Images.Image21);
     }




return (
    <div   className="bg-white">
    <Section1 />
 
{/* Section Specs */}
<div>
<div className="p-8 max-w-6xl m-auto">
     <h1 data-aos='fade-up'  className="font-bold text-4xl">
        A pure experience.<br/>
        <span className="text-gray-400">Considerate mobility has never looked so fresh.</span>

     </h1>
            <div className="flex justify-around my-5 md:flex-row  flex-col ">
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


{/* Section 2 */}
<Section2/>

<div data-aos="fade-up"  class="container ">
  <img className="GalleryImg" src={ProductsObj[0].Images.Image8}/>
  <img className="GalleryImg" src={ProductsObj[0].Images.Image9}/>
  <img className="GalleryImg" src={ProductsObj[0].Images.Image10}/>
  <img className="GalleryImg" src={ProductsObj[0].Images.Image11}/>
</div>

<Section4/>


<Section5/>

{/* Map Section */}
<div className=" bg-black h-full w-full py-10">
<img src={Map} style={{aspectRatio:"3/2"}} className="object-fit">
</img>
   <div className="text-white  p-8 max-w-6xl m-auto">
     <h1 data-aos='fade-up'  className="font-bold text-4xl">
        Freedom to Travel
     </h1>
     <div className="my-4 flex flex-wrap"> 
     <button   onClick={HandleClickMap1} style={{border:"2px solid white",borderStyle:" solid none none none",padding:"5px 11px",margin:"5px"}} className={`transition-all ease-out ${Map==Map2?'opacity-100':'opacity-40'}`}>Dubai - Abu Dhabi<br/><span className="font-semibold text-2xl">135 Km</span></button>
     <button   onClick={HandleClickMap2} style={{border:"2px solid white",borderStyle:" solid none none none",padding:"5px 11px",margin:"5px"}} className={`${Map==Map1?'opacity-100':'opacity-40'} transition-all ease-out`}>Abu Dhabi - Doha<br/><span className="font-semibold text-2xl">549 Km</span></button>
     </div>
     </div>
</div>


{/* Section end */}


{/* SectionStart  */}
<div className="bg-black h-full w-full py-10">
    <img className="object-fit m-auto" src={SpecsImg}></img>
    <div className="text-white  p-8 max-w-6xl m-auto">
     <h1 data-aos='fade-up'  className="font-bold text-4xl">
        Why Gravity?
     </h1>
     <div className="my-4 flex flex-wrap "> 
     <button   onClick={HandleClickDriveMode} style={{border:"2px solid white",borderStyle:" solid none none none",padding:"5px 11px",margin:"5px",width:"9rem"}} className={`transition-all ease-out ${SpecsImg==ProductsObj[0].Images.Image12?'opacity-100':'opacity-40'}`}>Drive Mode</button>
     <button  onClick={HandleClickBatteryRange} style={{border:"2px solid white",borderStyle:" solid none none none",padding:"5px 11px",margin:"5px",width:"9rem"}} className={`${SpecsImg==ProductsObj[0].Images.Image13?'opacity-100':'opacity-40'} transition-all ease-out`}>Battery</button>
     <button  onClick={HandleClickPower} style={{border:"2px solid white",borderStyle:" solid none none none",padding:"5px 11px",margin:"5px",width:"9rem"}} className={`${SpecsImg==ProductsObj[0].Images.Image14?'opacity-100':'opacity-40'} transition-all ease-out`}>Power</button>
     <button   onClick={HandleClickAirBags} style={{border:"2px solid white",borderStyle:" solid none none none",padding:"5px 11px",margin:"5px",width:"9rem"}} className={`${SpecsImg==ProductsObj[0].Images.Image15?'opacity-100':'opacity-40'} transition-all ease-out`}>Air Bags</button>
     <button  onClick={HandleClickMultimedia} style={{border:"2px solid white",borderStyle:" solid none none none",padding:"5px 11px",margin:"5px",width:"9rem"}} className={`${SpecsImg==ProductsObj[0].Images.Image16?'opacity-100':'opacity-40'} transition-all ease-out`}>Multimedia</button>
     </div>
     </div>
</div>

{/* Section End */}


{/* Section Start */}

<div className="bg-black h-full w-full py-10">
    <img className="object-fit m-auto" src={TechImg}></img>
    <div className="text-white  p-8 max-w-6xl m-auto">
     <h1  data-aos='fade-up'  className="font-bold text-4xl">
        Future Tech
     </h1>
     <div className="my-4 flex flex-wrap "> 
     <button  onClick={HandleClickRadar} style={{border:"2px solid white",borderStyle:" solid none none none",padding:"5px 11px",margin:"5px",width:"9rem"}} className={`transition-all ease-out ${TechImg==ProductsObj[0].Images.Image17?'opacity-100':'opacity-40'}`}>Multiple Radars</button>
     <button   onClick={HandleClickSensor} style={{border:"2px solid white",borderStyle:" solid none none none",padding:"5px 11px",margin:"5px",width:"9rem"}} className={`${TechImg==ProductsObj[0].Images.Image18?'opacity-100':'opacity-40'} transition-all ease-out`}>Ultrasonic Sensors</button>
     <button  onClick={HandleClickCamera} style={{border:"2px solid white",borderStyle:" solid none none none",padding:"5px 11px",margin:"5px",width:"9rem"}} className={`${TechImg==ProductsObj[0].Images.Image19?'opacity-100':'opacity-40'} transition-all ease-out`}>Multiple Cameras</button>
     <button   onClick={HandleClickLaser} style={{border:"2px solid white",borderStyle:" solid none none none",padding:"5px 11px",margin:"5px",width:"9rem"}} className={`${TechImg==ProductsObj[0].Images.Image20?'opacity-100':'opacity-40'} transition-all ease-out`}>Laser Tech</button>
     <button   onClick={HandleClick360view} style={{border:"2px solid white",borderStyle:" solid none none none",padding:"5px 11px",margin:"5px",width:"9rem"}} className={`${TechImg==ProductsObj[0].Images.Image21?'opacity-100':'opacity-40'} transition-all ease-out`}>360 View Monitoring</button>
     </div>
     </div>
</div>


{/* Section End  */}

 <Section6/> 
  



  

          
    </div>
)
}


export default AboutProduct;