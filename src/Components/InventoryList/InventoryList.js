import "./InventoryList.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg"
import editIcon from "../../assets/Icons/edit-24px.svg"
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
<main>
  <section className="inventorylist__headparent">
  <h1 className="inventorylist__header">Inventory</h1>
    <section className="inventorylist__form--parent">
        <form className="inventorylist__form--form">
          <input className="inventorylist__form--searchinput" placeholder="Search..." type="text" id="title" name="title"/>
        </form>
        <button type="submit" className="inventorylist__form--additembutton">+ Add New Item</button>
    </section>
  </section>


  <div className="inventorylist__container">
    <section className="inventorylist__title--parent">
            <div className="inventorylist__detailparent">
              <div className="inventorylist__wrapper">
                <div className="inventorylist__detail">
                  <p className="inventorylist__title">INVENTORY ITEM</p>
                  <p className="inventorylist__value--product">Television</p>
                </div>
                <div className="inventorylist__detail">
                  <p className="inventorylist__title">CATEGORY</p>
                  <p className="inventorylist__value">Electronics</p>
                </div>
              </div>

              <div className="inventorylist__wrapper">
                <div className="inventorylist__detail">
                  <p className="inventorylist__title">STATUS</p>
                  <p className="inventorylist__value availability1 availability2">IN STOCK</p>
                </div>
                <div className="inventorylist__detail">
                  <p className="inventorylist__title">QTY</p>
                  <p className="inventorylist__value">500</p>
                </div>
                <div className="inventorylist__detail">
                  <p className="inventorylist__title">WAREHOUSE</p>
                  <p className="inventorylist__value">Manhattan</p>
                </div>
              </div>
            </div>
          <p className="inventorylist__title--tabletdesktop">ACTIONS</p>
    </section>
    <section className="inventorylist__button">
        <button className="inventorylist__button--delete">
          <img src={deleteIcon} alt="publish icon"/>
        </button>
        <button className="inventorylist__button--edit">
          <img src={editIcon} alt="publish icon"/>
        </button>
    </section>
  </div>




  <div className="inventorylist__container">
    <section className="inventorylist__title--parent">
            <div className="inventorylist__detailparent">
              <div className="inventorylist__wrapper">
                <div className="inventorylist__detail">
                  <p className="inventorylist__title">INVENTORY ITEM</p>
                  <p className="inventorylist__value--product">Television</p>
                </div>
                <div className="inventorylist__detail">
                  <p className="inventorylist__title">CATEGORY</p>
                  <p className="inventorylist__value">Electronics</p>
                </div>
              </div>

              <div className="inventorylist__wrapper">
                <div className="inventorylist__detail">
                  <p className="inventorylist__title">STATUS</p>
                  <p className="inventorylist__value availability1 availability2">IN STOCK</p>
                </div>
                <div className="inventorylist__detail">
                  <p className="inventorylist__title">QTY</p>
                  <p className="inventorylist__value">500</p>
                </div>
                <div className="inventorylist__detail">
                  <p className="inventorylist__title">WAREHOUSE</p>
                  <p className="inventorylist__value">Manhattan</p>
                </div>
              </div>
            </div>
          <p className="inventorylist__title--tabletdesktop">ACTIONS</p>
    </section>
    <section className="inventorylist__button">
        <button className="inventorylist__button--delete">
          <img src={deleteIcon} alt="publish icon"/>
        </button>
        <button className="inventorylist__button--edit">
          <img src={editIcon} alt="publish icon"/>
        </button>
    </section>
  </div>







</main>
    );
}