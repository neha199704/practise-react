import { useState } from "react";
import "./App.css";

const NetflixForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState({
    email: false,
    password: false,
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    const isValidEmail = email.includes("@") && email.includes(".");
    const isValidPhoneNumber = email.length === 10 && /^\d+$/.test(email);
    return isValidEmail || isValidPhoneNumber;
  };

  const validatePassword = (password) => {
    return password.length >= 4 && password.length <= 60;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setErr((prev) => ({ ...prev, email: !validateEmail(value) }));
    } else if (name === "password") {
      setErr((prev) => ({ ...prev, password: !validatePassword(value) }));
    }
  };

  const handleErr = () => {
    const emailIsValid = validateEmail(form.email);
    const passwordIsValid = validatePassword(form.password);

    setErr({
      email: !emailIsValid,
      password: !passwordIsValid,
    });

    if (emailIsValid && passwordIsValid) {
      // Clear the form or handle successful form submission
      setForm({ email: "", password: "" });
    }
  };
  console.log(form);

  return (
    <div className="FormMainDiv">
      <div className="insideDiv">
        <h1>Sign In</h1>
        <div>
          <div className="inputs">
            <p>Email or mobile number</p>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleForm}
              onBlur={handleBlur}
            />
          </div>
          {err.email && (
            <p className="err">
              <i class="fa-solid fa-circle-xmark"></i> Please enter a valid
              email address or phone number.
            </p>
          )}
          <div className="inputs">
            <p>Password</p>
            <input
              type="password"
              value={form.password}
              name="password"
              onChange={handleForm}
              onBlur={handleBlur}
            />
          </div>
          {err.password && (
            <p className="err">
              <i class="fa-solid fa-circle-xmark"></i> Your password must
              contain between 4 and 60 characters.
            </p>
          )}
          <button className="signIn" onClick={handleErr}>
            Sign In
          </button>
          <p className="or">OR</p>
          <button className="signIn2">Use a sign-in code</button>
          <p className="or">Forgot password?</p>
        </div>
        <div>
          <div className="checkbox">
            <input className="check" type="checkbox" />
            <p>Remember me</p>
          </div>
          <p className="New">New to Netflix? Sign up now.</p>
        </div>
        <div>
          <p className="last">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <button>Learn more.</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NetflixForm;
