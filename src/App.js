import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import EditWarehouse from "./Components/Edit-warehouse/editWarehouse";
import AddWarehouse from "./Components/AddWarehouse/AddWarehouse";
import WarehouseList from "./Components/WarehouseList/WarehouseList";
import InventoryList from "./Components/InventoryList/InventoryList";
import AddInventory from "./Components/Add-Inventory/add-inventory";
// import WarehouseInventoryList from "./Components/WarehouseInventoryList/WarehouseInventoryList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<WarehouseList />} />
          <Route path="/edit-warehouse" element={<EditWarehouse />} />
          <Route element={<AddWarehouse />} />
          <Route path="/AddWarehouse" element={<AddWarehouse />} />
          <Route path="/inventorylist" element={<InventoryList />} />
          <Route path="/add-inventory" element={<AddInventory />} />
          {/* <Route path="/warehouseinventorylist" element={<WarehouseInventoryList />} /> */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
