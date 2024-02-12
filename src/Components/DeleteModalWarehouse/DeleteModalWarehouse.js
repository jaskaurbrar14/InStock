import React, { useEffect, useRef } from "react";
import close from "../../assets/Icons/close-24px.svg";
import ReactDom from "react-dom";
import "./DeleteModalWarehouse.scss";
import axios from "axios";

export default function DeleteModalWarehouse({ modalClose, warehouse }) {
  const modalRef = useRef(null);

  const id = warehouse.id;
  const handleDelete = async () => {
    try {
      await axios.delete(`${REACT_APP_SERVER_URL}/api/warehouses/:${id}`);
      modalClose();
    } catch (error) {
      console.error("Error deleting warehouse:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        modalClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalClose]);
  return ReactDom.createPortal(
    <div className="modal">
      <article className="modal__container" ref={modalRef}>
        <button className="modal__container-close" onClick={modalClose}>
          <img
            className="modal__container-close-img"
            src={close}
            alt="close icon"
          />
        </button>

        <h3 className="modal__container-heading">
          Delete {warehouse.warehouse_name} warehouse?
        </h3>
        <p className="modal__container-description">
          Please confirm that you'd like to delete the{" "}
          {warehouse.warehouse_name} from the list of warehouses. you won't be
          able to undo this action.
        </p>
        <div className="modal__container-cta">
          <button className="modal__container-cta-cancel" onClick={modalClose}>
            Cancel
          </button>
          <button
            className="modal__container-cta-delete"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </article>
    </div>,
    document.getElementById("portal")
  );
}
