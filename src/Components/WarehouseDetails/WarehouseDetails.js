import React from "react";
import edit from "../../assets/Icons/edit-24px.svg";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import "./InventoryItemDetails.scss";
import { Link } from "react-router-dom";
function WarehouseDetails() {
  return (
    <section className="Inventory">
      <div className="Inventory__header">
        <Link className="Inventory__header-backlink">
          <img
            className="Inventory__header-backlink-img"
            src={backArrow}
            alt="back arrow icon"
          />
        </Link>{" "}
        <h1 className="Inventory__header-heading">TELEVISION</h1>
        <Link className="Inventory__header-editlink">
          <img
            className="Inventory__header-editlink-img"
            src={edit}
            alt="edit icon"
          />
          <p className="Inventory__header-editlink-text">Edit</p>
        </Link>
      </div>
      <hr className="Inventory__divider" />
      <article className="Inventory__details">
        <div className="Inventory__details-container">
          <div className="Inventory__details-container-description">
            <p className="Inventory__details-container-description-label">
              Item description
            </p>
            <p className="Inventory__details-container-description-text">
              This 50", 4K LED TV provides a crystal-clear picture and vivid
              colors.
            </p>
          </div>
          <div className="Inventory__details-container-category">
            <p className="Inventory__details-container-category-label">
              Category
            </p>
            <p className="Inventory__details-container-category-text">
              Electronics
            </p>
          </div>
        </div>
        <hr className="Inventory__details-divider" />
        <div className="Inventory__details-stock">
          <div className="Inventory__details-stock-status">
            {" "}
            <p className="Inventory__details-stock-status-label">Status</p>
            <p className="Inventory__details-stock-status-text">In Stock</p>
          </div>
          <div className="Inventory__details-stock-quantity">
            {" "}
            <p className="Inventory__details-stock-quantity-label">Quantity</p>
            <p className="Inventory__details-stock-quantity-text">500</p>
          </div>
          <div className="Inventory__details-stock-warehouse">
            {" "}
            <p className="Inventory__details-stock-warehouse-label">
              Warehouse
            </p>
            <p className="Inventory__details-stock-warehouse-text">Manhattan</p>
          </div>
        </div>
      </article>
    </section>
  );
}
export default WarehouseDetails;
