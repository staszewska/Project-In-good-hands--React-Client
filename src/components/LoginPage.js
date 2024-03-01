import NavBar from "./NavBar";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const LoginPage = () => {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Form submitted", data);
  };

  const handleLoginLinkClick = () => {
    form.handleSubmit(onSubmit)();
  };

  return (
    <>
      <NavBar />
      <div className="LoginPageContainer">
        <div className="LoginPage__Header">
          Zaloguj się
          <Decoration />
        </div>
        <form
          className="LoginPage__Form"
          // onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "E-mail is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>
          <label htmlFor="password">Hasło</label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
              // value: true,
            })}
          />
          <p className="error">{errors.password?.message}</p>
          {/* <button>Submit</button> */}
        </form>

        <div className="LoginPage__Buttons">
          <Link to="register">Załóż konto</Link>
          <a src="#" onClick={handleLoginLinkClick}>
            Zaloguj
          </a>
        </div>
      </div>
      <DevTool control={control} />
    </>
  );
};

export default LoginPage;
