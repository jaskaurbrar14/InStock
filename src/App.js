import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import InventoryList from "./Components/InventoryList/InventoryList";
import "./App.scss";

function App() {
  return (
  <BrowserRouter>
  <main>
  <Routes>
    <Route>
    <Route path="/" element={<InventoryList />} />
    </Route>
  </Routes>
  </main>
  {/* <Footer /> */}
  </BrowserRouter>
  );
}

export default App;
