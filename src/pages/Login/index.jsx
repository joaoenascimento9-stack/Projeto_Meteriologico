import{useState}from "react";
import { Link } from "react-router-dom";
//import imgEstacao from "../../assets/estacao.png";

export default function Login(){
    const[usuario, setUsuario]=useState('');
    const[senha,setSenha]=useState('');

    return(
        <section className="login-container">
            <div className="login-wrapper">
                <div className="login-image-section">
                    {/* <img src={imgEstacao} alt="Estação Meteorológica" className="login-image"/> */}
                </div>
                <div className="login-form-section">
                    <div className="login-header">
                        <h2>Bem-vindo</h2>
                        <p>Estação Meteorológica</p>
                    </div>
                    <form className="login-form">
                        <div className="form-group">
                            <label htmlFor="usuario">Usuário</label>
                            <input 
                                type="text" 
                                id="usuario" 
                                className="form-input"
                                value={usuario} 
                                onChange={(e)=>setUsuario(e.target.value)}
                                placeholder="Digite seu usuário"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="senha">Senha</label>
                            <input 
                                type="password" 
                                id="senha" 
                                className="form-input"
                                value={senha} 
                                onChange={(e)=>setSenha(e.target.value)}
                                placeholder="Digite sua senha"
                            />
                        </div>
                        <button type="submit" className="login-button">Entrar</button>
                    </form>
                    <div className="login-footer">
                        <a href="#forgot">Esqueceu a senha?</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
