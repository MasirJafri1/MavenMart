export const homeQuantityToggle = (event, id, stock) => {
  const currentCardElement = document.querySelector(`#card${id}`);
  const productQuantity = currentCardElement.querySelector(".productQuantity");

  let quantity =
    parseInt(productQuantity.getAttribute("data-quantity")) || 1;

  if (event.target.classList.contains("cartIncrement")) {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock
    }
  }

  if (event.target.classList.contains("cartDecrement")) {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  productQuantity.innerText = quantity;
  productQuantity.setAttribute("data-quantity", quantity.toString());

  return quantity;
};
