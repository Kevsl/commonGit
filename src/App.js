import {Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import DatagridUsers from "./views/datagridUsers";

function App() {

  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/datagrid-users" element={<DatagridUsers />} />
        </Routes>
    </div>
  );
}

export default App;
