import "./WarehouseInventoryList.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg"
import editIcon from "../../assets/Icons/edit-24px.svg"
import arrowBackIcon from "../../assets/Icons/arrow_back-24px.svg"
import {Link} from "react-router-dom";

export default function WarehouseInventoryList(){

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
<main className="warehouseinventorylist">
  <section className="header__headparent">
    <img  className="header__backimage" src={arrowBackIcon} alt="arrow back icon" />
    <h1 className="header__header">Washington</h1>
    <button type="submit" className="header__editbutton">
        <img className="header__editbutton--image" src={editIcon} alt="edit icon" />
        <span className="header__editbutton--span">Edit</span>
    </button>
  </section>

    <section className="contactinfo__parent">
        <section className="contactinfo">
            <p className="contactinfo__title">WAREHOUSE ADDRESS:</p>
            <p className="contactinfo__data">33 Pearl Street SW, Washington, USA</p>
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
                  <label className="table__title">INVENTORY ITEM</label>
                  <Link to="/inventorylist/:id"><p className="table__value--product">Television</p></Link>
                </div>
                <div className="table__detail">
                  <label className="table__title">CATEGORY</label>
                  <p className="table__value">Electronics</p>
                </div>
              </div>

              <div className="table__wrapper">
                <div className="table__detail">
                  <label className="table__title">STATUS</label>
                  <p className="table__value status1 status2">IN STOCK</p>
                </div>
                <div className="table__detail">
                  <label className="table__title">QTY</label>
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

  <div className="table__mobilecontainer">
    <section className="table__title--parent">
            <div className="table__detailparent">
              <div className="table__wrapper">
                <div className="table__detail">
                  <label className="table__title">INVENTORY ITEM</label>
                  <Link to="/inventorylist/:id"><p className="table__value--product">Television</p></Link>
                </div>
                <div className="table__detail">
                  <label className="table__title">CATEGORY</label>
                  <p className="table__value">Electronics</p>
                </div>
              </div>

              <div className="table__wrapper">
                <div className="table__detail">
                  <label className="table__title">STATUS</label>
                  <p className="table__value status1 status2">IN STOCK</p>
                </div>
                <div className="table__detail">
                  <label className="table__title">QTY</label>
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
    <th className="tabletablet__title--item">QTY</th>
    <th className="tabletablet__title--item">WAREHOUSE</th>
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
  <Link to="/inventorylist/:id"><td className="tabletablet__data--product">Television</td></Link>
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