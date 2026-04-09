import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
//import imgEstacao from "../../assets/estacao.png";

export default function Register() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [erro, setErro] = useState('');
    const [sucesso, setSucesso] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setErro('');
        setSucesso('');

        // Validações
        if (!usuario || !senha || !confirmaSenha) {
            setErro('Preencha todos os campos!');
            return;
        }

        if (usuario.length < 3) {
            setErro('Usuário deve ter no mínimo 3 caracteres!');
            return;
        }

        if (senha.length < 6) {
            setErro('Senha deve ter no mínimo 6 caracteres!');
            return;
        }

        if (senha !== confirmaSenha) {
            setErro('As senhas não conferem!');
            return;
        }

        setLoading(true);
        // Simular inserção de dados
        setTimeout(() => {
            setSucesso('Cadastro realizado com sucesso! Redirectando...');
            setTimeout(() => {
                navigate('/');
            }, 2000);
            setLoading(false);
        }, 1000);
    };

    return(
        <section className="login-container">
            <div className="login-wrapper">
                <div className="login-image-section">
                    {/* <img src={imgEstacao} alt="Estação Meteorológica" className="login-image"/> */}
                </div>
                <div className="login-form-section">
                    <div className="login-header">
                        <h2>Cadastro</h2>
                        <p>Estação Meteorológica</p>
                    </div>
                    
                    {erro && <div className="error-message">{erro}</div>}
                    {sucesso && <div className="success-message">{sucesso}</div>}

                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="usuario">Usuário</label>
                            <input 
                                type="text" 
                                id="usuario" 
                                className="form-input"
                                value={usuario} 
                                onChange={(e)=>setUsuario(e.target.value)}
                                placeholder="Digite seu usuário"
                                disabled={loading}
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
                                disabled={loading}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmaSenha">Confirmar Senha</label>
                            <input 
                                type="password" 
                                id="confirmaSenha" 
                                className="form-input"
                                value={confirmaSenha} 
                                onChange={(e)=>setConfirmaSenha(e.target.value)}
                                placeholder="Confirme sua senha"
                                disabled={loading}
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="login-button"
                            disabled={loading}
                        >
                            {loading ? 'Cadastrando...' : 'Cadastrar'}
                        </button>
                    </form>

                    <div className="login-footer">
                        <p>Já tem conta? <a href="/">Faça login</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
