import { useState } from "react";
import { Link } from "react-router-dom";
import imgEstacao from "../../assets/hero.png";
import "./register.css";

export default function Register() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");

    return (
        <section className="container d-flex vh-100 justify-content-center align-items-center py-5">
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden register-card" style={{ maxWidth: "850px", animation: "slideIn 0.5s ease" }}>
                <div className="row g-0">

                    {/* Coluna da imagem */}
                    <div className="col-md-5 d-none d-md-block">
                        <img 
                            src={imgEstacao} 
                            alt="Estação Meteorológica"
                            className="img-fluid h-100 object-fit-cover"
                        />
                    </div>

                    {/* Coluna do formulário */}
                    <div className="col-md-7 p-5">
                        <div className="mb-4">
                            <i className="bi bi-cloud-drizzle me-2" style={{fontSize: '28px', color: '#0d6efd'}}></i>
                            <h2 className="mb-1 d-inline">Cadastro</h2>
                        </div>
                        <p className="text-muted mb-4">Crie sua conta para acessar a plataforma</p>

                        <form>
                            <div className="form-floating mb-3">
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="usuario"
                                    placeholder="Usuário"
                                    value={usuario}
                                    onChange={(e) => setUsuario(e.target.value)}
                                />
                                <label htmlFor="usuario"><i className="bi bi-person me-2"></i>Usuário</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input 
                                    type="password"
                                    className="form-control"
                                    id="senha"
                                    placeholder="Senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                                <label htmlFor="senha"><i className="bi bi-lock me-2"></i>Senha</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input 
                                    type="password"
                                    className="form-control"
                                    id="confsenha"
                                    placeholder="Confirme a Senha"
                                    value={confirmaSenha}
                                    onChange={(e) => setConfirmaSenha(e.target.value)}
                                />
                                <label htmlFor="confsenha"><i className="bi bi-lock-fill me-2"></i>Confirme a Senha</label>
                            </div>

                            <button type="submit" className="btn btn-primary w-100 py-2 rounded-3">
                                <i className="bi bi-check-circle me-2"></i>Cadastrar
                            </button>
                        </form>
                        <p className="mt-4 text-center"><Link to="/" className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"><i className="bi bi-arrow-left-circle me-2"></i>Voltar</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
}