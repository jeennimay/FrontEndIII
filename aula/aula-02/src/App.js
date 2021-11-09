import './App.css';
import Greeting from './components/Greeting';

function App() {

  const user = {
    firstName: 'Turma',
    lastName: '03',
  }

    //const main = <main><h2>Esse é meu main</h2></main>;

  return (
    <div className="App">
      <Greeting user={user}/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, doloremque. Repellendus ipsum harum itaque laudantium. Rerum ad, delectus magnam eos incidunt molestiae maiores, dignissimos cumque perferendis reiciendis rem quia modi.</p>
    </div>
  );
}

export default App;
