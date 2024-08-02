import React, { useEffect } from "react";
import Pages from "./Pages";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="bg-color2 min-h-screen w-full hide-scrollbar">
      <Pages />
    </div>
  );
};

export default App;
