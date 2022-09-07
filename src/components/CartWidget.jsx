import Button from 'react-bootstrap/Button';

const CartWidget = (props) => {
    let items = props.items ?? 0;
    return (
        <Button variant="primary">    
            <i className="fa-solid fa-cart-shopping"></i> <span className= "ml-1">{items}</span>
        </Button>
    )
} 
export default CartWidget;