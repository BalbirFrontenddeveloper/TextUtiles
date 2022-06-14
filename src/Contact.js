import React, { useState } from "react";

const Contact = () => {
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  return (
    <>
      <div className="contact">
        <h2>Login</h2>
        <form onSubmit={(e) => e.preventDefault}>
          <label forHtml="email">Email</label>
          <input
            type="email"
            id="email"
            value={emailText}
            onChange={(e) => setEmailText(e.target.value)}
          />
          <label forHtml="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordText}
            onChange={(e) => setPasswordText(e.target.value)}
          />
        </form>
        <button className="btn">Submit</button>
      </div>
    </>
  );
};

export default Contact;
