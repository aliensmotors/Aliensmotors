import "./Button.css";


const Button = (props) => {
    return (
        <div  className={`flex my-5 ${props.Position}`}>
            <button  style={{border: "0.5px solid white"}} className="p-2 w-30 hover:bg-white text-white hover:text-black">{props.Text}</button>
        </div>
    )
}

export default Button;