import { getCartProductFromLS } from "./getcartproducts";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

export const removeProductFromCart = (id) => {
  let cartProducts = getCartProductFromLS();
  cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

  localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove();

    showToast("delete", id);
    console.log(showToast);
    
  }

  updateCartValue(cartProducts);
  updateCartProductTotal();
};
