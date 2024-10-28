import NavBar from "./NavBar";
import Decoration from "../assets/Decoration.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const RegisterPage = () => {
  const form = useForm();
  const { register, control, watch, handleSubmit, formState } = form;

  return (
    <>
      <NavBar />
      <div className="RegisterPageContainer">
        <div className="RegisterPage__Header">
          Register
          <img src={Decoration} alt="Decoration" />
        </div>
        <form className="RegisterPage__Form" noValidate>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
          />
          {/* <p className="error">{errors.email?.message}</p> */}

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
          {/* <p className="error">{errors.password?.message}</p> */}

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
          {/* <p className="error">{errors.confirmPassword?.message}</p> */}
        </form>

        <div className="RegisterPage__Buttons">
          <Link to="login">Already have an account? Log in</Link>
          <button type="submit">Register</button>
        </div>
      </div>
      {/* <DevTool control={control} /> */}
    </>
  );
};

export default RegisterPage;
