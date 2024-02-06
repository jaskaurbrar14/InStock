import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <main className="main">
        <Routes>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )

}

export default App;
