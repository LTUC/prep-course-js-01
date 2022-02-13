import WeatherData from "./WeatherComponent";

function Main(props){
    console.log("props of Main",props); // array of 3 objects
    return(
        <>
        <h2>Weather Data</h2>
        {
            props.arrayOfData.map(object=>{
                return (
                    <WeatherData key={object.date} weatherObject={object}/>
                )
            })
        }
        </>
    )
}

export default Main;