import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Buddy from "./pages/matching/buddy/Buddy";
import Training from "./pages/matching/training/Training";
import Detail from "./pages/matching/detail/Detail";
import Accordion from "./components/pages/matching/training/detail/accordion/Accordions";
import Etc from "./components/pages/matching/training/detail/etc/Etc";
import Methods from "./pages/matching/methods/Methods";
import Place from "./pages/matching/methods/place/Place";
import Date from "./pages/matching/methods/date/Date";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Buddy />} />
      <Route path="/matching">
        <Route path="buddy" element={<Buddy />} />
        <Route path="training" element={<Training />} />
        <Route path="detail" element={<Detail />}>
          <Route path=":id" element={<Accordion />} />
          <Route path="etc" element={<Etc />} />
        </Route>
        <Route path="methods" element={<Methods />}>
          <Route path="place" element={<Place />} />
          <Route path="date" element={<Date />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
