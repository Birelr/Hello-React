import Header from './components/Header';
import User from './components/User'
import './App.css';

let isLogged = true;
let fullName = 'Rojhat Birel';
function App() {
  return (
    <div className="App">
      <Header/>
      <h2>My first React app</h2>
      <h3>Welcome {isLogged ? fullName : 'Guest'}</h3>
      <User name="Rojhat" surname= "Birel" age={25} /> 
      <User name="Ali" surname= {"Veli"} age={55} />
    </div>
  );
}

export default App;


