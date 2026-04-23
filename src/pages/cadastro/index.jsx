import { useState } from "react";
import Header from "../../components/header";
import "./cadastro.css";

export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [endereco, setEndereco] = useState("");
    const [documento, setDocumento] = useState("");
    const [celular, setCelular] = useState("");

    return(
        <>
            <Header />
            <section className="cadastro-container">
            <h2>Cadastro de dados pessoais</h2>

            <form action="">
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="endereco">Endereço:</label>
                <input type="text" id="endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                <label htmlFor="documento">Documento:</label>
                <input type="text" id="documento" value={documento} onChange={(e) => setDocumento(e.target.value)} />
                <label htmlFor="celular">Celular:</label>
                <input type="text" id="celular" value={celular} onChange={(e) => setCelular(e.target.value)} />

                <button>
                    Salvar
                </button>

            </form>
            </section>
        </>
    )
}