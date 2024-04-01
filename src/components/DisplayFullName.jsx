import React, { useState } from "react";

const DisplayFullName = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Full Name Display</h1>
        <label htmlFor="">First Name: </label>
        <input type="text" name="firstname" onChange={handleChange} required />
        <br />
        <label htmlFor="">Last Name: </label>
        <input type="text" name="lastname" onChange={handleChange} required />
        <br />
        <button type="submit">Submit</button>
      </form>
      {isSubmit && (
        <p>
          Full Name: {formData.firstname} {formData.lastname}
        </p>
      )}
    </div>
  );
};

export default DisplayFullName;
