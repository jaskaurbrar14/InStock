import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import EditWarehouse from "./Components/Edit-warehouse/editWarehouse";
import AddWarehouse from "./Components/AddWarehouse/AddWarehouse";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route element={<EditWarehouse />} />
          <Route path="/edit-warehouse" element={<EditWarehouse />} />
          <Route element={<AddWarehouse />} />
          <Route path="/AddWarehouse" element={<AddWarehouse />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
