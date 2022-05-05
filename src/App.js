import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Pages/Cadastro.jsx";
import Login from "./Pages/Login.jsx";
import Menu from "./Pages/Menu.jsx";
import Home from "./Pages/Home";
import Questionario from "./Pages/Questionario.jsx";
import Manual from "./Pages/Manual.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/questionario" element={<Questionario />} />
          <Route path="/manual" element={<Manual />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
