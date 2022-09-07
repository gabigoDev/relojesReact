import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailConteiner";

function Application() {
    return (
        <>
            <NavBar />
            <ItemListContainer contenido="" />
            <ItemDetailConteiner/>                                              
        </>
    );
}

export default Application;
