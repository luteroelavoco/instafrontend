import React from 'react';
import Routes from "./routes";
import { HashRouter } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes />
      </HashRouter>
    </div>
  );
}

export default App;
