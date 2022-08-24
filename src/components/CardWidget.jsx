import Button from 'react-bootstrap/Button';

const CardWidget = (props) => {
    let items = props.items ?? 0;
    return (
        <Button variant="primary">    
            <i class="fa-solid fa-cart-shopping"></i> <span class= "ml-1">{items}</span>
        </Button>
    )
} 
export default CardWidget;