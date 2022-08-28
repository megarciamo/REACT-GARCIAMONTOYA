import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Card from './components/Card';
import CartWidget from './components/CartWidget';

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
      <ItemListContainer greeting={'¡Bienvenidos a mi tienda!'}/>
      <Card></Card>
               
    </div>  
  );
}
  
export default App;
