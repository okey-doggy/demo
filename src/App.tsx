import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Buddy from "./pages/matching/buddy/Buddy";
import SelectTraining from "./pages/matching/select-training/SelectTraining";
import Detail from "./components/pages/matching/select-training/detail/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/matching">
        <Route path="buddy" element={<Buddy />} />
        <Route path="select-training" element={<SelectTraining />}>
          <Route path="detail" element={<Detail />} />
        </Route>
      </Route>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
