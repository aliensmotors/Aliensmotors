import ProductsObj from '../JSONObjects/ProductsObj';
import Products from "../Components/Products/Products";
import "./HomePage.css";
const HomePage = () => {
    return (
        <div id="ProductContainer" >
        {ProductsObj.map(function(Product){
        return <Products
         Name={Product.Name}
         Description={Product.Decription}
         bgImg={Product.Images.Image0}
        />  
        })}
        </div>
    )
}


export default HomePage;