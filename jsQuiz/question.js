class Question {
    constructor (text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    guess(answer) {
        if(this.getQuestion().isCorrectAnswer(answer)) {
            this.score++;
        }

        this.questionIndex++;
    }
}

var questions = [
    new Question("Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("What has not been covered in PUI lab?", ["HTML", "CSS","Javascript", "Java"], "Java"),
];

new Question("Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML")


class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
    getQuestion() {

    return this.questions[this.questionIndex];

    }

}

isCorrectAnswer(choice){
    return this.answer === choice;
}



function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
     quiz.guess(guess);
     populate();
    }
};

