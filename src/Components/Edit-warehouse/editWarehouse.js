import React, { useState } from "react";
import "./editWarehouse.scss";
import backarrow from "../../assets/Icons/arrow_back-24px.svg";

function EditWarehouse() {
    const [formData, setFormData] = useState({
        warehouseName: "",
        streetAddress: "",
        city: "",
        country: "",
        contactName: "",
        position: "",
        phoneNumber: "",
        email: "",
      });

      const [formErrors, setFormErrors] = useState({});

      const handleInputChange = (field, value) => {
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
  
      if (
        formData.email &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      ) {
        validationErrors.email = "Invalid email address";
      }
  
      if (Object.keys(validationErrors).length > 0) {
        setFormErrors(validationErrors);
        return;
      }
      console.log("Form submitted:", formData);
      clearForm();
    };
    const clearForm = () => {
      setFormData({
        warehouseName: "",
        streetAddress: "",
        city: "",
        country: "",
        contactName: "",
        position: "",
        phoneNumber: "",
        email: "",
      });
  
      setFormErrors({});
    };
    
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
        <form className="editWarehouse__detail-form" onSubmit={handleSubmit}>
          <div className="editWarehouse__detail-form-wrap">
            <div className="editWarehouse__detail">
              <div className="editWarehouse__form-header-wrap">
                <h2 className="editWarehouse__form-header">Warehouse Details</h2>
              </div>
              {renderInput("warehouseName", "Warehouse Name", "Washington")}
              {renderInput("streetAddress", "Street Address", "33 Pearl Street SW")}
              {renderInput("city", "City", "Washington")}
              {renderInput("country", "Country", "USA")}
            </div>
            <div className="editWarehouse__divider"></div>
            <div className="editWarehouse__detail">
              <div className="editWarehouse__form-header-wrap">
                <h2 className="editWarehouse__form-header">Contact Details</h2>
              </div>
              {renderInput("contactName", "Contact Name", "Graeme Lyon")}
              {renderInput("position", "Position", "Warehouse Manager")}
              {renderInput("phoneNumber", "Phone Number", "+1 (647) 504-0911")}
              {renderInput("email", "Email", "glyon@instock.com")}
            </div>
          </div>
          <div className="editWarehouse__btn-wrap">
            <div className="editWarehouse__btn-cancel-wrap">
              <button type="button" className="editWarehouse__btn-cancel" onClick={clearForm}>
                Cancel
              </button>
            </div>
            <div className="editWarehouse__btn-save-wrap">
              <button type="submit" className="editWarehouse__btn-save">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );

  function renderInput(field, label, placeholder) {
    return (
      <div className="editWarehouse__form-name-wrap">
        <p className="editWarehouse__form-name">{label}</p>
        <input
          type="text"
          className="editWarehouse__name-input"
          placeholder={placeholder}
          value={formData[field]}
          onChange={(e) => handleInputChange(field, e.target.value)}
        />
        {formErrors[field] && <span className="editWarehouse__error-message">{formErrors[field]}</span>}
      </div>
    );
  }
}

export default EditWarehouse;

