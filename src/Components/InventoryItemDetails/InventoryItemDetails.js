import React from "react";
import edit from "../../assets/Icons/edit-24px.svg";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import "./InventoryItemDetails.scss";
import { Link } from "react-router-dom";

function InventoryItemDetails() {
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
        <div className="Inventory__details-description">
          <p className="Inventory__details-description-label">
            Item description
          </p>
          <p className="Inventory__details-description-text">
            This 50", 4K LED TV provides a crystal-clear picture and vivid
            colors.
          </p>
        </div>
        <div className="Inventory__details-category">
          <p className="Inventory__details-category-label">Category</p>
          <p className="Inventory__details-category-text">Electronics</p>
        </div>
        <hr className="Inventory__details-divider" />
        <div className="Inventory__stock">
          <div className="Inventory__stock-status">
            {" "}
            <p className="Inventory__stock-status-label">Status</p>
            <p className="Inventory__stock-status-text">In Stock</p>
          </div>
          <div className="Inventory__stock-quantity">
            {" "}
            <p className="Inventory__stock-quantity-label">Quantity</p>
            <p className="Inventory__stock-quantity-text">500</p>
          </div>
          <div className="Inventory__stock-warehouse">
            {" "}
            <p className="Inventory__stock-warehouse-label">Warehouse</p>
            <p className="Inventory__stock-warehouse-text">Manhattan</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default InventoryItemDetails;
