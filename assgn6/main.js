function Roll(flavor, price, description, imgUrl){
    this.flavor = flavor,
    this.price = price
    this.description = description,
    this.imgUrl = imgUrl
}

var og = new Roll("The Original", 7.00, "This is the original cinnamon bun", "https://images.unsplash.com/photo-1566217224819-e093a5a0798e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");

var blackberry = new Roll("Blackberry", 8.00, "", "https://images.unsplash.com/photo-1511459241548-45c3ca4e07a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");

var walnut = new Roll("Walnut", 8.00, "", "https://images.unsplash.com/photo-1567890667330-e04cbfd52af3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1491&q=80");

var oggf = new Roll("The Original (Gluten Free)", 9.00, "", "https://images.unsplash.com/photo-1514509152927-0403a1b6a2d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");

var pumpkin = new Roll("Pumpkin Spice", 10.00, "", "https://images.unsplash.com/photo-1483288578299-bdb6421dee2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1420&q=80");

var caramel = new Roll("Caramel Pecan", 10.00, "", "https://images.unsplash.com/photo-1516455802208-06db096f4b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");