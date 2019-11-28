// Prototype for emotions
function Emotion(name, description, example){
    this.name = name,
    this.description = description,
    this.example = example
};

var happy = new Emotion("happy", "sample text", "sample text");
var sad = new Emotion("sad", "sample text", "sample text");
var loved = new Emotion("loved", "sample text", "sample text");
var lonely = new Emotion("lonely", "sample text", "sample text");
var brave = new Emotion("brave", "sample text", "sample text");
var angry = new Emotion("angry", "sample text", "sample text");
var peaceful = new Emotion("peaceful", "sample text", "sample text");
var overwhelmed = new Emotion("overwhelmed", "sample text", "sample text");


var emotions = [happy, sad, loved, lonely, brave, angry, peaceful, overwhelmed];

function createEmotions() {
    let htmlString = "";
    for (let emotion of emotions) {
        //  for reference: htmlString += `<div class=\"cart-item\"><img src =\"${product.prodImg}\" alt=\"${product.flavor}\"></div><div class=\"cart-item\"><p>${product.flavor}<br/><br/>Glaze: ${product.glaze}<br/>Quantity: ${product.quant}<br/></p></div><div>$${product.quant*parseInt(product.price.slice(1))}.00</div><div class = \"cart-item\"><a href=\"\" onclick = "removeItem(${product.id})">Remove</a></div>`;
        htmlString += '<div class=\"col-sm-3 box\" id= \"' + emotion.name + '\">' + emotion.name + '</div>';
        console.log(emotion.name);
    }
    document.getElementById("emotion-body").innerHTML = htmlString;
}