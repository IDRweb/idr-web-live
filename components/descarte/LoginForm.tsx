import React, { useState } from "react";
import Image from "next/image";

const LoginForm: React.FC = () => {
  return (
    <div className="login-page">
      <div className="login-container" onClick={(e) => e.stopPropagation()}>
        <div className="login-logo">
          <Image
            alt="IDR Logo"
            src="/logos/logo-color.png"
            width={126}
            height={41}
            loading="eager"
          />
        </div>
          <form className="login-form">
            <div className="login-box">
              <p className="smallcaps">Usuari</p>
                <input
                  name="usuari"
                  type="text"
                  className="login-input"
                  required
                />
            </div>
            <div className="login-box">
              <p className="smallcaps">Contrassenya</p>
              <input
                name="pass"
                type="password"
                className="login-input"
                required
              />
              <div className="error-message">Usuari incorrecte</div>
            </div>
            <div className="column-center">
              <button className="LoginBtn" type="submit">
                Accedir
              </button>
            </div>
          </form>
      </div>
    </div>
  );
};

export default LoginForm;