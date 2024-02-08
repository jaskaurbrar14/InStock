import React, { useState } from "react";
import DeleteModalWarehouse from "../DeleteModalWarehouse/DeleteModalWarehouse";

function WarehousesList() {
  const [openModal, setOpenModal] = useState(false);
  const modalOpen = () => {
    setOpenModal(true);
  };
  const modalClose = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <button onClick={modalOpen}>delete</button>
      {openModal && <DeleteModalWarehouse modalClose={modalClose} />}
    </div>
  );
}

export default WarehousesList;
