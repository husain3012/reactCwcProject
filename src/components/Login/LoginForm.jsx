import React from "react";
import styled from "styled-components";
import { useState } from "react";
import GoogleButton from "react-google-button";
import { useMediaQuery } from "react-responsive";

import "./Login.css";
export const Card = styled.div`
  margin: auto;
  margin-top: 10%;
  margin-bottom: -100px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 100px;
  border-top-right-radius: 20px;
  border-top-left-radius: 100px;
  background-color: #e6e3ed;
  padding: 50px;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.65);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);

  @media and screen (max-width: 768px) {
    max-width: fit-content;
  }
`;
const GoogleButtonForm = styled(GoogleButton)`
  margin: auto;
  max-width: 100%;
`;
const HeadingWrapper = styled.div`
  background-color: #fff;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 80px;
  border-top-left-radius: 10px;
  padding: 40px 20px;
  min-height 100%;
  max-width: 80%;
  margin: auto;
  margin-right: 1rem;
  margin-top: -100px;
  h1 {
    color: #2d2d2d;
  }
  h3 {
    color: #368b85;
  }
`;

function Form({ option }) {
  return (
    <form className="account-form" onSubmit={(evt) => evt.preventDefault()}>
      <div className={"account-form-fields " + (option === 1 ? "sign-in" : option === 2 ? "sign-up" : "forgot")}>
        <input id="email" name="email" type="email" placeholder="E-mail" required />
        <input id="password" name="password" type="password" placeholder="Password" required={option === 1 || option === 2 ? true : false} disabled={option === 3 ? true : false} />
        <input id="repeat-password" name="repeat-password" type="password" placeholder="Repeat password" required={option === 2 ? true : false} disabled={option === 1 || option === 3 ? true : false} />
      </div>
      <button className="btn-submit-form" type="submit">
        {option === 1 ? "Sign in" : option === 2 ? "Sign up" : "Reset password"}
      </button>
      <hr />
      {option !== 3 && <GoogleButtonForm />}
    </form>
  );
}

function LoginForm() {
  const isMobile = useMediaQuery({ maxWidth: "767px" });

  const headings = ["Sign in", "Sign up", "Reset password"];
  const subHeadings = ["to an existing account", "for a new account", ""];

  const [option, setOption] = useState(1);

  return (
    <div className="login-container">
      <h1>{headings[option - 1]}</h1>
      <h3>{subHeadings[option - 1]}</h3>

      <div className="row">
        <div className="col-md-6">
          <Card>
            <ul className="options">
              <li className={option === 1 ? "active" : ""} onClick={() => setOption(1)}>
                Sign in
              </li>
              <li className={option === 2 ? "active" : ""} onClick={() => setOption(2)}>
                Sign up
              </li>
              <li className={option === 3 ? "active" : ""} onClick={() => setOption(3)}>
                Forgot
              </li>
            </ul>
            <Form option={option} />
          </Card>
        </div>
        {!isMobile && (
          <div className="col-md-6">
            <HeadingWrapper>
              <h1>Lorem Ipsum</h1>
              <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
            </HeadingWrapper>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
