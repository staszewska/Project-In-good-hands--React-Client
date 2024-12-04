import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Decoration from "../assets/Decoration.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = ({ onUserLogIn }) => {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // onSubmit defines function for the form submission
  const onSubmit = (formData) => {
    const dataToSubmit = {
      Email: formData.email,
      Password: formData.password,
    };

    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSubmit),
    })
      .then((response) => {
        if (!response.ok) {
          // If status is not okay
          return response.json().then((data) => {
            //extract the message from backend

            throw new Error(
              data.message
              // || "User not found"
            );
          });
        }
        console.log("Check", response);
        return response.json();
      })
      .then((data) => {
        const token = data.token;

        if (token) {
          // Store token to local storage
          localStorage.setItem("authToken", token);
          console.log("Token saved to local storage,");
        } else {
          console.log("Token not saved");
        }

        navigate("/");
        onUserLogIn(data);

        console.log("LoginPage] Log in successfully:", data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.error("Error during form submission:", error);
      });

    // console.log("Email:", email);
    // console.log("Password:", password);
    // console.log("Confirm password:", confirmPassword);
  };

  const handleLoginLinkClick = () => {
    form.handleSubmit(onSubmit)();
  };

  return (
    <>
      <NavBar />
      <div className="LoginPageContainer">
        <div className="LoginPage__Header">
          Log in
          <img src={Decoration} alt="Decoration" />
        </div>
        <form
          className="LoginPage__Form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            // onChange={(e) => setEmail(e.target.value)}
            {...register("email", {
              required: "E-mail is required",
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
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          <p className="error">{errors.password?.message}</p>

          {errorMessage && <p className="error server-error">{errorMessage}</p>}
        </form>

        <div className="LoginPage__Buttons">
          <Link to="register">Create an account</Link>
          <a href="#" onClick={handleLoginLinkClick}>
            Log in
          </a>
        </div>
      </div>
      <DevTool control={control} />
    </>
  );
};

export default LoginPage;
