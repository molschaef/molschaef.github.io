// Prototype for emotions
function Emotion(name, example, img, color){
    this.name = name,
    this.example = example,
    this.img = img,
    this.color = color
};

var happy = new Emotion("Happy", "sample text", "assets/images/happy.png", "#98DACF");
var sad = new Emotion("Sad", "sample text", "assets/images/sad.png", "#265373");
var loved = new Emotion("Loved", "sample text", "assets/images/loved.png", "#BF98A0");
// var lonely = new Emotion("Lonely", "sample text", "sample text", "assets/images/brave.png");
var brave = new Emotion("Brave", "sample text", "assets/images/brave.png", "#98DACF");
// var mad = new Emotion("Mad", "sample text", "sample text", "assets/images/mad.png", "#");
// var peaceful = new Emotion("Peaceful", "sample text", "sample text", "assets/images/brave.png", "#");
var overwhelmed = new Emotion("Overwhelmed", "sample text", "assets/images/overwhelmed.png", "#B0C0D6");

// var impatient = new Emotion("Impatient", "sample text", "sample text", "assets/images/brave.png");
var confused = new Emotion("Confused", "sample text", "assets/images/confused.png", "#BF98A0");
var curious = new Emotion("Curious", "sample text", "assets/images/curious.png", "#BF98A0");
var excited = new Emotion("Excited", "sample text", "assets/images/excited.png", "#B0D8F4");
var friendly = new Emotion("Friendly", "sample text", "assets/images/friendly.png", "#B99AA0");
// var shy = new Emotion("Shy", "sample text", "sample text", "../images/sad.png");
// var worried = new Emotion("Worried", "sample text", "sample text", "../images/sad.png");
// var silly = new Emotion("Silly", "sample text", "sample text", "../images/sad.png");


var emotions = [brave, confused, curious, excited, friendly, happy, loved, overwhelmed, sad];

function createEmotions() {
    let htmlString = "";
    for (let emotion of emotions) {
        //  for reference: htmlString += `<div class=\"cart-item\"><img src =\"${product.prodImg}\" alt=\"${product.flavor}\"></div><div class=\"cart-item\"><p>${product.flavor}<br/><br/>Glaze: ${product.glaze}<br/>Quantity: ${product.quant}<br/></p></div><div>$${product.quant*parseInt(product.price.slice(1))}.00</div><div class = \"cart-item\"><a href=\"\" onclick = "removeItem(${product.id})">Remove</a></div>`;
        // htmlString += '<div class=\"col-sm-3 box\" id= \"' + emotion.name + '\">' + emotion.name + '</div>';
        htmlString += `<div class=\"flip-card col-sm-6 col-md-4\" id = \" ${emotion.name}\"><div class=\"flip-card-inner col-sm-3\"><div class=\"flip-card-front\"><h2>${emotion.name}</h2><img src=\"${emotion.img}\" alt=\"${emotion.name}\" style=\"width:200px;height:200px;\"></div><div class=\"flip-card-back\" style=\"background-color:${emotion.color}\"><h2>${emotion.name}</h2><p>${emotion.description}</p><p>${emotion.example}</p></div></div></div>`;
    }
    $("#emotion-body").append(htmlString);

};

async function synonym() {
    for (let emotion of emotions) {
        const response = await fetch(`https://dictionaryapi.com/api/v3/references/ithesaurus/json/${emotion.name}?key=5373bc69-898f-474a-84c7-080519020af1`);
        const myJson = await response.json();
        emotion.synonym = [];
        for (let word of myJson) {
            console.log(word.fl);
            console.log(word.meta.id);
            if (word.fl === "adjective" && word.meta.id === emotion.name) {
                emotion.synonym.concat(word.meta.syns[0]);
                console.log("test");
                console.log(word.meta.syns[0]);
            }
        }
    }
}

$( document ).ready(function() {
    createEmotions();
    synonym();
});