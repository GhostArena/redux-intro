import { useEffect } from "react";
import "./App.css";
import Bank from "./components/Bank";

function App() {
  useEffect(() => {
    document.title = "React Bank";
  });
  return (
    <main className="App">
      <Bank />
    </main>
  );
}

export default App;
