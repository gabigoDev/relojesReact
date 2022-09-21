import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailConteiner";
import Cart from "./components/Cart";
import Home from "./components/Home";
import CartContext from "./components/CartContext";

function Application() {
    return (
        <>
            <BrowserRouter>
            <CartContext>
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
                </CartContext>
            </BrowserRouter>
        </>
    );
}

export default Application;
