// Prototype for cinnamon roll
function Roll(flavor, price, description, imgUrl){
    this.flavor = flavor,
    this.price = price,
    this.description = description,
    this.imgUrl = imgUrl
};

// Each flavor cinnamon roll
var og = new Roll("The Original", "$7.00", "Our original recipe!", "https://images.unsplash.com/photo-1566217224819-e093a5a0798e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
var blackberry = new Roll("Blackberry", "$8.00", "Sweet... Tart... Just what you need!", "https://images.unsplash.com/photo-1511459241548-45c3ca4e07a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
var walnut = new Roll("Walnut", "$8.00", "For our \"nutty\" customers!", "https://images.unsplash.com/photo-1567890667330-e04cbfd52af3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1491&q=80");
var oggf = new Roll("The Original (Gluten Free)", "$9.00", "All the great taste of The Original... Now Gluten Free!", "https://images.unsplash.com/photo-1514509152927-0403a1b6a2d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
var pumpkin = new Roll("Pumpkin Spice", "$10.00", "Spice up fall with Pumpkin Spice", "https://images.unsplash.com/photo-1483288578299-bdb6421dee2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1420&q=80");
var caramel = new Roll("Caramel Pecan", "$10.00", "Knock Knock!<br> Who's there? <br> Candy! <br> Candy who? <br> Candy Caramel Pecan get any better!?", "https://images.unsplash.com/photo-1516455802208-06db096f4b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");

// cart quantity
var cartQuant = 0;

let products = setProductsArray();

// Set the products array
// if there is nothing already in local storage then initialize the array to be empty
// if there is something in local storage then set the products array to local storage
function setProductsArray() {
    if (localStorage.getItem("cart") == null) {
        return [];
    } else {
        return JSON.parse(localStorage.getItem("cart"));
    }
};

// Another simplified way to set products array using a ternary operator
// let products = localStorage.getItem("cart") == null ? [] : JSON.parse(localStorage.getItem("cart"));

// update the information on the product details page depending on what flavor the customer clicked
function updateProdDetails(element) {
    if (element.id == "og" || element.id == "og2") { // if original clicked then update information and set original to active and set all other products to inactive
        document.getElementById("prodName").innerHTML = og.flavor;
        document.getElementById("prodPrice").innerHTML = og.price;
        document.getElementById("prodDescrip").innerHTML = og.description;
        document.getElementById("og").className = "active";
        document.getElementById("og2").className = "active";
        document.getElementById("blackberry").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("walnut").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("oggf").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("pumpkin").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("caramel").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("blackberry2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("walnut2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("oggf2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("pumpkin2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("caramel2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("prodImg").src = og.imgUrl;
    } else if (element.id == "blackberry" || element.id == "blackberry2") { // if blackberry clicked then update information and set blackberry to active and set all other products to inactive
        document.getElementById("prodName").innerHTML = blackberry.flavor;
        document.getElementById("prodPrice").innerHTML = blackberry.price;
        document.getElementById("prodDescrip").innerHTML = blackberry.description;
        document.getElementById("blackberry").className = "active";
        document.getElementById("blackberry2").className = "active";
        document.getElementById("og").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("walnut").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("oggf").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("pumpkin").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("caramel").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("og2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("walnut2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("oggf2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("pumpkin2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("caramel2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("prodImg").src = blackberry.imgUrl;
    } else if (element.id == "walnut" || element.id == "walnut2") { // if walnut clicked then update information and set walnut to active and set all other products to inactive
        document.getElementById("prodName").innerHTML = walnut.flavor;
        document.getElementById("prodPrice").innerHTML = walnut.price;
        document.getElementById("prodDescrip").innerHTML = walnut.description;
        document.getElementById("walnut").className = "active";
        document.getElementById("walnut2").className = "active";
        document.getElementById("og").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("blackberry").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("oggf").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("pumpkin").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("caramel").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("og2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("blackberry2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("oggf2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("pumpkin2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("caramel2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("prodImg").src = walnut.imgUrl;
    } else if (element.id == "oggf" || element.id == "oggf2") { // if original GF clicked then update information and set original GF to active and set all other products to inactive
        document.getElementById("prodName").innerHTML = oggf.flavor;
        document.getElementById("prodPrice").innerHTML = oggf.price;
        document.getElementById("prodDescrip").innerHTML = oggf.description;
        document.getElementById("oggf").className = "active";
        document.getElementById("oggf2").className = "active";
        document.getElementById("og").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("walnut").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("blackberry").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("pumpkin").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("caramel").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("og2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("walnut2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("blackberry2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("pumpkin2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("caramel2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("prodImg").src = oggf.imgUrl;
    } else if (element.id == "pumpkin" || element.id == "pumpkin2") { // if pumpkin clicked then update information and set pumpkin to active and set all other products to inactive
        document.getElementById("prodName").innerHTML = pumpkin.flavor;
        document.getElementById("prodPrice").innerHTML = pumpkin.price;
        document.getElementById("prodDescrip").innerHTML = pumpkin.description;
        document.getElementById("pumpkin").className = "active";
        document.getElementById("pumpkin2").className = "active";
        document.getElementById("og").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("walnut").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("oggf").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("blackberry").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("caramel").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("og2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("walnut2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("oggf2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("blackberry2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("caramel2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("prodImg").src = pumpkin.imgUrl;
    } else if (element.id == "caramel" || element.id == "caramel2") { // if caramel clicked then update information and set caramel to active and set all other products to inactive
        document.getElementById("prodName").innerHTML = caramel.flavor;
        document.getElementById("prodPrice").innerHTML = caramel.price;
        document.getElementById("prodDescrip").innerHTML = caramel.description;
        document.getElementById("caramel").className = "active";
        document.getElementById("caramel2").className = "active";
        document.getElementById("og").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("walnut").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("oggf").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("pumpkin").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("blackberry").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("og2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("walnut2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("oggf2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("pumpkin2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("blackberry2").className = document.getElementById("blackberry").className.replace("active", "");
        document.getElementById("prodImg").src = caramel.imgUrl;
    }
};

// update the details based on glaze selected
function getSelectedGlaze (glazeId) {
    var selected = document.getElementById(glazeId).value;
    document.getElementById("glazeDisplay").innerHTML = "Glaze: " + selected;
};

// update details based on quantity selected
function getSelectedQuantity (quantId) {
    var selected = document.getElementById(quantId).value;
    document.getElementById("quantDisplay").innerHTML = "Quantity: " + selected;
};

// Add item to cart quantity displayed on top right every time the Add to Cart button is pressed
function addToCart() {
    // update cart quantity
    updateCartQuant();
    // update the cart item list
    addProduct();


};

function updateCartQuant() {
    cartQuant+=1;
    document.getElementById("cartQuant").innerHTML = cartQuant;
}

// add the product details to cart page
function addProduct() {
    let product = {};
    product.prodImg = document.getElementById("prodImg").src;
    product.flavor = document.getElementById("prodName").innerHTML;
    product.price = document.getElementById("prodPrice").innerHTML;
    product.glaze = document.getElementById("glaze").value;
    product.quant = document.getElementById("quantity").value;

    products.push(product);
    localStorage.setItem("cart", JSON.stringify(products));
};





















