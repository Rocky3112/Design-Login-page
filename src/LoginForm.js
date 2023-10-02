import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="limiter">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={handleSubmit}>
            <span className="login-form-title">Welcome</span>

            <div className="wrap-input">
              <input
                className="input"
                type="text"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                required
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <span className="btn-show-pass">
                <i className="zmdi zmdi-eye"></i>
              </span>
              <input
                className="input"
                type="password"
                name="pass"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                required
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <div className="wrap-login-form-btn">
                <button className="login-form-btn">Login</button>
              </div>
            </div>

            <div className="text-center">
              <span className="txt1">Don't have an account?</span>
              <a className="txt2" href="#">
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
