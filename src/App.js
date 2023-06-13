import "./App.css";
import { Home } from "./screnns/Home";
import Cours from "./screnns/Cours";
import Projets from "./screnns/Projets";
import { Routes, Route } from "react-router-dom";
import Tuteurs from "./screnns/Tuteurs";
// import Blogs from "./screnns/Blogs";
import Wrapper from "./components/Wrapper";
// import Inscription from "./screnns/Inscription";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path="cours" element={<Cours />} />
          <Route path="projets" element={<Projets />} />
          <Route path="Tuteurs" element={<Tuteurs />} />
          {/* <Route path="Blogs" element={<Blogs />} /> */}
          {/* <Route path="inscription" element={<Inscription/>}/> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
