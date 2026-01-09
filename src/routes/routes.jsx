import { BrowserRouter, Routes, Route } from "react-router-dom"
import Styles from "./styles.module.css"


import Home from "../containers/Home"
import Funcionarios from "../containers/Funcionarios"
import EPI from "../containers/EPIs"
import Entregas from "../containers/Entregas"
import Devolucao from "../containers/Devolucao"
import Relatorios from "../containers/Relatorios"
import Usuarios from "../containers/Usuarios"
import Configuracoes from "../containers/Configuracoes"
import CadastroEPI from "../containers/CadastroEPI"
import Login from "../containers/Login"
import NotFound from "../containers/NotFound"
import Setores from "../containers/Setores"
import Perfil from "../containers/Perfil"



import Header from "../components/Header"
import SideBar from "../components/SideBar"
import Breadcrumb from "../components/Breadcrumb"
import ScrollToTop from "../components/ScrollToTop"

function AppRouter() {
    return (

        <BrowserRouter>
                <Header />
            <div className={Styles.contenteside}>
            <ScrollToTop />
            <SideBar />
                <Breadcrumb />
                <div className={Styles.content}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/funcionarios" element={<Funcionarios />} />
                        <Route path="/epis" element={<EPI />} />
                        <Route path="/entregas" element={<Entregas />} />
                        <Route path="/configuracoes/devolucao" element={<Devolucao />} />
                        <Route path="/relatorios" element={<Relatorios />} />
                        <Route path="/configuracoes/usuarios" element={<Usuarios />} />
                        <Route path="/configuracoes/setores" element={<Setores />} />
                        <Route path="/configuracoes" element={<Configuracoes />} />
                        <Route path="/cadastro-epi" element={<CadastroEPI />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/perfil" element={<Perfil />}/>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
        
    )
}

export default AppRouter