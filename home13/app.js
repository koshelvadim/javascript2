const url1 = "./data.json";

async function fetchData(url) {
  try {
    const responce = await fetch(url);
    const data = await responce.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchData(url1);
  const productItemsEl = document.querySelector("#products-items");
  const cartItems = document.querySelector(".cart__items");
  const basketUser = "Basket";
  const basket = JSON.parse(localStorage.getItem(basketUser)) || [];
  renderBasket();

  function renderItem(el) {
    return `
        <a href="#" class="products__item" id="${el.id}">
            <img
              src="${el.imgsrc}"
              alt="product-img"
              class="products__item-img"
            />
            <div class="products__add-to-cart">
              <svg
                width="27"
                height="25"
                viewBox="0 0 27 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.9521 23.2662H21.8397C21.2306 23.2662 20.7188 22.7666 20.6746 22.1289C20.6302 21.4602 21.1187 20.8781 21.7637 20.8341C21.7891 20.8324 21.8156 20.8315 21.8417 20.8315C22.4587 20.8315 22.9755 21.3214 23.0213 21.9482C23.0331 22.1967 22.9926 22.5509 22.7371 22.8434L22.7312 22.8502L22.7254 22.8571C22.5287 23.0907 22.2619 23.2316 21.9521 23.2662ZM8.22003 23.2599C7.56946 23.2599 7.04022 22.7169 7.04022 22.0496C7.04022 21.3827 7.56946 20.8401 8.22003 20.8401C8.87061 20.8401 9.39984 21.3827 9.39984 22.0496C9.39984 22.7169 8.87061 23.2599 8.22003 23.2599Z"
                  fill="white"
                />
                <path
                  d="M21.8765 22.2662C21.9215 22.2549 21.9428 22.2339 21.9605 22.2129C21.9683 22.2037 21.9761 22.1946 21.9839 22.1855C22.0204 22.1438 22.0237 22.0553 22.0229 22.0105C22.0097 21.9044 21.9189 21.8315 21.8417 21.8315C21.838 21.8315 21.8341 21.8317 21.8317 21.8318C21.7536 21.8372 21.6658 21.9409 21.6724 22.0625C21.6818 22.1793 21.7679 22.2662 21.8397 22.2662H21.8765ZM8.22003 22.2599C8.31921 22.2599 8.39984 22.1655 8.39984 22.0496C8.39984 21.9341 8.31921 21.8401 8.22003 21.8401C8.12091 21.8401 8.04022 21.9341 8.04022 22.0496C8.04022 22.1655 8.12091 22.2599 8.22003 22.2599ZM21.9999 24.2662C21.9522 24.2662 21.8883 24.2662 21.8397 24.2662C20.7021 24.2662 19.7571 23.3545 19.677 22.198C19.5969 20.9929 20.4942 19.9183 21.6957 19.8364C21.7446 19.8331 21.7933 19.8315 21.8417 19.8315C22.9804 19.8315 23.9418 20.7324 24.0195 21.8884C24.051 22.4915 23.8746 23.0612 23.4903 23.5012C23.106 23.9575 22.5768 24.2177 21.9999 24.2662ZM8.22003 24.2599C7.01581 24.2599 6.04022 23.2709 6.04022 22.0496C6.04022 20.8291 7.01581 19.8401 8.22003 19.8401C9.42419 19.8401 10.3998 20.8291 10.3998 22.0496C10.3998 23.2709 9.42419 24.2599 8.22003 24.2599ZM21.1989 17.3938H9.13354C8.70062 17.3938 8.31635 17.1005 8.2038 16.6775L4.27802 2.24768H1.52222C0.993896 2.24768 0.561035 1.80859 0.561035 1.27039C0.561035 0.733032 0.993896 0.292969 1.52222 0.292969H4.99982C5.43182 0.292969 5.8161 0.586304 5.92859 1.01025L9.85443 15.4391H20.5581L24.1149 7.13379H12.2583C11.7291 7.13379 11.2962 6.69373 11.2962 6.15649C11.2962 5.61914 11.7291 5.17908 12.2583 5.17908H25.5891C25.9095 5.17908 26.2146 5.34192 26.3901 5.61914C26.5665 5.89539 26.5989 6.23743 26.4702 6.547L22.08 16.807C21.9198 17.1653 21.5832 17.3938 21.1989 17.3938Z"
                  fill="white"
                />
                <path
                  d="M21.8765 22.2662C21.9215 22.2549 21.9428 22.2339 21.9605 22.2129C21.9683 22.2037 21.9761 22.1946 21.9839 22.1855C22.0204 22.1438 22.0237 22.0553 22.0229 22.0105C22.0097 21.9044 21.9189 21.8315 21.8417 21.8315C21.838 21.8315 21.8341 21.8317 21.8317 21.8318C21.7536 21.8372 21.6658 21.9409 21.6724 22.0625C21.6818 22.1793 21.7679 22.2662 21.8397 22.2662H21.8765ZM8.22003 22.2599C8.31921 22.2599 8.39984 22.1655 8.39984 22.0496C8.39984 21.9341 8.31921 21.8401 8.22003 21.8401C8.12091 21.8401 8.04022 21.9341 8.04022 22.0496C8.04022 22.1655 8.12091 22.2599 8.22003 22.2599ZM21.9999 24.2662C21.9522 24.2662 21.8883 24.2662 21.8397 24.2662C20.7021 24.2662 19.7571 23.3545 19.677 22.198C19.5969 20.9929 20.4942 19.9183 21.6957 19.8364C21.7446 19.8331 21.7933 19.8315 21.8417 19.8315C22.9804 19.8315 23.9418 20.7324 24.0195 21.8884C24.051 22.4915 23.8746 23.0612 23.4903 23.5012C23.106 23.9575 22.5768 24.2177 21.9999 24.2662ZM8.22003 24.2599C7.01581 24.2599 6.04022 23.2709 6.04022 22.0496C6.04022 20.8291 7.01581 19.8401 8.22003 19.8401C9.42419 19.8401 10.3998 20.8291 10.3998 22.0496C10.3998 23.2709 9.42419 24.2599 8.22003 24.2599ZM21.1989 17.3938H9.13354C8.70062 17.3938 8.31635 17.1005 8.2038 16.6775L4.27802 2.24768H1.52222C0.993896 2.24768 0.561035 1.80859 0.561035 1.27039C0.561035 0.733032 0.993896 0.292969 1.52222 0.292969H4.99982C5.43182 0.292969 5.8161 0.586304 5.92859 1.01025L9.85443 15.4391H20.5581L24.1149 7.13379H12.2583C11.7291 7.13379 11.2962 6.69373 11.2962 6.15649C11.2962 5.61914 11.7291 5.17908 12.2583 5.17908H25.5891C25.9095 5.17908 26.2146 5.34192 26.3901 5.61914C26.5665 5.89539 26.5989 6.23743 26.4702 6.547L22.08 16.807C21.9198 17.1653 21.5832 17.3938 21.1989 17.3938Z"
                  fill="white"
                />
              </svg>
              Add To Cart
            </div>
            <div class="products__item-box">
              <h3 class="products__item-title">${el.title}</h3>
              <p class="products__item-subtitle">${el.subtitle}</p>
              <p class="products__item-coast">$${el.price}</p>
            </div>
          </a>
        `;
  }

  data.forEach((el) => {
    productItemsEl.insertAdjacentHTML("beforeend", renderItem(el));
  });

  function renderCart(el) {
    return `
            <div class="cart__item" id="${el.id}">
              <img class="cart__item-img" src="${el.imgsrc}" alt="picture" />
              <div class="cart__item-body">
                <h3 class="cart__item-title">${el.title}</h3>
                <p class="cart__item-price">Price: <span>$${el.price}</span></p>
                <p class="cart__item-color">Color: <span>${el.color}</span></p>
                <p class="cart__item-size">Size: <span>${el.size}</span></p>
                <p class="cart__item-quantity">Quantity: <span>${el.quantity}</span></p>
                <a class="cart__btn-close" href="#">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                      fill="#575757"
                    />
                  </svg>
                </a>
              </div>
            </div>
             `;
  }

  function addToBasket(el) {
    if (basket.length === 0) {
      basket.push(el);
      renderBasket();
    } else {
      let flag = false;

      basket.forEach((item) => {
        if (el.id === item.id && flag === false) {
          flag = true;
          item.quantity = Number(item.quantity) + 1;
          renderBasket();
        }
      });

      if (!flag) {
        basket.push(el);
        renderBasket();
      }
    }
  }

  function deleteToBasket(item) {
    const idItem = Number(item.id);
    basket.forEach((el, index) => {
      if (el.id === idItem) {
        if (el.quantity > 1) {
          el.quantity = Number(el.quantity) - 1;
          renderBasket();
        } else {
          basket.splice(index, 1);
          renderBasket();
        }
      }
    });
  }

  function renderBasket() {
    localStorage.setItem(basketUser, JSON.stringify(basket));
    const basketStorage = JSON.parse(localStorage.getItem(basketUser));
    cartItems.innerHTML = "";
    basketStorage.forEach((el) => {
      cartItems.insertAdjacentHTML("beforeend", renderCart(el));
    });
  }

  renderBasket();

  productItemsEl.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.closest(".products__item")) {
      const item = e.target.closest(".products__item");
      if (item) {
        const id = Number(item.id);
        data.forEach((el) => {
          if (el.id === id) {
            addToBasket(el);
          }
          return;
        });
      }
    }
  });

  cartItems.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.closest(".cart__btn-close")) {
      const item = e.target.closest(".cart__item");
      if (item) {
        deleteToBasket(item);
      }
    }
  });
});
