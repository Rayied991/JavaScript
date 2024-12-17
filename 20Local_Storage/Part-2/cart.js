const addProduct=()=>{
    const productNameField=document.getElementById('product-name');
    const productQuantityField=document.getElementById('product-quantity');
    const product=productNameField.value;
    const productQuantity=productQuantityField.value;
    productNameField.value='';
    productQuantityField.value='';
   console.log(product,productQuantity);
   displayProduct(product,productQuantity);
   saveProductToLocalStorage(product,productQuantity);
}

const displayProduct=(product,quantity)=>{
    const ul=document.getElementById('product-container');
    const li=document.createElement('li');
    li.innerText=`${product}: ${quantity}`;
    ul.appendChild(li);
    

}
const getStoredCart=()=>{
    let cart={};
    const savedCart=localStorage.getItem('cart');
    if(savedCart){
        cart=JSON.parse(savedCart);
    }
    return cart;
}
const saveProductToLocalStorage=(product,quantity)=>{
    const cart=getStoredCart();
    cart[product]=quantity;
    const cartStringify=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringify);

}

const displayProductsFromLocalStorage=()=>{
    const cart=getStoredCart();
    for(const product in cart){
        displayProduct(product, cart[product]);
    }
}
displayProductsFromLocalStorage();