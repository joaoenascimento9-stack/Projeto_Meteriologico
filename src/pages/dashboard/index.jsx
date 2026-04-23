import Header from '../../components/header'
import './dashboard.css'

export default function Dashboard(){
    return(
        <>
        <Header />
        <div className="container mt-4">
            <div className="dashboard-header mb-5">
                <h1 className="mb-2">Bem-vindo à sua Estação Meteorológica</h1>
                <p className="text-muted fs-5">Acompanhe as condições climáticas em tempo real</p>
            </div>

            {/* Métricas principais */}
            <div className="row mb-5">
                <div className="col-md-3 mb-4">
                    <div className="weather-card main-metric">
                        <div className="metric-icon temp-icon">
                            <i className="bi bi-thermometer-half"></i>
                        </div>
                        <h3 className="metric-value">24°C</h3>
                        <p className="metric-label">Temperatura</p>
                    </div>
                </div>

                <div className="col-md-3 mb-4">
                    <div className="weather-card main-metric">
                        <div className="metric-icon humidity-icon">
                            <i className="bi bi-droplet"></i>
                        </div>
                        <h3 className="metric-value">65%</h3>
                        <p className="metric-label">Umidade</p>
                    </div>
                </div>

                <div className="col-md-3 mb-4">
                    <div className="weather-card main-metric">
                        <div className="metric-icon wind-icon">
                            <i className="bi bi-wind"></i>
                        </div>
                        <h3 className="metric-value">12 km/h</h3>
                        <p className="metric-label">Velocidade do Vento</p>
                    </div>
                </div>

                <div className="col-md-3 mb-4">
                    <div className="weather-card main-metric">
                        <div className="metric-icon pressure-icon">
                            <i className="bi bi-bar-chart"></i>
                        </div>
                        <h3 className="metric-value">1013 hPa</h3>
                        <p className="metric-label">Pressão</p>
                    </div>
                </div>
            </div>

            {/* Cards de informações adicionais */}
            <div className="row mb-5">
                <div className="col-md-6 mb-4">
                    <div className="weather-card detailed-card">
                        <div className="card-header-custom">
                            <i className="bi bi-cloud-sun me-2"></i>
                            <h5>Condições Atuais</h5>
                        </div>
                        <div className="card-body">
                            <p className="mb-2"><strong>Estado:</strong> Parcialmente Nublado</p>
                            <p className="mb-2"><strong>Visibilidade:</strong> 10 km</p>
                            <p className="mb-2"><strong>Ponto de Orvalho:</strong> 15°C</p>
                            <p className="mb-0"><strong>Última atualização:</strong> Agora</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-4">
                    <div className="weather-card detailed-card">
                        <div className="card-header-custom">
                            <i className="bi bi-calendar-event me-2"></i>
                            <h5>Previsão</h5>
                        </div>
                        <div className="card-body">
                            <p className="mb-2"><strong>Hoje:</strong> Máx 28°C, Mín 18°C</p>
                            <p className="mb-2"><strong>Amanhã:</strong> Máx 26°C, Mín 17°C</p>
                            <p className="mb-2"><strong>Probabilidade de Chuva:</strong> 30%</p>
                            <p className="mb-0"><strong>Alertas:</strong> Nenhum</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gráfico placeholder */}
            <div className="row">
                <div className="col-12 mb-4">
                    <div className="weather-card">
                        <div className="card-header-custom">
                            <i className="bi bi-graph-up me-2"></i>
                            <h5>Histórico de Temperatura (24h)</h5>
                        </div>
                        <div className="chart-placeholder">
                            <div className="chart-bar" style={{height: '30%'}}></div>
                            <div className="chart-bar" style={{height: '45%'}}></div>
                            <div className="chart-bar" style={{height: '60%'}}></div>
                            <div className="chart-bar" style={{height: '75%'}}></div>
                            <div className="chart-bar" style={{height: '65%'}}></div>
                            <div className="chart-bar" style={{height: '50%'}}></div>
                            <div className="chart-bar" style={{height: '35%'}}></div>
                            <div className="chart-bar" style={{height: '40%'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}