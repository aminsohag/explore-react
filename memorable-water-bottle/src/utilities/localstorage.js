const getStoredCart = () => {
    const stordCartSt = localStorage.getItem('cart')
    if(stordCartSt){
        return JSON.parse(stordCartSt)
    }
    return [];
}


const saveToLS = (cart) => {
    const stringified = JSON.stringify(cart)
    localStorage.setItem('cart', stringified)
} 

const addToLS = (id) => {
    const cart = getStoredCart()
    cart.push(id)
    // save to localstorage
    saveToLS(cart)
    
}

export {addToLS, getStoredCart}