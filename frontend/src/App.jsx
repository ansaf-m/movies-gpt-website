import "./Component/css/App.css";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import { MovieProvider } from "./contexts/MovieContexts";

function App() {
  const MovieNumber = 2;
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favourites" element={<Favourites />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
