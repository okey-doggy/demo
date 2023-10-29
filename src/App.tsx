import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Buddy from "./pages/matching/buddy/Buddy";
import SelectTraining from "./pages/matching/select-training/SelectTraining";
import Detail from "./pages/matching/detail/Detail";
import Accordion from "./components/pages/matching/select-training/detail/accordion/Accordions";
import Etc from "./components/pages/matching/select-training/detail/etc/Etc";
import SelectPlace from "./pages/matching/select-place/SelectPlace";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/matching">
        <Route path="buddy" element={<Buddy />} />
        <Route path="select-training" element={<SelectTraining />} />
        <Route path="detail" element={<Detail />}>
          <Route path=":id" element={<Accordion />} />
          <Route path="etc" element={<Etc />} />
        </Route>
        <Route path="detail" element={<SelectPlace />} />
        <Route path="select-place" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
