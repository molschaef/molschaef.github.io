let products = JSON.parse(localStorage.getItem("cart"));

// function to update cart html
function updateCart() {
    let htmlString = "";
    let itemNum = 0;
    // loop through each product and add that item to the html string
    if (products.length==0) {
            document.getElementById("cart-container").innerHTML = "<div></div><div id=\"nothing\">There is nothing in your cart!</div>"
    } else {
        for (let product of products) {
            product.id = itemNum;
            htmlString += `<div class=\"cart-item\"><img src =\"${product.prodImg}\" alt=\"${product.flavor}\"></div><div class=\"cart-item\"><p>${product.flavor}<br/><br/>Glaze: ${product.glaze}<br/>Quantity: ${product.quant}<br/></p></div><div>${product.price}</div><div class = \"cart-item\"><a href=\"\" onclick = "removeItem(${product.id})">Remove</a></div>`;
            itemNum++;
        }
        // add the html string of products to the grid
        document.getElementById("cart-container").innerHTML = "<div></div><div></div><div></div><div><button type=\"button\">Checkout</button></div>" + htmlString + "<div></div><div></div><div></div><div><button type=\"button\">Checkout</button></div>";
    }
};


// remove an item from the shopping cart
function removeItem(productId) {
    for (let i in products) {
        if (products[i].id == productId) {
            products.splice(i, 1);
        }
    }
    localStorage.setItem("cart", JSON.stringify(products));
    updateCart();
};