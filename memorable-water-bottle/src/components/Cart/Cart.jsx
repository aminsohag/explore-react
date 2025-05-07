import PropTypes from 'prop-types';
import './Cart.css'

export default function Cart({cart}) {
  return (
    <div>
            <h3>Cart : {cart.length}</h3>
            <div className="img-container">
                {
                    cart.map(cart => <img src={cart.img}></img>)
                }
            </div>
    </div>
  )
}

Cart.propTypes = {
    cart: PropTypes.array.isRequired
}
