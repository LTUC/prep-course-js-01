import {useState} from "react";
import { If, Then, Else } from 'react-if';
import LoggIn from "./LoggIn";

export default function Home() {

const [isLoggedIn, setLoggedIn] = useState(false);

    function handleLoggIn(){
        setLoggedIn(!isLoggedIn); // true // false
    }
    
    return (
        <>
            <div style={{ backgroundColor: "blue" }}>
                <h1>Welcome Home! </h1> 
                <LoggIn isLoggedIn={isLoggedIn} handleLogg={handleLoggIn}/>
            </div>
          

            <div>
                <If condition={ !isLoggedIn}>
                    <Then> 
                    <p>Please Log In</p>
                    </Then>
                    <Else>
                    <p>Hello, welcome to our website</p>
                     
                    </Else>
                </If>
            </div>


        </>
    )
}