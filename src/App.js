import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import EditWarehouse from "./Components/Edit-warehouse/editWarehouse";
import WarehouseList from "./Components/WarehouseList/WarehouseList";
import InventoryList from "./Components/InventoryList/InventoryList";
import EditInventoryItem from "./Components/EditInventoryItem/EditInventoryItem";
// import WarehouseInventoryList from "./Components/WarehouseInventoryList/WarehouseInventoryList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <WarehouseList></WarehouseList> */}
      <main className="main">
        <Routes>
          <Route path="/" element={<WarehouseList />} />
          <Route path="/edit-warehouse" element={<EditWarehouse />} />
          {/* <Route path="/warehouseinventorylist" element={<WarehouseInventoryList />} /> */}
          <Route path="/inventorylist" element={<InventoryList />} />
          <Route path="/editinventoryitem" element={<EditInventoryItem />} />
          {/* <Route path="/warehouseinventorylist" element={<WarehouseInventoryList />} /> */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
