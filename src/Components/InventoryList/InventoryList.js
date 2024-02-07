import "./InventoryList.scss";
import { useState, useEffect } from "react";

export default function InventoryList(){

    // const getInventory = async () => {
    //     try {
    //         const response = await axios.get(`http://localhost:8080/inventories`);
    //         setVideos(response.data);
    //     } catch (error) {
    //         console.error("error:", error);
    //     }
    // };
    // useEffect(()=>{
    //     getInventory();
    //   },[]);


return(
    <>
    <h1 className="inventorylist__header">Inventory</h1>
    <form className="inventorylist__form">
      <input className="inventorylist__form--searchinput" placeholder="Search..." type="text" id="title" name="title"/>
    </form>
    <button type="submit" className="inventorylist__button--additem">+ Add New Item</button>
    <ul className="inventorylist__list">
        <li className="inventorylist__listitem">INVENTORY ITEM</li>
        <li className="inventorylist__listitem">CATEGORY</li>
        <li className="inventorylist__listitem">STATUS</li>
        <li className="inventorylist__listitem">QTY</li>
        <li className="inventorylist__listitem">WAREHOUSE</li>
        <li className="inventorylist__listitem">ACTIONS</li>
    </ul>
    </>
    );
}