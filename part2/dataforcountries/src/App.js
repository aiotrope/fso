import { useState } from "react";
import { SearchForm } from "./Components/Search";
import { Countries } from "./Components/Countries";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <main>
      {/* component for the form
       */}
      <SearchForm setSearch={setSearch} />

      {/* component for the country info
       */}
      <Countries search={search} />
    </main>
  );
};

export default App;
