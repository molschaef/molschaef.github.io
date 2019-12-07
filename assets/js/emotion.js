// Prototype for emotions
function Emotion(name, example, img, color){
    this.name = name,
    this.example = example,
    this.img = img,
    this.color = color
};

// List of emotion objects
let happy = new Emotion("Happy", "Example: Remember when I did [insert something that makes you happy]? That made me really happy because [insert reason]", "assets/images/happy.png", "#265373");
let sad = new Emotion("Sad", "Example: It can be difficult to feel sad. Sometimes I feel sad too. For example...", "assets/images/sad.png", "#265373");
let loved = new Emotion("Loved", "Example: Remember last Thanksgiving when we were with all our family? I felt very loved then.", "assets/images/loved.png", "#265373");
let brave = new Emotion("Brave", "Example: When you got your shot at the doctor last week, you were very brave.", "assets/images/brave.png", "#265373");
let worried = new Emotion("Worried", "Example: Sometimes when I [insert worrying experience you have had], it makes me feel worried. What makes you feel worried?", "assets/images/overwhelmed.png", "#265373");
let confused = new Emotion("Confused", "Example: The other day when we were walking around the park, we got lost! This left us very confused.", "assets/images/confused.png", "#265373");
let curious = new Emotion("Curious", "Example: Remember the other day when you wanted to know where you came from? You were feeling curious!", "assets/images/curious.png", "#265373");
let excited = new Emotion("Excited", "Example: Every time I get to eat ice cream, I feel excited!", "assets/images/excited.png", "#265373");
let friendly = new Emotion("Friendly", "Example: When you feel like spending time with others, you are feeling friendly.", "assets/images/friendly.png", "#265373");

// Additional emotions that could be added later
// let shy = new Emotion("Shy", "sample text", "sample text", "../images/sad.png");
// let worried = new Emotion("Worried", "sample text", "sample text", "../images/sad.png");
// let silly = new Emotion("Silly", "sample text", "sample text", "../images/sad.png");
// let lonely = new Emotion("Lonely", "sample text", "sample text", "assets/images/brave.png");
// let impatient = new Emotion("Impatient", "sample text", "sample text", "assets/images/brave.png");
// let mad = new Emotion("Mad", "sample text", "sample text", "assets/images/mad.png", "#");
// let peaceful = new Emotion("Peaceful", "sample text", "sample text", "assets/images/brave.png", "#");

// array for emotion objects
let emotions = [brave, confused, curious, excited, friendly, happy, loved, worried, sad];

// function to create the emotion flip cards
function createEmotions() {
    let htmlString = "";
    for (let emotion of emotions) {
        htmlString += `<div class=\"flip-card col-sm-6 col-md-4\" id = \" ${emotion.name}\"><div class=\"flip-card-inner col-sm-3\"><div class=\"flip-card-front\"><h2>${emotion.name}</h2><img src=\"${emotion.img}\" alt=\"${emotion.name}\" style=\"width:200px;height:200px;\"></div><div class=\"flip-card-back\" style=\"background-color:${emotion.color}\"><h2>${emotion.name}</h2><p>${emotion.example}</p></div></div></div>`;
    }
    $("#emotion-body").append(htmlString);
};

// function to get the synonyms for each emotion word
async function synonym() {
    // populate the emotion objects with synonyms
    for (let emotion of emotions) {
        // call the dicstionary API
        const response = await fetch(`https://dictionaryapi.com/api/v3/references/ithesaurus/json/${emotion.name}?key=5373bc69-898f-474a-84c7-080519020af1`);
        const myJson = await response.json();
        emotion.synonym = [];
        for (let word of myJson) {
            if (word.fl === "adjective" && word.meta.id === emotion.name.toLowerCase()) {
                emotion.synonym = word.meta.syns[0];
                // console.log(word.meta.syns[0]);
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
    popEmotion();
});

// populate the emotions in the dropdown
function popEmotion() {
    let htmlString = "<option value=\"select\">Select an emotion!</option>";
    for (let emotion of emotions) {
        htmlString += `<option value="${emotion.name.toLowerCase()}">${emotion.name}</option>`;
    }
    $("#emoSyn").append(htmlString);
}

// update the details based on emotion selected
function getSelectedEmotion (emoSyn) {
    let htmlString = "";
    let selected = document.getElementById(emoSyn).value;
    if (selected === "select") htmlString = "";
    else htmlString = "Synonyms for " + selected;
    $("#emotionDisplay").html(htmlString);

    // for each emotion, if it is selected, display the synonym
    // this could be improved with a loop so i dont have to copy and paste code, and could be scalable for when i add new emotions
    let synList = "";
    if (selected === "brave") {
        for (let i=0; i<brave.synonym.length; i++) {
            if (i<(brave.synonym.length-1)) synList+= `${brave.synonym[i]}, `;
            else synList+= `${brave.synonym[i]}`;
        }
    }

    if (selected === "sad") {
        for (let i=0; i<sad.synonym.length; i++) {
            if (i<(sad.synonym.length-1)) synList+= `${sad.synonym[i]}, `;
            else synList+= `${sad.synonym[i]}`;
        }
    }

    if (selected === "loved") {
        for (let i=0; i<loved.synonym.length; i++) {
            if (i<(loved.synonym.length-1)) synList+= `${loved.synonym[i]}, `;
            else synList+= `${loved.synonym[i]}`;
        }
    }

    if (selected === "worried") {
        for (let i=0; i<worried.synonym.length; i++) {
            if (i<(worried.synonym.length-1)) synList+= `${worried.synonym[i]}, `;
            else synList+= `${worried.synonym[i]}`;
        }
    }

    if (selected === "confused") {
        for (let i=0; i<confused.synonym.length; i++) {
            if (i<(confused.synonym.length-1)) synList+= `${confused.synonym[i]}, `;
            else synList+= `${confused.synonym[i]}`;
        }
    }

    if (selected === "curious") {
        for (let i=0; i<curious.synonym.length; i++) {
            if (i<(curious.synonym.length-1)) synList+= `${curious.synonym[i]}, `;
            else synList+= `${curious.synonym[i]}`;
        }
    }

    if (selected === "excited") {
        for (let i=0; i<excited.synonym.length; i++) {
            if (i<(excited.synonym.length-1)) synList+= `${excited.synonym[i]}, `;
            else synList+= `${excited.synonym[i]}`;
        }
    }

    if (selected === "friendly") {
        for (let i=0; i<friendly.synonym.length; i++) {
            if (i<(friendly.synonym.length-1)) synList+= `${friendly.synonym[i]}, `;
            else synList+= `${friendly.synonym[i]}`;
        }
    }

    if (selected === "happy") {
        for (let i=0; i<happy.synonym.length; i++) {
            if (i<(happy.synonym.length-1)) synList+= `${happy.synonym[i]}, `;
            else synList+= `${happy.synonym[i]}`;
        }
    }

    // add the Merriam-webster logo
    synList+= "</br></br><img src=\"assets/images/MWLogo.png\" alt=\"Merriam-Webster Logo\">";

    // if they select "select an emotion", it will populate with the following
    if (selected === "select") {
        synList = "Select an emotion above to discover other ways to help kids name their feelings";
    }

    // modify the content to show the synonyms
    $("#synsDisplay").html(synList);
};
















