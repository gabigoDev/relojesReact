import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailConteiner";
import Cart from "./components/Cart";
import Home from "./components/Home";
import CartContext from "./components/CartContext";
import NotFound from "./components/NotFound";

function Application() {
    return (
        <>
            <BrowserRouter>
                <CartContext>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/categories/all"
                            element={<ItemListContainer />}
                        />
                        <Route
                            path="/categories/:categoryId"
                            element={<ItemListContainer />}
                        />
                        <Route
                            path="/item/:productId"
                            element={<ItemDetailConteiner />}
                        />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </CartContext>
            </BrowserRouter>
        </>
    );
}

export default Application;
