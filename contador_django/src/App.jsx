import './index.css';
import casalImg from '../public/casal.jpg';

function App() {
  const dataInicio = new Date(2024, 9, 7); // Outubro é mês 9 (0-based)
  const hoje = new Date();
  const dias = Math.floor((hoje - dataInicio) / (1000 * 60 * 60 * 24));
  const dataFormatada = dataInicio.toLocaleDateString('pt-BR');

  return (
    <div className="container">
      <h1>💘 Dias Juntos 💘</h1>
      <p>Desde <strong>{dataFormatada}</strong>, vocês estão juntos há:</p>
      <h2>{dias} dias!</h2>
      <p>🌹 Que o amor de vocês continue crescendo 🌹</p>
      <img src={casalImg} alt="Casal feliz" />
    </div>
  );
}

export default App;
