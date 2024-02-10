import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import EditWarehouse from "./Components/Edit-warehouse/editWarehouse";
import WarehouseList from "./Components/WarehouseList/WarehouseList";
import AddInventory from "./Components/Add-Inventory/add-inventory";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<WarehouseList />} />
          <Route path="/edit-warehouse" element={<EditWarehouse />} />
          <Route path="/add-inventory" element={<AddInventory />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
