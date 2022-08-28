import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Card from './components/Card';


function App() {

 
  return (
    <div className= 'container'>
      <NavBar></NavBar>
      <ItemListContainer greeting={'¡Bienvenidos a mi tienda!'}/>
      <Card></Card>               
    </div>  
  );
}
  
export default App;
