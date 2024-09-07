import products from "./API/products.json";
import { FetchQuantityFromCartLS } from "./FetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getcartproducts";
import { incrementDecrement } from "./increamentDecreament";
import { removeProductFromCart } from "./removeProductFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd) =>{
  return cartProducts.some((curElem) => curElem.id === curProd.id)
});

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
  filterProducts.forEach((curProd) => {
    const { category, id, image, name, price, stock } = curProd;

    const productClone = document.importNode(templateContainer.content, true);

    const lSActualData = FetchQuantityFromCartLS(id, price);

    const cardElement = productClone.querySelector("#cardValue");
    cardElement.setAttribute("id", `card${id}`);

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productQuantity").textContent =
      lSActualData.quantity;
    productClone.querySelector(".productPrice").textContent =
      lSActualData.price;

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, stock, price);
      });

    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => {
        removeProductFromCart(id);
      });

    cartElement.appendChild(productClone);
  });
};

showCartProduct();

updateCartProductTotal();
