import React from "react";
import { Header, CountHeader, Footer, TextBox } from "./Compnents";

const App = () => {
  return (
    <div>
      <Header />
      <div className="w-full">
        <div className="count">
          <CountHeader />
        </div>
        <div>
          <TextBox />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
