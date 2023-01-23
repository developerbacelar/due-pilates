import './App.css';
import './Reset.css';
import logo from './due-logo.svg';
import logoWhatsApp from './logo-whatsApp.svg';

function App() {
  return (
    <div className="App">
      <main>
        <img src={logo} alt="Logo Due Studio Personal"/>
        <h1>Studio de Pilates & Treinamento Funcional</h1>
        <span>Em breve um novo site para você!</span>
      </main>
      <a className="btn-whatsapp-flutuante" href="https://api.whatsapp.com/send?phone=5541991256464&text=Olá,%20vim%20pelo%20seu%20site!%20Gostaria%20de%20informações%20sobre%20uma%20futura%20aula%20experimental." target="_blank" rel="noopener">
        <img src={logoWhatsApp}/>
      </a>
    </div>
  );
}

export default App;
