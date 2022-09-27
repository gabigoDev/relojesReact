import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./CartContext";

const CartWidget = () => {
    let { carrito } = useContext(Context);
    let items =
        carrito.reduce((count, watch) => count + watch.quantity, 0) ?? 0;
    return (
        <Button
            variant="primary"
            className={"position-relative"}
            as={Link}
            to={"/cart"}
        >
            <i className="fa-solid fa-cart-shopping"></i>
            {items === 0 ? (
                ""
            ) : (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {items}
                    <span className="visually-hidden">unread messages</span>
                </span>
            )}
        </Button>
    );
};
export default CartWidget;
