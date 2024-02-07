import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
<<<<<<< HEAD
import EditWarehouse from "./Components/Edit-warehouse/editWarehouse";
import WarehouseList from "./Components/WarehouseList/WarehouseList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <WarehouseList></WarehouseList>
      <main className="main">
        <Routes>
          <Route element={<EditWarehouse />} />
          <Route path="/edit-warehouse" element={<EditWarehouse />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
=======
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
>>>>>>> b6f8b32 (inventory list component initiated- title, search input &  button & list of titles for the table added)
  );
}

export default App;
