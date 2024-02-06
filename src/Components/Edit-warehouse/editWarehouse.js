import "./editWarehouse.scss";
import backarrow from "../../assets/Icons/arrow_back-24px.svg";
function EditWarehouse() {
  return (
    <section className="editWarehouse">
      <div className="editWarehouse__container">
        <div className="editWarehouse__header-wrapper">
          <div>
            <img src={backarrow} alt="back arrow icon" className="editWarehouse__header-icon" />
          </div>
          <div className="editWarehouse__title-wrap">
            <h1 className="editWarehouse__title">Edit Warehouse</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditWarehouse;
