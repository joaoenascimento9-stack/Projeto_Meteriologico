import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Login/register";
// import dashboard from "../pages/dashboard";
// import cadastro from "../pages/cadastro";
// import relatorio from "../pages/relatorio";
// import notfound from "../pages/notfound";

export default function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/dashboard" element={dashboard} />
            <Route path="/cadastro" element={cadastro} />
            <Route path="/relatorio" element={relatorio} />
            <Route path="*" element={notfound} /> */}
        </Routes>
    )
}
