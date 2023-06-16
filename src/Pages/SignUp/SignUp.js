import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/features/authSlice";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Email cannot be empty";
      }
      if (!values.password) {
        errors.password = "Password cannot be empty";
      }
      if (!values.name) {
        errors.name = "Name cannot be empty";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(createUser(values));
      navigate("/login");
    },
  });
  return (
    <div className="flex-container fullscreen">
      <div className="form-title">Sign Up</div>
      <form className="form-card" onSubmit={formik.handleSubmit}>
        <div className="form-element">
          <input
            placeholder="Name"
            className="input-field"
            onChange={formik.handleChange}
            type="text"
            name="name"
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            <div className="input-err">{formik.errors.name}</div>
          )}
        </div>
        <div className="form-element">
          <input
            placeholder="Email"
            className="input-field"
            onChange={formik.handleChange}
            type="text"
            name="email"
          />
          {formik.errors.email && formik.touched.email && (
            <div className="input-err">{formik.errors.email}</div>
          )}
        </div>

        <div className="form-element">
          <input
            placeholder="Password"
            className="input-field"
            onChange={formik.handleChange}
            type="password"
            name="password"
          />
          {formik.errors.password && formik.touched.password && (
            <div className="input-err">{formik.errors.password}</div>
          )}
        </div>
        <button className="button" type="sumbit">
          submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
