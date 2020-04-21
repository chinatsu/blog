// src/App.js

import React from "react";
import { GoogleLogin } from "react-google-login"

const responseGoogle = (response) => {
  console.log(response);
}

function App() {
  return (
    <div className="App">
      <GoogleLogin
        clientId={'228525192911-jt3a6d9eb96du2m3uj71r2m2hctg6kut.apps.googleusercontent.com'}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default App;
