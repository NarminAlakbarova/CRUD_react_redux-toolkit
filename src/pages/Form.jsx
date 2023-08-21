import React, { useState } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer } from "../redux/slice/addCustomerSlice";
import { editCustomer } from "../redux/slice/editCustomerSlice";
const Form = () => {
  const editingCustomer = useSelector((state) => state.editCustomer.data);
  console.log(editingCustomer);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    companyName: editingCustomer ? editingCustomer.companyName : "",
    contactName: editingCustomer ? editingCustomer.contactName : "",
    phone: editingCustomer ? editingCustomer.address?.phone : "",
  });
  console.log(formData);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormField = (fieldName, label, type) => {
    return (
      <div key={fieldName} className="form-group">
        <label htmlFor={fieldName}>{label}</label>
        <input
          type={type}
          value={formData[fieldName]}
          onChange={handleInputChange}
          name={fieldName}
          required
        />
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      companyName: formData.companyName,
      contactName: formData.contactName,
      address: {
        phone: formData.phone,
      },
    };
    setFormData({
      companyName: "",
      contactName: "",
      phone: "",
    });
    editingCustomer ? dispatch(editCustomer({data:obj,id:editingCustomer.id})) : dispatch(addCustomer(obj));
  };
  return (
    <div className="form">
      <form action="" onSubmit={handleSubmit}>
        {handleFormField(
          "companyName",
          "Company Name",
          "text",
          formData.companyName
        )}
        {handleFormField(
          "contactName",
          "Contact Name",
          "text",
          formData.contactName
        )}
        {handleFormField("phone", "Phone", "tel", formData.phone)}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
