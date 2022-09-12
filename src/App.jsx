import "./App.css";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailConteiner";

function Application() {
    return (
        <>
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/productos" element={<ItemListContainer/>}/>
            <Route path="/categoria/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/productos/:productId" element= {<ItemDetailConteiner/>}/>
        </Routes>
        </BrowserRouter>                                                     
        </>
    );
}

export default Application;


