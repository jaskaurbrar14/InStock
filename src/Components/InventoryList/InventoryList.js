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
  <section className="header__headparent">
  <h1 className="header__header">Inventory</h1>
    <section className="header__form--parent">
        <form className="header__form--form">
          <input className="header__form--searchinput" placeholder="Search..." type="text" id="title" name="title"/>
        </form>
        <button type="submit" className="header__form--additembutton">+ Add New Item</button>
    </section>
  </section>

  

  <div className="table__mobilecontainer">
    <section className="table__title--parent">
            <div className="table__detailparent">
              <div className="table__wrapper">
                <div className="table__detail">
                  <p className="table__title">INVENTORY ITEM</p>
                  <p className="table__value--product">Television</p>
                </div>
                <div className="table__detail">
                  <p className="table__title">CATEGORY</p>
                  <p className="table__value">Electronics</p>
                </div>
              </div>

              <div className="table__wrapper">
                <div className="table__detail">
                  <p className="table__title">STATUS</p>
                  <p className="table__value status1 status2">IN STOCK</p>
                </div>
                <div className="table__detail">
                  <p className="table__title">QTY</p>
                  <p className="table__value">500</p>
                </div>
                <div className="table__detail">
                  <p className="table__title">WAREHOUSE</p>
                  <p className="table__value">Manhattan</p>
                </div>
              </div>
            </div>
    </section>
    <section className="table__button">
        <button className="table__button--delete">
          <img src={deleteIcon} alt="publish icon"/>
        </button>
        <button className="table__button--edit">
          <img src={editIcon} alt="publish icon"/>
        </button>
    </section>
  </div>

  <div className="table__mobilecontainer">
    <section className="table__title--parent">
            <div className="table__detailparent">
              <div className="table__wrapper">
                <div className="table__detail">
                  <p className="table__title">INVENTORY ITEM</p>
                  <p className="table__value--product">Television</p>
                </div>
                <div className="table__detail">
                  <p className="table__title">CATEGORY</p>
                  <p className="table__value">Electronics</p>
                </div>
              </div>

              <div className="table__wrapper">
                <div className="table__detail">
                  <p className="table__title">STATUS</p>
                  <p className="table__value status1 status2">IN STOCK</p>
                </div>
                <div className="table__detail">
                  <p className="table__title">QTY</p>
                  <p className="table__value">500</p>
                </div>
                <div className="table__detail">
                  <p className="table__title">WAREHOUSE</p>
                  <p className="table__value">Manhattan</p>
                </div>
              </div>
            </div>
    </section>
    <section className="table__button">
        <button className="table__button--delete">
          <img src={deleteIcon} alt="publish icon"/>
        </button>
        <button className="table__button--edit">
          <img src={editIcon} alt="publish icon"/>
        </button>
    </section>
  </div>






  <table className="tabletablet">
  <tr className="tabletablet__title">
    <th className="tabletablet__title--item">INVENTORY ITEM</th>
    <th className="tabletablet__title--item">CATEGORY</th>
    <th className="tabletablet__title--item">STATUS</th>
    <th className="tabletablet__title--item">QTY</th>
    <th className="tabletablet__title--item">WAREHOUSE</th>
    <th className="tabletablet__title--item1">ACTIONS</th>
  </tr>

  <tr className="tabletablet__row">
    <td className="tabletablet__data--product">Television</td>
    <td className="tabletablet__data">Electronics</td>
    <td className="tabletablet__data">
    <span className="tabletablet__data--span status3 status4">
        IN STOCK
    </span>
    </td>
    <td className="tabletablet__data">500</td>
    <td className="tabletablet__data">Manhattan</td>
    <td className="tabletablet__data">
      <section className="table__button">
          <button className="table__button--delete">
           <img src={deleteIcon} alt="publish icon"/>
          </button>
         <button className="table__button--edit">
           <img src={editIcon} alt="publish icon"/>
          </button>
      </section>
    </td>
  </tr>





  
  <tr className="tabletablet__row">
    <td className="tabletablet__data--product">Television</td>
    <td className="tabletablet__data">Electronics</td>
    <td className="tabletablet__data">
      <span className="tabletablet__data--span status3 status4">
        IN STOCK
      </span>
    </td>
    <td className="tabletablet__data">500</td>
    <td className="tabletablet__data">Manhattan</td>
    <td className="tabletablet__data">
      <section className="table__button">
          <button className="table__button--delete">
           <img src={deleteIcon} alt="publish icon"/>
          </button>
         <button className="table__button--edit">
           <img src={editIcon} alt="publish icon"/>
          </button>
      </section>
    </td>
  </tr>




</table>
</main>
    );
}