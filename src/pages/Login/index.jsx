import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
//import imgEstacao from "../../assets/estacao.png";

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setErro('');

        if (!usuario || !senha) {
            setErro('Preencha todos os campos!');
            return;
        }

        setLoading(true);
        // Simular login
        setTimeout(() => {
            alert('Login realizado com sucesso!');
            navigate('/dashboard');
            setLoading(false);
        }, 1000);
    };

    return (
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

                    {erro && <div className="error-message">{erro}</div>}

                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="usuario">Usuário</label>
                            <input 
                                type="text" 
                                id="usuario" 
                                className="form-input"
                                value={usuario} 
                                onChange={(e) => setUsuario(e.target.value)}
                                placeholder="Digite seu usuário"
                                disabled={loading}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="senha">Senha</label>
                            <input 
                                type="password" 
                                id="senha" 
                                className="form-input"
                                value={senha} 
                                onChange={(e) => setSenha(e.target.value)}
                                placeholder="Digite sua senha"
                                disabled={loading}
                                required
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="login-button"
                            disabled={loading}
                        >
                            {loading ? 'Entrando...' : 'Entrar'}
                        </button>
                    </form>
                    <div className="login-footer">
                        <p>Não tem conta? <Link to="/register">Cadastre-se aqui</Link></p>
                        <a href="#forgot">Esqueceu a senha?</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
