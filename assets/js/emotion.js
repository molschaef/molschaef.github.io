// Prototype for emotions
function Emotion(name, example, img, color){
    this.name = name,
    this.example = example,
    this.img = img,
    this.color = color
};

let happy = new Emotion("Happy", "sample text", "assets/images/happy.png", "#98DACF");
let sad = new Emotion("Sad", "sample text", "assets/images/sad.png", "#265373");
let loved = new Emotion("Loved", "sample text", "assets/images/loved.png", "#BF98A0");
// let lonely = new Emotion("Lonely", "sample text", "sample text", "assets/images/brave.png");
let brave = new Emotion("Brave", "sample text", "assets/images/brave.png", "#98DACF");
// let mad = new Emotion("Mad", "sample text", "sample text", "assets/images/mad.png", "#");
// let peaceful = new Emotion("Peaceful", "sample text", "sample text", "assets/images/brave.png", "#");
let overwhelmed = new Emotion("Overwhelmed", "sample text", "assets/images/overwhelmed.png", "#B0C0D6");

// let impatient = new Emotion("Impatient", "sample text", "sample text", "assets/images/brave.png");
let confused = new Emotion("Confused", "sample text", "assets/images/confused.png", "#BF98A0");
let curious = new Emotion("Curious", "sample text", "assets/images/curious.png", "#BF98A0");
let excited = new Emotion("Excited", "sample text", "assets/images/excited.png", "#B0D8F4");
let friendly = new Emotion("Friendly", "sample text", "assets/images/friendly.png", "#B99AA0");
// let shy = new Emotion("Shy", "sample text", "sample text", "../images/sad.png");
// let worried = new Emotion("Worried", "sample text", "sample text", "../images/sad.png");
// let silly = new Emotion("Silly", "sample text", "sample text", "../images/sad.png");

let emotions = [brave, confused, curious, excited, friendly, happy, loved, overwhelmed, sad];

// function to create the emotion flip cards
function createEmotions() {
    let htmlString = "";
    for (let emotion of emotions) {
        //  for reference: htmlString += `<div class=\"cart-item\"><img src =\"${product.prodImg}\" alt=\"${product.flavor}\"></div><div class=\"cart-item\"><p>${product.flavor}<br/><br/>Glaze: ${product.glaze}<br/>Quantity: ${product.quant}<br/></p></div><div>$${product.quant*parseInt(product.price.slice(1))}.00</div><div class = \"cart-item\"><a href=\"\" onclick = "removeItem(${product.id})">Remove</a></div>`;
        // htmlString += '<div class=\"col-sm-3 box\" id= \"' + emotion.name + '\">' + emotion.name + '</div>';
        htmlString += `<div class=\"flip-card col-sm-6 col-md-4\" id = \" ${emotion.name}\"><div class=\"flip-card-inner col-sm-3\"><div class=\"flip-card-front\"><h2>${emotion.name}</h2><img src=\"${emotion.img}\" alt=\"${emotion.name}\" style=\"width:200px;height:200px;\"></div><div class=\"flip-card-back\" style=\"background-color:${emotion.color}\"><h2>${emotion.name}</h2><p>${emotion.description}</p><p>${emotion.example}</p></div></div></div>`;
    }
    $("#emotion-body").append(htmlString);
};

// function to get the synonyms for each emotion word
async function synonym() {
    for (let emotion of emotions) {
        // call the dicstionary API
        const response = await fetch(`https://dictionaryapi.com/api/v3/references/ithesaurus/json/${emotion.name}?key=5373bc69-898f-474a-84c7-080519020af1`);
        const myJson = await response.json();
        emotion.synonym = [];
        for (let word of myJson) {
            if (word.fl === "adjective" && word.meta.id === emotion.name.toLowerCase()) {
                emotion.synonym = word.meta.syns[0];
                console.log(word.meta.syns[0]);
            }
        }
        // remove the word manful from the brave synonym array
        // indexOf will find the index of this word in the array. If it finds it, it returns the index. If it does not find it, it returns -1.
        let index = emotion.synonym.indexOf("manful");
        // -1 means the index was not found, so we check to make sure manful was found and then remove it
        if (index != -1) emotion.synonym.splice(index, 1);
    }
}

// do these things when the page is ready
$( document ).ready(function() {
    createEmotions();
    synonym();
});