import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import Footer from "./Footer";
import background from "../assets/Background-Contact-Form.jpg";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validate name
    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    } else {
      const splitName = formData.name.trim().split(" ");
      if (splitName.length > 1) {
        newErrors.name = "Name should only be one word";
        valid = false;
      }
    }

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email is not valid";
      valid = false;
    }

    // Validate message
    if (!formData.message) {
      newErrors.message = "Message is required";
      valid = false;
    } else if (formData.message.length < 120) {
      newErrors.message = "Message should be at least 120 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleNameChange = (event) => {
    setFormData({ ...formData, name: event.target.value });
  };

  const handleEmailChange = (event) => {
    setFormData({ ...formData, email: event.target.value });
  };

  const handleMessageChange = (event) => {
    setFormData({ ...formData, message: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully:", formData);

      const response = await fetch(
        "https://fer-api.coderslab.pl/v1/portfolio/contact",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseText = await response.text();
      console.log(JSON.parse(responseText));
    } else {
      console.log("Form submission failed. Please check the errors.");
    }
  };

  return (
    <>
      <div className="Contact">
        <img
          src={background}
          className="Contact__Background"
          alt="background"
        />
        <div className="Contact__Form">
          <p>Skontaktuj się z nami</p>
          <Decoration />
          <form className="Contact__FormContent" onSubmit={handleSubmit}>
            <div className="Contact__FormInput">
              <div className="FormInput__Row">
                <label htmlFor="name">Wpisz swoje imię</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleNameChange}
                  placeholder="Krzysztof"
                ></input>
                {errors.name && <p>{errors.name}</p>}
              </div>
              <div className="FormInput__Row">
                <label htmlFor="email">Wpisz swój e-mail</label>
                <input
                  type="text"
                  id="email"
                  value={formData.email}
                  onChange={handleEmailChange}
                ></input>

                {errors.email && <p>{errors.email}</p>}
              </div>
            </div>
            <div className="Contact__FormTextarea">
              <label htmlFor="message">Wpisz swoją wiadomość</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleMessageChange}
              ></textarea>

              {errors.message && <p>{errors.message}</p>}
            </div>
            <div className="Contact__SendButtoContainer">
              <button type="submit" className="Contact__SendButton">
                WYŚLIJ
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
