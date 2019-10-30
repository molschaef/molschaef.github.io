let products = JSON.parse(localStorage.getItem("cart"));

// function to update cart html
function updateCart() {
    let htmlString = "";
    let itemNum = 0;
    // store total price
    let total = 0;
    // loop through each product and add that item to the html string
    if (products.length==0) {
            document.getElementById("cart-container").innerHTML = "<div></div><div id=\"nothing\">There is nothing in your cart!</div>"
    } else {
        for (let product of products) {
            // set product id to use for remove function
            product.id = itemNum;
            // add product to html string
            htmlString += `<div class=\"cart-item\"><img src =\"${product.prodImg}\" alt=\"${product.flavor}\"></div><div class=\"cart-item\"><p>${product.flavor}<br/><br/>Glaze: ${product.glaze}<br/>Quantity: ${product.quant}<br/></p></div><div>$${product.quant*parseInt(product.price.slice(1))}.00</div><div class = \"cart-item\"><a href=\"\" onclick = "removeItem(${product.id})">Remove</a></div>`;
            itemNum++;
            // add the current product price to the total by removing the $ and converting the string to an int
            total += (parseInt(product.price.slice(1)))*product.quant;
        }
        // add the html string of products to the grid
        document.getElementById("cart-container").innerHTML = "<div></div><div></div><div></div><div><button type=\"button\">Checkout</button></div>" + htmlString + `<div></div><div></div><div id = \"total\">Total: \$${total}.00</div><div></div>` + "<div></div><div></div><div></div><div><button type=\"button\">Checkout</button></div>";
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