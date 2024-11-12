import NavBar from "./NavBar";
import Decoration from "../assets/Decoration.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // use Hook-form for form validation
  const form = useForm();
  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = form;

  // onSubmit defines function for the form submission
  const onSubmit = (data) => {
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log("Check", response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });

    console.log("Email:", email);
    console.log("Password:", password);
    // console.log("Confirm password:", confirmPassword);
  };

  return (
    <>
      <NavBar />
      <div className="RegisterPageContainer">
        <div className="RegisterPage__Header">
          Register
          <img src={Decoration} alt="Decoration" />
        </div>
        <form
          className="RegisterPage__Form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          <p className="error">{errors.password?.message}</p>

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword", {
              required: "Password confirmation is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          <p className="error">{errors.confirmPassword?.message}</p>

          <button type="submit">Register</button>
        </form>

        <div className="RegisterPage__Buttons">
          <Link to="login">Already have an account? Log in</Link>
        </div>
      </div>
      <DevTool control={control} />
    </>
  );
};

export default RegisterPage;
