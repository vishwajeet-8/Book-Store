import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from "./pages/Books.jsx";
import Add from "./pages/Add.jsx";
import Update from "./pages/Update.jsx";
import "./style.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
