import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header>
            <h2>Estação Meteorológica</h2>
            <nav>
                <ul>
                    <li>
                        <Link to=' /Dashboard '> HOME </Link>
                    </li>
                    <li>
                        <Link to=' /Cadastro '> CADASTRO </Link>
                    </li>
                    <li>
                        <Link to=' /Relatorios '> RELATÓRIOS </Link>
                    </li>
                    <li>
                        <Link to=' /Login '> SAIR </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}