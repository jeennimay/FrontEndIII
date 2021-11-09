import './App.css';
import profilePic from './profile.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="profile">
          <div className="profile-pic">
            <img src={profilePic} alt="Jennifer Mayumi" />
          </div>
          <div className="profile-redes">
            <a href="https://www.linkedin.com/in/mundodajeje/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="logo Linkedin"/></a>
            <a href="https://github.com/jennimay" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="logo GitHub"/></a>
          </div>
        </div>

        <div className="conteudo">
          <h1>Essa é minha primeira aula de React ✌</h1>
          <h2>Prazer, sou <span>Jennifer Mayumi</span>.</h2>
          <div className="div-paragrafo">
            <p>Tenho 24 anos, formada em comunicação social com ênfase em publicidade e propaganda.</p>
            <p>No começo da pandemia, em abril de 2020, comecei a estudar UX e UI por curiosidade sobre a área e para tentar "me descobrir" em algum lugar.</p>
            <p>Aos poucos, durante vários bootcamps e workshops me deparei com o desenvolvimento web e também por curiosidade fui fazer o workshop da Kenzie Academy. Novidade? Descobri minha mais nova paixão, que com o curso CTD, Certified Tech Developer da Digital House com pareceria do Mercado Livre e da Globant, vem se transformando em <span>amor</span>.</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
