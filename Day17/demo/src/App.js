import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import { useState } from "react";


function App() {
  const [mode, setMode] = useState(false);
  function handleMode() {
    // alert("mode");
    setMode(!mode)
  }
  return (
    <>
      <h1>React- Day17</h1>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About mode={mode} handleMode={handleMode}/>} />
        <Route path="about/contact" element={<Contact mode={mode}/>} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
}

export default App;
