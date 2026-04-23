import { Link } from "react-router-dom";
import "./header.css";

export default function Header(){
    return(
        <header className="bg-gradient text-white py-4 mb-5">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-3">
                        <div className="header-icon">
                            <i className="bi bi-cloud-drizzle" style={{fontSize: '32px'}}></i>
                        </div>
                        <h2 className="mb-0">Estação Meteorológica</h2>
                    </div>
                    <nav>
                        <ul className="list-unstyled d-flex gap-4 mb-0">
                            <li>
                                <Link to='/dashboard' className="text-white text-decoration-none header-link">
                                    <i className="bi bi-house-fill me-2"></i>Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/' className="text-white text-decoration-none header-link">
                                    <i className="bi bi-box-arrow-right me-2"></i>Sair
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}