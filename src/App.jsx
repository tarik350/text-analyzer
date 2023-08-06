import React from "react";
import { Header, CountHeader, Footer, TextBox, CountFooter } from "./Compnents";

const App = () => {
  return (
    <div className="w-full font-poppins bg-gray-100    bg-main-bg-image">
      <Header />
      <div className="  w-full px-[380px] h-screen">
        <div className="">
          <CountHeader />
        </div>
        <div>
          <TextBox />
        </div>
        {/* <div className="bg-main-bg-image w-[1000px] h-[1000px]"></div> */}

        <div>
          <CountFooter />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
