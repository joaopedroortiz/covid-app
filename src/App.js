import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cadastro from "./Pages/Cadastro/Cadastro.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
