import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Home } from "./pages";
import Agradecimento from "./pages/agradecimento/agradecimento";

const Navegacao = () => {
  return (
    <Routes>
      {/* Exemplo de rota dentro de outra, para aparecer dentro da pagina tipo IFRAME*/}
      <Route path="/" element={<Home />}>
        {/* Conteúdo de /login será colocado dentro de <Home/> onde tiver a tag <Outlet />*/}
        <Route path="login" element={<h1>Login</h1>} />
        <Route path="cadastro" element={<h1>Cadastro</h1>} />
      </Route>
      {/* Posso ter rodas iguais com parâmetros diferentes */}
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="dashboard/:id" element={<Dashboard />} />
      <Route path="agradecimento" element={<Agradecimento />} />
      <Route path="*" element={<h1>Página não existe</h1>} />
    </Routes>
  );
};

export default Navegacao;
