// importo componentes de font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <a href="#" className="nav-link" style={{color: "#FFFFFF"}}>
      
      {/* icono de carrito */}
      <FontAwesomeIcon icon={faCartShopping} className="me-2" />

      {/* cantidad de productos en el carrito */} 
      <span className="badge text-bg-danger rounded-pill">4</span>
      </a>
  );
}

export default CartWidget;

