import PropTypes from 'prop-types';
import './Bottle.css'

export default function Bottle({bottle, handlePur}) {
    const {name, price, img, id} = bottle
  return (
    <div className='bottle'>
      <h3>Name: {name}</h3>
      <p>Price: {price}</p>
      <img src={img} alt="" />
      <br />
      <button onClick={() => handlePur(bottle)}>Purchase</button>
    </div>
  )
}

Bottle.propTypes = {
  bottle: PropTypes.object.isRequired
  handlePur: PropTypes.func.isRequired
}
