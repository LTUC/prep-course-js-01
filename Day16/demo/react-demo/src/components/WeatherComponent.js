import "./weatherStyle.css";

export default function WeatherData(props) {
    console.log("Props in WeatherData",props);
    return (
        <>
            <div style={{color: "blue", backgroundColor: "red"}} id="weather" className="weatherClass">
                <p>{props.weatherObject.date}</p>
                <p>{props.weatherObject.day.condition.text}</p>
                <img src={props.weatherObject.day.condition.icon} alt={props.weatherObject.date} />
            </div>
        </>
    )
}
