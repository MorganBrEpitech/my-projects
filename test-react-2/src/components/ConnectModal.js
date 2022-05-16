import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

const ConnectModal = () => {
  // eslint-disable-next-line
  const [signUp, setSignUp] = useState(false);
  return (
    <div className="connect-modal">
      <div className="header-btn">
        <button
          style={{ background: signUp ? "rgb(28,28,28)" : "rgb(83,83,83)" }}
          // eslint-disable-next-line
          onClick={() => setSignUp = (true)}
          >S'inscrire</button>
        <button
        // eslint-disable-next-line
          style={{ background: signUp ? "rgb(83,83,83)" : "rgb(28,28,28)" }}
          // eslint-disable-next-line
          onClick={() => setSignUp = (false)}
          >Se connecter</button>

      </div>
      {signUp ? <SignUp /> : <Login />}
    </div >
  );
};
export default ConnectModal;