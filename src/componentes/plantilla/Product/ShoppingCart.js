import React, { useState } from 'react';

const ShoppingCart = () => {
// Obteniendo los elementos de los productos y el total
const cartItems = [
    {
      id: 1,
      name: "Barbecue Chicken Salad",
      price: 25.00,
      description: "Lettuce, cucumbers, tomatoes, scallions, corn, chicken with tangy barbecue ranch dressing.",
      image: "assets/images/food/img7.jpg"
    },
    {
      id: 2,
      name: "Harvest Cobb Salad",
      price: 15.00,
      description: "Lettuce, cucumbers, tomatoes, scallions, corn, chicken with tangy barbecue ranch dressing.",
      image: "assets/images/food/img9.jpg"
    },
    {
      id: 3,
      name: "Greek Salad",
      price: 28.00,
      description: "Lettuce, cucumbers, tomatoes, chicken with tangy barbecue ranch dressing.",
      image: "assets/images/food/img2.jpg"
    },
    {
      id: 4,
      name: "Garden Chickpea Salad",
      price: 22.00,
      description: "Perfect for vegetarian and buffets, this is a job of gorgeous ingredients.",
      image: "assets/images/food/img6.jpg"
    }
  ];
  
  // Renderizando productos en el carrito
  function renderCartItems() {
    const cartContainer = document.querySelector(".row.gx-3");
    cartContainer.innerHTML = ""; // Limpiar contenido existente
    
    let total = 0;
  
    cartItems.forEach((item) => {
      total += item.price;
      cartContainer.innerHTML += `
        <div class="col-xxl-6 col-sm-12 col-12">
          <div class="product-added-card">
            <div class="row gx-3">
              <div class="col-xl-4 col-sm-5 col-12">
                <img class="product-added-img img-fluid" src="${item.image}" alt="${item.name}">
              </div>
              <div class="col-xl-8 col-sm-7 col-12">
                <div class="product-added-card-body">
                  <h5 class="product-added-title">${item.name}</h5>
                  <div class="product-added-price">$${item.price.toFixed(2)}</div>
                  <div class="product-added-description">${item.description}</div>
                  <div class="product-added-actions">
                    <button class="btn btn-light remove-from-cart" data-id="${item.id}">Remove from Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    });
  
    // Actualizar total
    document.querySelector(".sub-total-container .total").textContent = `Order Total: $${total.toFixed(2)}`;
  }
  
  // Evento para eliminar productos del carrito
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-from-cart")) {
      const itemId = Number(event.target.getAttribute("data-id"));
      const itemIndex = cartItems.findIndex(item => item.id === itemId);
  
      if (itemIndex > -1) {
        cartItems.splice(itemIndex, 1);
        renderCartItems(); // Volver a renderizar los productos
      }
    }
  });
  
  // Inicializar renderizado
  renderCartItems();
};
export default ShoppingCart;