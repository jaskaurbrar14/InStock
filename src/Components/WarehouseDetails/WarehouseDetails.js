// import React, { useState } from "react";
// import Sort from "../../assets/icons/sort-24px.svg";
// import Delete from "../../assets/icons/delete_outline-24px.svg";
// import Edit from "../../assets/icons/edit-24px.svg";
// import Right from "../../assets/icons/chevron_right-24px.svg";
// import Arrow from "../../assets/icons/arrow_back-24px.svg";
// import { Link } from "react-router-dom";
// import DeleteItem from "../DeleteItem/DeleteItem";
// import axios from "axios";
// import "../InventoryList/InventoryList.scss";

// const WarehouseDetails = ({ warehousesList, inventoryList }) => {
//   const [display, setDisplay] = useState(false);
//   const [singleItem, setSingleItem] = useState({});

//   const showModal = () => {
//     setDisplay(true);
//   };

//   const cancelModal = () => {
//     setDisplay(false);
//   };

//   const deleteInventory = (
//     id,
//     warehouseID,
//     warehouseName,
//     itemName,
//     description,
//     category,
//     status,
//     quantity
//   ) => {
//     const deletedInventory = {
//       id: id,
//       warehouseID: warehouseID,
//       warehouseName: warehouseName,
//       itemName: itemName,
//       description: description,
//       category: category,
//       status: status,
//       quantity: quantity,
//     };

//     axios
//       .delete("http://localhost:8080/inventories", deletedInventory)
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => console.log(err));
//   };

//   const findItem = (id, warehouseID) => {
//     const foundIt = inventoryList.find(
//       (item) => item.id === id && item.warehouseID === warehouseID
//     );
//     console.log(foundIt);

//     setSingleItem(foundIt);
//   };

//   return (
//     <>
//       {warehousesList.map((item) => (
//         <div className="warehouseInventoryLocation" key={item.id}>
//           <div className="warehouseInventoryLocation__name-container">
//             <div className="warehouseInventoryLocation__img-name-container">
//               <img src={Arrow} alt="arrow back" />
//               <h1 className="warehouseInventoryLocation__name">{item.name}</h1>
//             </div>
//             <button className="warehouseInventoryLocation__button">
//               {" "}
//               Edit
//             </button>
//           </div>
//           <hr className="warehouseInventoryLocation__hr" />
//           <div className="warehouseInventoryLocation__sub">
//             <div className="warehouseInventoryLocation__address-container">
//               <h3 className="warehouseInventoryLocation__address-heading">
//                 WAREHOUSE ADDRESS:
//               </h3>
//               <p className="warehouseInventoryLocation__address">
//                 {item.address}
//               </p>
//               <p className="warehouseInventoryLocation__city">
//                 {item.city}, {item.country}
//               </p>
//             </div>
//             <div className="warehouseInventoryLocation__left-container">
//               <div className="warehouseInventoryLocation__contact-name-container">
//                 <h3 className="warehouseInventoryLocation__contact-name-heading">
//                   CONTACT NAME:
//                 </h3>
//                 <p className="warehouseInventoryLocation__contact-name">
//                   {item.contact.name}
//                 </p>
//                 <p className="warehouseInventoryLocation__contact-position">
//                   {item.contact.position}
//                 </p>
//               </div>
//               <div className="warehouseInventoryLocation__contact-information-container">
//                 <h3 className="warehouseInventoryLocation__contact-information-heading">
//                   CONTACT INFORMATION
//                 </h3>
//                 <p className="warehouseInventoryLocation__contact-information-phone">
//                   {item.contact.phone}
//                 </p>
//                 <p className="warehouseInventoryLocation__contact-information-email">
//                   {item.contact.email}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//       {/* Rest of your JSX code */}
//     </>
//   );
// };

// export default WarehouseDetails;
