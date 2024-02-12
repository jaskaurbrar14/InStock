import { useState, useEffect } from "react";
import "./EditInventoryItem.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backarrow from "../../assets/Icons/arrow_back-24px.svg";
import dropdown from "../../assets/Icons/arrow_drop_down-24px.svg";
import ErrorIcon from "../../assets/Icons/error-24px.svg";

function EditInventoryItem() {
  // const [inventory, setInventory] = useState([]);
  // const [formData, setFormData] = useState({
  //   itemName: "",
  //   description: "",
  //   category: "",
  //   status: "In Stock",
  //   quantity: 0,
  //   warehouse: "",
  // });

  // const [formErrors, setFormErrors] = useState({});

  // const handleInputChange = (field, value) => {
  //   setFormData({ ...formData, [field]: value });
  //   setFormErrors({ ...formErrors, [field]: "" });
  // };

  // const handleStatusChange = (status) => {
  //   setFormData({
  //     ...formData,
  //     status,
  //     quantity: status === "Out of Stock" ? 0 : formData.quantity,
  //   });
  // };
  // const validateForm = async () => {
  //   const validationErrors = {
  //     itemName: !formData.itemName.trim() ? "Item Name is required" : "",
  //     description: !formData.description.trim()
  //       ? "Description is required"
  //       : "",
  //     category: !formData.category.trim() ? "Category is required" : "",
  //     quantity:
  //       formData.status === "In Stock" && formData.quantity <= 0
  //         ? "Quantity must be greater than 0"
  //         : "",
  //       warehouse: !formData.warehouse ? "Warehouse is required" : "",
  //   };
  //   return validationErrors;
  // };
  // const handleAddItem = async (e) => {
  //   e.preventDefault();

  //   const validationErrors = await validateForm();

  //   if (Object.values(validationErrors).some((error) => !!error)) {
  //     setFormErrors(validationErrors);
  //     return;
  //   }

  //   const newItem = { ...formData, id: Date.now() };
  //   setInventory([...inventory, newItem]);

  //   setFormData({
  //     itemName: "",
  //     description: "",
  //     category: "",
  //     status: "In Stock",
  //     quantity: 0,
  //     warehouse: "",
  //   });
  //   setFormErrors({});
  //   onClose();
  // };
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
      .get("http://localhost:8080/api/warehouses")
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
    setFormData(prevFormData => ({
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

      await axios.post("http://localhost:8080/api/inventories", newInventory);
      navigate("/inventories");
    } catch (error) {
      console.error("Error adding inventory:", error);
    }
  };
  return (
    <section className="editinventoryitem">
      <div className="editinventoryitem__wrap">
        <div className="editinventoryitem__header-wrap">
          <div className="editinventoryitem__icon-wrap">
            <img
              src={backarrow}
              alt="back arrow icon"
              className="editinventoryitem__header-icon"
            />
          </div>
          <div className="editinventoryitem__title-wrap">
            <h1 className="editinventoryitem__title">Edit Inventory Item</h1>
          </div>
        </div>
        <div>
          <form action="" className="editinventoryitem__detail-form">
            <div className="editinventoryitem__detail-form-container">
              <div className="editinventoryitem__detail">
                <div className="editinventoryitem__form-header-wrap">
                  <h2 className="editinventoryitem__form-header">Item Details</h2>
                </div>
                <div className="editinventoryitem__form-detail">
                  <p className="editinventoryitem__form-name">Item Name</p>
                  <input
                    type="text"
                    placeholder="Item Name"
                    className="editinventoryitem__form-input ${formErrors.itemName ? 'error' : ''}`}"
                    value={formData.item_name}
                    onChange={(e) =>
                      handleInputChange("itemName", e.target.value)
                    }
                  />
                  {formErrors.item_name && (
                    <div className="add-inventory__error">
                    <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
                    {formErrors.item_name}
                  </div>
                  )}
                </div>
                <div>
                  <p className="editinventoryitem__form-name">Description</p>
                  <textarea
                    type="text"
                    placeholder="Please enter a brief item description..."
                    className="editinventoryitem__form-input-des ${formErrors.description ? 'error' : ''}`}"
                    rows={5}
                    name="description"
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                  />
                  {formErrors.description && (
                    <span className="editinventoryitem__error-message-description">
                      {formErrors.description}
                    </span>
                  )}
                </div>
                <div>
                  <p className="editinventoryitem__form-name">Category</p>
                  <input
                    type="text"
                    placeholder="Item Name"
                    className="editinventoryitem__form-category-name ${formErrors.category ? 'error' : ''}`}"
                    value={formData.category}
                    onChange={(e) =>
                      handleInputChange("category", e.target.value)
                    }
                  />
                  {formErrors.category && (
                    <span className="editinventoryitem__error-message-category">
                      {formErrors.category}
                    </span>
                  )}
                </div>
              </div>
              <div className="editWarehouse__divider"></div>
              <div className="editinventoryitem__detail">
                <div className="editinventoryitem__form-header-wrap">
                  <h2 className="editinventoryitem__form-header">
                    Item Availability
                  </h2>
                </div>
                <div>
                  <p className="editinventoryitem__form-name">Status</p>
                  <div className="editinventoryitem__form-radio-wrap">
                    <div className="editinventoryitem__form-radio-inwrap">
                      <input
                        type="radio"
                        name="status"
                        value="In Stock"
                        checked={formData.status === "In Stock"}
                        onChange={handleStatusChange}
                      />
                      <span className="editinventoryitem__form-radio">In stock</span>
                    </div>
                    <div className="editinventoryitem__form-radio-inwrap">
                    <input
                      type="radio"
                        name="status"
                        value="Out of Stock"
                        checked={formData.status === "Out of Stock"}
                        onChange={handleStatusChange}
                    />
                      <span className="editinventoryitem__form-radio">
                        Out of stock
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="editinventoryitem__form-name">Warehouse</p>
                  <input
                    type="text"
                    placeholder="Please select"
                    className="editinventoryitem__form-category-name"
                    value={formData.warehouse}
                    onChange={(e) =>
                      handleInputChange("warehouse", e.target.value)
                    }
                  />
                  {formErrors.warehouse && (
                    <span className="editinventoryitem__error-message-warehouse">
                      {formErrors.warehouse}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="editinventoryitem__btn-wrap">
              <div className="editinventoryitem__btn-cancel-wrap">
                <button className="editinventoryitem__btn-cancel" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
              <div className="editinventoryitem__btn-addItem-wrap">
                <button
                  className="editinventoryitem__btn-addItem"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EditInventoryItem;
