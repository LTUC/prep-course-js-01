import Nav from "./Nav"
import { Link } from "react-router-dom";
import { useState } from "react";

export default function About(props) {
    const [color, setColor] = useState("white");

  function handleClick(){
    props.handleMode();
    props.mode?  setColor("black") :setColor("white");
    // console.log(color);
    
  }
    return (
        <>
         <div style={{backgroundColor: color}}>
            {/* <Nav /> */}
            <h1> Welcome About Us</h1>
            <button onClick={handleClick}>Light/ dark Mode</button>
            <nav>
                <Link to="contact">Contact US</Link>
            </nav>
            </div>
        </>
    )
}