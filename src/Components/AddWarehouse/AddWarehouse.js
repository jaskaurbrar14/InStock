import React, { useState } from "react";
import "./AddWarehouse.scss";
import backarrow from "../../assets/Icons/arrow_back-24px.svg";

function AddWarehouse() {
  const [formData, setFormData] = useState({});

  const [formErrors, setFormErrors] = useState({});

  const handleAddWarehouse = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setFormErrors({ ...formErrors, [field]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    for (const field in formData) {
      if (!formData[field].trim()) {
        validationErrors[field] = `${field} is required`;
      }
    }
    if (
      formData.phoneNumber &&
      !/^(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/.test(
        formData.phoneNumber
      )
    ) {
      validationErrors.phoneNumber = "Invalid phone number";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = "Invalid email address";
    }

    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <section className="addWarehouse">
      <div className="addWarehouse__container">
        <div className="addWarehouse__header-wrapper">
          <div className="addWarehouse__icon-wrap">
            <img
              src={backarrow}
              alt="back arrow icon"
              className="addWarehouse__header-icon"
            />
          </div>
          <div className="addWarehouse__title-wrap">
            <h1 className="addWarehouse__title">Add Warehouse</h1>
          </div>
        </div>
        <form className="addWarehouse__detail-form" onSubmit={handleSubmit}>
          <div className="addWarehouse__detail-form-wrap">
            <div className="addWarehouse__detail">
              <div className="addWarehouse__form-header-wrap">
                <h2 className="addWarehouse__form-header">Warehouse Details</h2>
              </div>
              {renderInput("tes", "Warehouse Name", "Washington")}
              {renderInput(
                "streetAddress",
                "Street Address",
                "33 Pearl Street SW"
              )}
              {renderInput("city", "City", "Washington")}
              {renderInput("country", "Country", "USA")}
            </div>
            <div className="addWarehouse__divider"></div>
            <div className="addWarehouse__detail">
              <div className="addWarehouse__form-header-wrap">
                <h2 className="addtWarehouse__form-header">Contact Details</h2>
              </div>
              {renderInput("contactName", "Contact Name", "Graeme Lyon")}
              {renderInput("position", "Position", "Warehouse Manager")}
              {renderInput("phoneNumber", "Phone Number", "+1 (647) 504-0911")}
              {renderInput("email", "Email", "glyon@instock.com")}
            </div>
          </div>
          <div className="addWarehouse__btn-wrap">
            <div className="addWarehouse__btn-cancel-wrap">
              <button
                type="button"
                className="addWarehouse__btn-cancel"
                //onClick={clearForm}
              >
                Cancel
              </button>
            </div>
            <div className="addWarehouse__btn-save-wrap">
              <button type="submit" className="addWarehouse__btn-save">
                Add Warehouse
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );

  function renderInput(field, label, placeholder) {
    return (
      <div className="addWarehouse__form-name-wrap">
        <p className="addWarehouse__form-name">{label}</p>
        <input
          type="text"
          className="addWarehouse__name-input"
          placeholder={placeholder}
          value={formData[field]}
          onChange={(e) => handleAddWarehouse(field, e.target.value)}
        />
        {formErrors[field] && (
          <span className="addWarehouse__error-message">
            {formErrors[field]}
          </span>
        )}
      </div>
    );
  }
}

export default AddWarehouse;
