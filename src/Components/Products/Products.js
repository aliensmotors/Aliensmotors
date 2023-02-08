import "./Products.css";
import { useNavigate } from "react-router-dom";





const Products = (props) => {
   const navigate   = useNavigate();
   const HandleClick= ()=>{
    navigate(`/${props.Name}`)
   }
    return (
   
 <div id="Product-item" style={{backgroundImage: `url(${props.bgImg})`,backgroundRepeat:"no-repeat"}} className="flex flex-col h-screen justify-evenly md:px-12 px-8 md:py-40 bg-cover bg-right " >

 <div className="Upper-half text-white">
 <div className="flex flex-row items-center">
 <span><div className="w-5 h-0.5 bg-white rounded-lg mx-1"></div></span>
                <p>  INTRODUCING THE</p>
 </div>
                <h1 className="font-semibold text-6xl">{props.Name}</h1>
                <p className="m-3  text-3xl">{props.Description}</p>
                <div className="flex md:flex-col lg:flex-col">
                <button className="bg-gray-700 text-white rounded p-2 w-40 md:w-80 m-3" onClick={HandleClick} >Know More</button> 
                </div>
            </div>   

               

        </div>
        
    
       
    )
}

export default Products;