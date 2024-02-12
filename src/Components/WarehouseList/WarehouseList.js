import React, { useState, useEffect } from "react";
import axios from "axios";

import DeleteModalWarehouse from "../DeleteModalWarehouse/DeleteModalWarehouse";

import "./WarehouseList.scss";
import "../../Style/Partials/_global.scss";

import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";
import searchIcon from "../../assets/Icons/search-24px.svg";

function WarehouseList() {
  const [openModal, setOpenModal] = useState(false);
  const [warehouses, setWarehouses] = useState([]);
  const modalOpen = () => {
    setOpenModal(true);
  };
  const modalClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const apiUrl = "http://localhost:8080/api/warehouses";
    const fetchWarehouses = async () => {
      try {
        const warehousesResponse = await axios.get(apiUrl);
        setWarehouses(warehousesResponse.data);
      } catch (error) {
        console.error("Error fetching list of warehosues:", error);
      }
    };

    fetchWarehouses();
  }, []);

  return (
    <div className="warehouselist">
      <div className="warehouselist__header">
        <div className="warehouselist__header__title">
          <h1>Warehouses</h1>
        </div>
        <div className="warehouselist__header__search">
          <input placeholder="Search..." name="search" type="input"></input>
        </div>
        <div className="warehouselist__header__addbutton">
          <button>+ Add new Warehouse</button>
        </div>
      </div>
      <div className="warehouselist__items">
        <div className="warehouselist__items__row warehouselist__items__headerrow">
          <div className="warehouselist__items__row__field">
            <p className="warehouselist__items__row__field__mobileonly">
              WAREHOUSE
            </p>
            <img src={sortIcon} alt="sort icon" />
          </div>
          <div className="warehouselist__items__row__field">
            <p className="warehouselist__items__row__field__mobileonly">
              ADDRESS
            </p>
            <img src={sortIcon} alt="sort icon" />
          </div>
          <div className="warehouselist__items__row__field">
            <p className="warehouselist__items__row__field__mobileonly">
              CONTACT NAME
            </p>
            <img src={sortIcon} alt="sort icon" />
          </div>
          <div className="warehouselist__items__row__field warehouselist__items__row__contactinfo">
            <p className="warehouselist__items__row__field__mobileonly">
              CONTACT INFORMATION
            </p>
            <img src={sortIcon} alt="sort icon" />
          </div>
          <div className="warehouselist__items__row__field warehouselist__items__row__action">
            <p className="warehouselist__items__row__field__mobileonly">
              ACTIONS
            </p>
          </div>
        </div>

        {warehouses.map((warehouse) => (
          <div key={warehouse.id} className="warehouselist__items__row">
            <div className="warehouselist__items__row__item">
              <div className="warehouselist__items__row__item__mobileonly">
                <p>WAREHOUSE</p>
              </div>
              <div className="warehouselist__items__row__item__name warehouselist__items__row__item__namelink">
                <p>
                  <a href="#">{warehouse.warehouse_name}</a>
                </p>
                <img
                  className="warehouselist__items__row__item__name"
                  src={chevronIcon}
                  alt="arrow icon"
                />
              </div>
            </div>
            <div className="warehouselist__items__row__item">
              <div className="warehouselist__items__row__item__mobileonly">
                <p>CONTACT NAME</p>
              </div>
              <div>
                <p>{warehouse.contact_name}</p>
              </div>
            </div>
            <div className="warehouselist__items__row__item">
              <div className="warehouselist__items__row__item__mobileonly">
                <p>ADDRESS</p>
              </div>
              <div>
                <p>{warehouse.address}</p>
              </div>
            </div>
            <div className="warehouselist__items__row__item warehouselist__items__row__contactinfo">
              <div className="warehouselist__items__row__item__mobileonly">
                <p>CONTACT INFORMATION</p>
              </div>
              <div>
                <p>{warehouse.contact_phone}</p>
                <p>{warehouse.contact_email}</p>
              </div>
            </div>
            <div className="warehouselist__items__row__actioncol">
              <div>
                <button
                  className="warehouselist__items__row__actioncol__btns"
                  onClick={modalOpen}
                >
                  <img src={deleteIcon} alt="delete button" />
                </button>

                {openModal && <DeleteModalWarehouse modalClose={modalClose} />}
              </div>
              <div>
                <button className="warehouselist__items__row__actioncol__btns">
                  <img src={editIcon} alt="edit button" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default WarehouseList;
