import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import contador from './components/contador';

function Application() {
  return (
      <>
        <NavBar/>
        <ItemListContainer contenido="1"/>
        <contador/>
      </>
  );
}

export default Application;