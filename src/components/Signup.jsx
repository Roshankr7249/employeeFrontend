import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Signup = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword:"",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/user/register", {
        email: inputs.email,
        password: inputs.password,
        confirmPassword: inputs.confirmPassword,
      });
      if (data.success) {
        alert("User Register Successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="Signup">
      <form action=""  onSubmit={handleSubmit}>
        <div>
          <button>Register</button>
          <button>Login</button>
        </div>

        <div>
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            className="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            className="password"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Confirm Password"
            name="Confirm"
            className="Password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="signupbtn">
          Signup
        </button>
        
      </form>
    </div>
  );
};

export default Signup;
