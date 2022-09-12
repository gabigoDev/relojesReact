import "./App.css";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailConteiner";

function Application() {
    return (
        <>
        <NavBar />
        <BrowserRouter>
        <Routes>
            <Route path="/productos" element={<ItemListContainer/>}/>
            <Route path="/detalles" element= {<ItemDetailConteiner/>}/>
        </Routes>
        </BrowserRouter>                                                     
        </>
    );
}

export default Application;


//<ItemListContainer contenido="" />
//<ItemDetailConteiner/> 