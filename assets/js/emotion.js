// Prototype for emotions
function Emotion(name, description, example, img, color){
    this.name = name,
    this.description = description,
    this.example = example,
    this.img = img,
    this.color = color
};

var happy = new Emotion("Happy", "sample text", "sample text", "assets/images/happy.png", "#98DACF");
var sad = new Emotion("Sad", "sample text", "sample text", "assets/images/sad.png", "#265373");
var loved = new Emotion("Loved", "sample text", "sample text", "assets/images/loved.png", "#BF98A0");
// var lonely = new Emotion("Lonely", "sample text", "sample text", "assets/images/brave.png");
var brave = new Emotion("Brave", "sample text", "sample text", "assets/images/brave.png", "#98DACF");
// var mad = new Emotion("Mad", "sample text", "sample text", "assets/images/mad.png", "#");
// var peaceful = new Emotion("Peaceful", "sample text", "sample text", "assets/images/brave.png", "#");
var overwhelmed = new Emotion("Overwhelmed", "sample text", "sample text", "assets/images/overwhelmed.png", "#B0C0D6");

// var impatient = new Emotion("Impatient", "sample text", "sample text", "assets/images/brave.png");
var confused = new Emotion("Confused", "sample text", "sample text", "assets/images/confused.png", "#BF98A0");
var curious = new Emotion("Curious", "sample text", "sample text", "assets/images/curious.png", "#BF98A0");
var excited = new Emotion("Excited", "sample text", "sample text", "assets/images/excited.png", "#B0D8F4");
var friendly = new Emotion("Friendly", "sample text", "sample text", "assets/images/friendly.png", "#B99AA0");
// var shy = new Emotion("Shy", "sample text", "sample text", "../images/sad.png");
// var worried = new Emotion("Worried", "sample text", "sample text", "../images/sad.png");
// var silly = new Emotion("Silly", "sample text", "sample text", "../images/sad.png");


var emotions = [brave, confused, curious, excited, friendly, happy, loved, overwhelmed, sad];

function createEmotions() {
    let htmlString = "";
    for (let emotion of emotions) {
        //  for reference: htmlString += `<div class=\"cart-item\"><img src =\"${product.prodImg}\" alt=\"${product.flavor}\"></div><div class=\"cart-item\"><p>${product.flavor}<br/><br/>Glaze: ${product.glaze}<br/>Quantity: ${product.quant}<br/></p></div><div>$${product.quant*parseInt(product.price.slice(1))}.00</div><div class = \"cart-item\"><a href=\"\" onclick = "removeItem(${product.id})">Remove</a></div>`;
        // htmlString += '<div class=\"col-sm-3 box\" id= \"' + emotion.name + '\">' + emotion.name + '</div>';
        htmlString += `<div class=\"flip-card col-sm-6 col-md-4\" id = \" ${emotion.name}\"><div class=\"flip-card-inner col-sm-3\"><div class=\"flip-card-front\"><h1>${emotion.name}</h1><img src=\"${emotion.img}\" alt=\"${emotion.name}\" style=\"width:200px;height:200px;\"></div><div class=\"flip-card-back\" style=\"background-color:${emotion.color}\"><h1>${emotion.name}</h1><p>${emotion.description}</p><p>${emotion.example}</p></div></div></div>`;
    }
    document.getElementById("emotion-body").innerHTML = htmlString;
};
