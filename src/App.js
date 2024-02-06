import "./App.scss";
import Header from "./Components/Header/Header";

import { BrowserRouter, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes></Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
