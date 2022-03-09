
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cadastro from "./Pages/Cadastro/Cadastro.jsx";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/" element={<Menu/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
