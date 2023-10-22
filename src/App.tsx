import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Buddy from "./pages/matching/buddy/Buddy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/matching">
        <Route path="buddy" element={<Buddy />} />
      </Route>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
