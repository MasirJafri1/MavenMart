import "./style.css";
import products from "./API/products.json";
import { showProductContainer } from "./HomeProductCards";

showProductContainer(products);

// Smooth scrolling script
document.querySelectorAll('.nav-item a[href*="#"]').forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    const href = item.getAttribute('href');
    
    let targetId = href.substring(1);
    
    const idMap = {
      products: "products_redirect",
      home: "home_redirect",
      about: "about_redirect",
      contact: "contact_redirect"
    };

    if (idMap[targetId]) {
      targetId = idMap[targetId];
    }
    
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});

// FOR SMOOTHSCROLLING OF LAST FOOTER 
document.querySelectorAll(".last_footer a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = link.getAttribute("href").substring(1);

    const idMap = {
      home: "home_redirect",
      about: "about_redirect",
      products: "products_redirect",
      contact: "contact_redirect",
    };

    const targetId = idMap[href];

    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});


// EXPLORE THE PRODUCTS SMOOTH SCROLLING  
document.querySelectorAll('a[href*="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = link.getAttribute("href").substring(1);

    const idMap = {
      products: "products_redirect",
    };

    const targetId = idMap[href] || href;

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});







