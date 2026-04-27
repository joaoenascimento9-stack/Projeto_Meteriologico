import Header from "../../components/header";

export default function Relatorio() {
    const leituras = [
        {horario: "12:00", qualidadeAr: "Boa", temperatura: "25°C", iqa: 42, umidade: "60%"},
        {horario: "13:00", qualidadeAr: "Moderada", temperatura: "27°C", iqa: 75, umidade: "55%"},
        {horario: "14:00", qualidadeAr: "Ruim", temperatura: "30°C", iqa: 120, umidade: "50%"},
        {horario: "15:00", qualidadeAr: "Péssima", temperatura: "32°C", iqa: 200, umidade: "45%"}
    ]

return (
        <div className='container'>
            <header/>
            <h3>Relatório estação meterologica</h3>
            <p>monitoramento da temperaturae umidade em tempo real</p>

            <section className='grafico'>
                {
                    
                }
            </section>

            <section className='tabela-leitura'>
                <table>
                    <thead>
                        <tr>
                            <th>horario</th>
                            <th>qualidadeAR</th>
                            <th>IQA</th>
                            <th>temperatura</th>
                            <th>umidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            leituras.map((item,index)=>(
                                <tr key={index}>
                                    <td>{item.horario}</td>
                                    <td>{item.qualidadeAR}</td>
                                    <td>{item.iqa}</td>
                                    <td>{item.temperatura}</td>
                                    <td>{item.umidade}</td>
                                </tr>
                            ))
                           
                        }
                    </tbody>
                </table>
            </section>
        </div>
    )

    /*return (
        <div className="container">
            <Header />
            <h1>Relatório de Leituras</h1>
            <table>
                <thead>
                    <tr>
                        <th>Horário</th>
                        <th>Qualidade do Ar</th>
                        <th>Temperatura</th>
                        <th>IQA</th>
                        <th>Umidade</th>
                    </tr>
                </thead>
                <tbody>
                    {leituras.map((leitura, index) => (
                        <tr key={index}>
                            <td>{leitura.horario}</td>
                            <td>{leitura.qualidadeAr}</td>
                            <td>{leitura.temperatura}</td>
                            <td>{leitura.iqa}</td>
                            <td>{leitura.umidade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )*/
}