// import "./App.css";

import { useState } from "react";
import Search from "./components/search";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="/hero.png" />
          <h1>
            Find <span className="text-gradient">Movies</span> you will enjoy
            without the hassle!
          </h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      {/* <h1 className="text-white">{searchTerm}</h1> */}
    </main>
  );
}

export default App;
