import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {

  const mensaje = 'Bienvenido a mi app'
  const estilos = {
    backgroundColor: '#888',
    padding: '20px'
  }

  const log = () => { console.log('Hola'); }
  const log2 = () => { console.log('Hi'); }

  return (
    <div className= 'container'>
      <NavBar></NavBar>
      <ItemListContainer greeting={'Saludos'}/>
      <h1>Hola Mundo</h1>
      <h3 style={ estilos }>{ mensaje }</h3>
      <Saludo name='Juan' lastname='Perez' fn={log}>
      <p>este es un parrafo extra 1</p>
      <p>este es un parrafo extra 2</p>
      <p>este es un parrafo extra 2</p>
      </Saludo>
      <Saludo name='Ana' lastname='Lopez' fn={log2}>
      <li>Un elemento de lista</li>
       </Saludo>
      <Saludo name='Miguel' lastname='Gonzalez'/>

         
    </div>  
  );
}
  
export default App;
