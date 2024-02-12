import "./WarehouseInventoryList.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg"
import editIcon from "../../assets/Icons/edit-24px.svg"
import arrowBackIcon from "../../assets/Icons/arrow_back-24px.svg"
import {Link} from "react-router-dom";

export default function WarehouseInventoryList(){

return(
<main className="warehouseinventorylist">
  <section className="warehouseheader__headparent">
    <img  className="warehouseheader__backimage" src={arrowBackIcon} alt="arrow back icon" />
    <h1 className="warehouseheader__header">Washington</h1>
    <button type="submit" className="warehouseheader__editbuttonw">
        <img className="warehouseheader__editbuttonw--image" src={editIcon} alt="edit icon" />
        <span className="warehouseheader__editbuttonw--span">Edit</span>
    </button>
  </section>
    <section className="contactinfo__parent">
        <section className="contactinfo__subparent1">
            <p className="contactinfo__title">WAREHOUSE ADDRESS:</p>
            <p className="contactinfo__data">
              33 Pearl Street SW, 
              <br className="contactinfo__break"/>
              Washington, USA
            </p>
        </section>
        <section className="contactinfo__subparent">
            <section className="contactinfo">
                <p className="contactinfo__title">CONTACT NAME:</p>
                <p className="contactinfo__data">
                    Greame Lyon
                    <br />
                    Warehouse Manager
                    </p>
            </section>
            <section className="contactinfo">
                <p className="contactinfo__title">CONTACT INFORMATION:</p>
                <p className="contactinfo__data">
                    +1 (647) 504-0911
                    <br />
                    glyon@instock.com
                </p>
            </section>
        </section>
    </section>
  <div className="table__mobilecontainer">
    <section className="table__title--parent">
            <div className="table__detailparent">
              <div className="table__wrapper">
                <div className="table__detail">
                  <p className="table__title">INVENTORY ITEM</p>
                  <Link to="/inventorylist/:id"><p className="table__value--product">Television</p></Link>
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
              </div>
            </div>
    </section>
    <section className="table__button">
        <button className="table__button--delete">
          <img src={deleteIcon} alt="delete icon"/>
        </button>
        <button className="table__button--edit">
          <img src={editIcon} alt="edit icon"/>
        </button>
    </section>
  </div>
  <div className="table__mobilecontainer">
    <section className="table__title--parent">
            <div className="table__detailparent">
              <div className="table__wrapper">
                <div className="table__detail">
                  <p className="table__title">INVENTORY ITEM</p>
                  <Link to="/inventorylist/:id"><p className="table__value--product">Television</p></Link>
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
              </div>
            </div>
    </section>
    <section className="table__button">
        <button className="table__button--delete">
          <img  className="table__button--deleteimg" src={deleteIcon} alt="delete icon"/>
        </button>
        <button className="table__button--edit">
          <img className="table__button--editimg" src={editIcon} alt="edit icon"/>
        </button>
    </section>
  </div>
  <table className="tabletablet">
  <tr className="tabletablet__title">
    <th className="tabletablet__title--item">INVENTORY ITEM</th>
    <th className="tabletablet__title--item">CATEGORY</th>
    <th className="tabletablet__title--item">STATUS</th>
    <th className="tabletablet__title--item">QUANTITY</th>
    <th className="tabletablet__title--item1">ACTIONS</th>
  </tr>
  <tr className="tabletablet__row">
  <Link to="/inventorylist/:id"><td className="tabletablet__data--product">Television</td></Link>
    <td className="tabletablet__data">Electronics</td>
    <td className="tabletablet__data">
    <span className="tabletablet__data--span status3 status4">
        IN STOCK
    </span>
    </td>
    <td className="tabletablet__data">500</td>
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
  <Link to="/inventorylist/:id"><td className="tabletablet__data--product">Television</td></Link>
    <td className="tabletablet__data">Electronics</td>
    <td className="tabletablet__data">
      <span className="tabletablet__data--span status3 status4">
        IN STOCK
      </span>
    </td>
    <td className="tabletablet__data">500</td>
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