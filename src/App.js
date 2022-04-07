import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Pages/Cadastro.jsx";
import Login from "./Pages/Login.jsx";
import Menu from "./Pages/Menu.jsx";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
