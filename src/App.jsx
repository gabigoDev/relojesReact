import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailConteiner";
import Cart from "./components/Cart";
import Home from "./components/Home"
function Application() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/categoria/all"
                        element={<ItemListContainer />}
                    />
                    <Route
                        path="/categoria/:categoryId"
                        element={<ItemListContainer />}
                    />
                    <Route
                        path="/productos/:productId"
                        element={<ItemDetailConteiner />}
                    />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Application;
