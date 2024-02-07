import "./editWarehouse.scss";
import backarrow from "../../assets/Icons/arrow_back-24px.svg";
function EditWarehouse() {
  return (
    <section className="editWarehouse">
      <div className="editWarehouse__container">
        <div className="editWarehouse__header-wrapper">
          <div className="editWarehouse__icon-wrap">
            <img
              src={backarrow}
              alt="back arrow icon"
              className="editWarehouse__header-icon"
            />
          </div>
          <div className="editWarehouse__title-wrap">
            <h1 className="editWarehouse__title">Edit Warehouse</h1>
          </div>
        </div>
        <form className="editWarehouse__detail-form">
         <div className="editWarehouse__detail-form-wrap">
         <div className="editWarehouse__detail">
            <div className="editWarehouse__form-header-wrap">
              <h2 className="editWarehouse__form-header">Warehouse Details</h2>
            </div>
            <div className="editWarehouse__form-name-wrap">
              <p className="editWarehouse__form-name">Warehouse Name</p>
              <input type="text" className="editWarehouse__name-input" id="" placeholder="Washington" />
            </div>
            <div className="editWarehouse__form-name-wrap">
              <p className="editWarehouse__form-name">Street Address</p>
              <input
                type="text"
                className="editWarehouse__name-input"
                id=""
                placeholder="33 Pearl Street SW"
              />
            </div>
            <div className="editWarehouse__form-name-wrap">
              <p className="editWarehouse__form-name">City</p>
              <input type="text" className="editWarehouse__name-input" id="" placeholder="Washington" />
            </div>
            <div className="editWarehouse__form-name-wrap">
              <p className="editWarehouse__form-name">Country</p>
              <input type="text" className="editWarehouse__name-input" id="" placeholder="USA" />
            </div>
          </div>
          <div className="editWarehouse__divider"></div>
         <div className="editWarehouse__detail">
         <div className="editWarehouse__form-name-wrap">
            <div className="editWarehouse__form-header-wrap">
              <h2 className="editWarehouse__form-header">Contact Details</h2>
            </div>
            <div className="editWarehouse__form-name-wrap">
              <p className="editWarehouse__form-name">Contact Name</p>
              <input type="text" className="editWarehouse__name-input" id="" placeholder="Graeme Lyon" />
            </div>
            <div className="editWarehouse__form-name-wrap">
              <p className="editWarehouse__form-name">Position</p>
              <input
                type="text"
                className="editWarehouse__name-input"
                id=""
                placeholder="Warehouse Manager"
              />
            </div>
            <div className="editWarehouse__form-name-wrap">
              <p  className="editWarehouse__form-name">Phone Number</p>
              <input
                type="text"
                className="editWarehouse__name-input"
                id=""
                placeholder="+1 (647) 504-0911"
              />
            </div>
            <div  className="editWarehouse__form-name-wrap">
              <p className="editWarehouse__form-name">Email</p>
              <input
                type="text"
                className="editWarehouse__name-input"
                id=""
                placeholder="glyon@instock.com"
              />
            </div>
          </div>
         </div>
         </div>
          <div className="editWarehouse__btn-wrap">
            <div className="editWarehouse__btn-cancel-wrap">
              <button className="editWarehouse__btn-cancel">Cancel</button>
            </div>
            <div className="editWarehouse__btn-save-wrap">
              <button className="editWarehouse__btn-save">Save</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EditWarehouse;
