import React from "react";
import "../../App.css";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../../redux/features/currentUserSlice";

function Login() {
  const navigate = useNavigate();
  const users = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
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
      return errors;
    },
    onSubmit: (values) => {
      let isUserExist = false;
      let matchedUser = null;
      users.map((user, i) => {
        if (user.email.toLowerCase() === values.email.toLowerCase()) {
          isUserExist = true;
          matchedUser = user;
        }
      });
      if (isUserExist) {
        if (matchedUser.password === values.password) {
          dispatch(setCurrentUser(matchedUser));
          navigate("/dashboard");
        } else {
          alert("Invalid password !");
        }
      } else {
        alert("No users found with the given email !");
      }
    },
  });
  return (
    <div className="flex-container fullscreen">
      <div className="form-title">Login</div>
      <form className="form-card" onSubmit={formik.handleSubmit}>
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
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
