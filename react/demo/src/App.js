import UserInfo from './components/UserInfo';
import MemeList from './components/MemeList';
import memeData from "./data/data.json";

function App() {
  // let name="Neveen";
  const info = {
    name : "Neveen",
    food: "ozi",
    favColor: "blue"
  }
  return (
    <>
      <h1 style={{ color: "blue" }}>Hello React!</h1>
      <p>This is my first React Component</p>
      {/* <UserInfo name="Neveen"  food="Ozi" favColor="blue"/> */}
      <UserInfo username={info.name}  food={info.food} favColor={info.favColor} data={memeData}/>
      <MemeList  data={memeData}/>
    </>
  );
}

export default App;
