import { useState, useEffect } from "react";
import "./add-inventory.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backarrow from "../../Assets/Icons/arrow_back-24px.svg";
import ErrorIcon from "../../Assets/Icons/error-24px.svg";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function AddInventory() {
  const navigate = useNavigate();
  const [warehouses, setWarehouses] = useState([]);
  const [formData, setFormData] = useState({
    item_name: "",
    description: "",
    category: "",
    status: "In Stock",
    quantity: 0,
    warehouse_id: "",
  });

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    axios
    .post(`${REACT_APP_SERVER_URL}/warehouses`)
      .then((response) => {
        setWarehouses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching warehouses:", error);
      });
  }, []);

  const handleStatusChange = (event) => {
    const { name, value } = event.target;
    console.log(formData);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (formErrors[name]) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleCancel = () => {
    navigate("/inventories");
  };

  const handleSave = async () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });
    setFormErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }
    try {
      const formattedDateTime = new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");

      const newInventory = {
        ...formData,
        created_at: formattedDateTime,
        updated_at: formattedDateTime,
      };

      if (formData.status === "Out of Stock") {
        newInventory.quantity = 0;
      }

      await axios.post(`${REACT_APP_SERVER_URL}/warehouses/${selectedWarehouseId}/inventories`, newInventory);
  navigate("/inventories");
    } catch (error) {
      console.error("Error adding inventory:", error);
    }
  };
  return (
    <section className="addinventory">
      <div className="addinventory__wrap">
        <div className="addinventory__header-wrap">
          <div className="addinventory__icon-wrap">
            <img
              src={backarrow}
              alt="back arrow icon"
              className="addinventory__header-icon"
              onClick={handleCancel}
            />
          </div>
          <div className="addinventory__title-wrap">
            <h1 className="addinventory__title">Add New Inventory Item</h1>
          </div>
        </div>
        <div>
          <form action="" className="addinventory__detail-form">
            <div className="addinventory__detail-form-container">
              <div className="addinventory__detail">
                <div className="addinventory__form-header-wrap">
                  <h2 className="addinventory__form-header">Item Details</h2>
                </div>
                <div className="addinventory__form-detail">
                  <p className="addinventory__form-name">Item Name</p>
                  <input
                    type="text"
                    placeholder="Item Name"
                    className="addinventory__form-input"
                    value={formData.item_name}
                    onChange={handleInputChange}
                  />
                  {formErrors.item_name && (
                    <div className="addinventory__error">
                      <img
                        src={ErrorIcon}
                        className="error-icon"
                        alt="Error Icon"
                      />
                      {formErrors.item_name}
                    </div>
                  )}
                </div>
                <div>
                  <p className="addinventory__form-name">Description</p>
                  <textarea
                    type="text"
                    placeholder="Please enter a brief item description..."
                    className="addinventory__form-input-des"
                    rows={5}
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                  ></textarea>
                  {formErrors.description && (
                    <div className="addinventory__error">
                      <img
                        src={ErrorIcon}
                        className="error-icon"
                        alt="Error Icon"
                      />
                      {formErrors.description}
                    </div>
                  )}
                </div>
                <div>
                  <p className="addinventory__form-name">Category</p>
                  <div className="addinventory__dropdown-container">
                    <select
                      className="addinventory__dropdown"
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                    >
                      <option value="">Please select</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Gear">Gear</option>
                      <option value="Apparel">Apparel</option>
                      <option value="Accessories">Accessories</option>
                      <option value="Health">Health</option>
                    </select>
                  </div>

                  {formErrors.category && (
                    <div className="addinventory__error">
                      <img
                        src={ErrorIcon}
                        className="error-icon"
                        alt="Error Icon"
                      />
                      {formErrors.category}
                    </div>
                  )}
                </div>
              </div>
              <div className="editWarehouse__divider"></div>
              <div className="addinventory__detail">
                <div className="addinventory__form-header-wrap">
                  <h2 className="addinventory__form-header">
                    Item Availability
                  </h2>
                </div>
                <div>
                  <p className="addinventory__form-name">Status</p>
                  <div className="addinventory__form-radio-wrap">
                    <div>
                      <input
                        type="radio"
                        name="status"
                        value="In Stock"
                        checked={formData.status === "In Stock"}
                        onChange={handleStatusChange}
                      />
                      In Stock
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="status"
                        value="Out of Stock"
                        className="addinventory__form-radio"
                        checked={formData.status === "Out of Stock"}
                        onChange={handleStatusChange}
                      />
                      Out of stock
                    </div>
                  </div>
                </div>
                {formData.status === "In Stock" && (
                  <div className="addinventory__form-name-quantity">
                    <p className="addinventory__form-name">Quantity</p>
                    <input
                      type="number"
                      placeholder="0"
                      className="addinventory__form-input"
                      value={formData.quantity}
                      onChange={handleStatusChange}
                    />
                    {formErrors.quantity && (
                      <div className="addinventory__error">
                        <img
                          src={ErrorIcon}
                          className="error-icon"
                          alt="Error Icon"
                        />
                        {formErrors.quantity}
                      </div>
                    )}
                  </div>
                )}
                <div>
                  <p className="addinventory__form-name">Warehouse</p>
                  <select
                    className="addinventory__dropdown"
                    id="warehouse"
                    name="warehouse_id"
                    value={formData.warehouse_id}
                    onChange={handleInputChange}
                  >
                    <option value="">Please select</option>
                    {warehouses.map((warehouse) => (
                      <option key={warehouse.id} value={warehouse.id}>
                        {warehouse.warehouse_name}
                      </option>
                    ))}
                  </select>

                  {formErrors.warehouse_id && (
                    <div className="addinventory__error">
                      <img
                        src={ErrorIcon}
                        className="error-icon"
                        alt="Error Icon"
                      />
                      {formErrors.warehouse_id}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="addinventory__btn-wrap">
        <div className="addinventory__btn-cancel-wrap">
          <button className="addinventory__btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
        <div className="addinventory__btn-addItem-wrap">
          <button className="addinventory__btn-addItem" onClick={handleSave}>
            + Add Item
          </button>
        </div>
      </div>
    </section>
  );
}

export default AddInventory;
