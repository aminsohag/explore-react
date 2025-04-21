const product = () => {
    const pName = document.getElementById('product-name')
    const pQuantity = document.getElementById('product-quantity')
    const proName = pName.value;
    const proQuantity = pQuantity.value;

    
   if(proName && proQuantity){
    localStorage.setItem(proName, proQuantity);
   }

    pName.value = ' '
    pQuantity.value = ' '
}