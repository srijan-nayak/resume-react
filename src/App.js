import React from "react";
import IdentityCard from "./components/IdentityCard";
import ContentSection from "./components/ContentSection";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <IdentityCard />
      <ContentSection />
    </div>
  );
};

export default App;
