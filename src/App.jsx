import React from "react";
import NavBar from "./Components/NavBar";
import CartItem from "./Components/CartItem";

const App = () => {
  return (
    <>
      <div className="container-fluid">
        <NavBar />
      </div>
      <div className="container-fluid">
        <div className="row">
          <CartItem />
        </div>
      </div>
    </>
  );
};

export default App;
