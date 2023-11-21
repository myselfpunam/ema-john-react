import { getStoredCart } from "../utilities/StoreData";

export const productsAndCartLoader = async () => { 
  //get Products
  const productsData = await fetch('products.json');
  const products = await productsData.json();

  //get Cart
  const savedCart = getStoredCart();
  const previousCart = []
  
  for(const id in savedCart ){
    const addedProduct = products.find(product => product.id===id)
    if(addedProduct){
       const quantity = savedCart[id]
       addedProduct.quantity =quantity;
       previousCart.push(addedProduct)
    }
  }
  return { products , previousCart };

}