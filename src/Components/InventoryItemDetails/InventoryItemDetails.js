import React, { useEffect, useRef } from "react";
import edit from "../../Assets/Icons/edit-24px.svg";
import backArrow from "../../Assets/Icons/arrow_back-24px.svg";
import ReactDom from "react-dom";
import "./InventoryItemDetails.scss";

import React from "react";

function InventoryItemDetails() {
  return (
    <section>
      <div>
        <button>
          <img src={backArrow} alt="back arrow icon" />
        </button>{" "}
        <h1>TELEVISION</h1>
        <button>
          <img src={edit} alt="edit icon" />
        </button>
      </div>
      <hr />
      <article>
        <div>
          <p>Item description</p>
          <p>
            This 50", 4K LED TV provides a crystal-clear picture and vivid
            colors.
          </p>
        </div>
        <div>
          {" "}
          <p>Category</p>
          <p>Electronics</p>
        </div>
        <div>
          <div>
            {" "}
            <p>Status</p>
            <p></p>
          </div>
          <div>
            {" "}
            <p>Quantity</p>
            <p>500</p>
          </div>
          <div>
            {" "}
            <p>Warehouse</p>
            <p>Manhattan</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default InventoryItemDetails;
