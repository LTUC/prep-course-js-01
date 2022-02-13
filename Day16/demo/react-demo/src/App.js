import Header from "./components/Header";
import Main from "./components/Main";
import EventHandeling from "./components/EventHandeling";
import StateExample from "./components/StateExample";

const weatherData = require("./data.json");

// import weatherData from "./data.json";

export default function App(){
  return(
    <>
    <Header/>
    <StateExample/>
    <EventHandeling/>
    <Main  arrayOfData={weatherData}/>
  
    </>
  )
}

// export default App;