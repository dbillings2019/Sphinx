var tools = document.getElementById("tools");
var ankh = document.getElementById("ankh");
var caduces = document.getElementById("caduces");
var eyeRa = document.getElementById("eyeRa");
var sphinx = document.getElementById("sphinx");

var i = 0;
var lives = 3;
var relics = 0;

var container = document.getElementById("container");
var container2 = document.getElementById("container2");
var trivia = document.getElementById("trivia");
var next = document.getElementById("next");
var currQues = document.getElementById("currQues");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");

var lifeCount = document.getElementById("lifeCount");
var relicCount = document.getElementById("relicCount")
function update () {
    lifeCount.textContent = lives;
    relicCount.textContent = relics;
};
update();

var questions = [
    {question: "When the wind blows north, where does a peanut falling from a tree land?",
    answers: {
        a: "North",
        b: "South",
        c: "Neither"
    },
    correctAnswer:"c",
    marked: false
    },
    {question: "Do they have a 4th of July in England?",
    answers: {
        a: "Yes",
        b: "No",
        c: "Maybe"
    },
    correctAnswer:"a",
    marked: false
},
{question: "Some months have 30 days, some months have 31. So how many months have 28 days?",
    answers: {
        a: "3",
        b: "1",
        c: "12"
    },
    correctAnswer:"c",
    marked: false
},
    {question: "Can a man living in the US be buried in Canada?",
    answers: {
        a: "Yes",
        b: "Maybe",
        c: "No"
    },
    correctAnswer:"c",
    marked: false
    },
    {question: "A blue house is made with blue bricks. A red house is made with red bricks. A yellow house is made with yellow bricks. What is a greenhouse made with?",
    answers: {
        a: "More information is needed",
        b: "Glass",
        c: "Bricks"
    },
    correctAnswer:"b",
    marked: false
    }
];

container.style.visibility = "hidden";
container2.style.visibility = "hidden";
next.style.visibility = "hidden";
trivia.style.visibility = "hidden";



document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("start").addEventListener('click', function() {
        container.style.visibility = "visible";
        container2.style.visibility = "visible";
        
        document.getElementById("start").style.visibility = "hidden";
        
    })

    
    next.addEventListener('click', function(){
        console.log("Question Submitted");
        next.style.visibility = "hidden";
        trivia.style.zIndex = "-100";
        i++;
    })
    
    //radio buttons
    var radios = document.querySelectorAll("[name='answer']");
    
    for (let i = 0; i < radios.length; i++) {
       
      radios[i].addEventListener('click', function(e) {
        if ( questions[i].correctAnswer === e.target.value) {
        relics++;
        }
        console.log(relics);
        if ( questions[i].correctAnswer !== e.target.value) {
        lives--;
        }
        update();
        console.log(lives)
    }
      )};
    
    ankh.addEventListener('click', function(){
        console.log("Clicking ankh...");
        if (questions[i].marked === false)
        next.style.visibility = "visible";
        trivia.style.visibility = "visible";
        trivia.style.zIndex = "1";
        currQues.textContent = questions[i].question;
        a.textContent = questions[i].answers.a;
        b.textContent = questions[i].answers.b;
        c.textContent = questions[i].answers.c;
    })

    caduces.addEventListener('click', function(){
        console.log("Clicking caduces...");
        if (questions[i].marked === false)
        next.style.visibility = "visible";
        trivia.style.visibility = "visible";
        trivia.style.zIndex = "1";
        currQues.textContent = questions[i].question;
        a.textContent = questions[i].answers.a;
        b.textContent = questions[i].answers.b;
        c.textContent = questions[i].answers.c;
    })

    eyeRa.addEventListener('click', function(){
        console.log("Clicking eyeRa...");
        if (questions[i].marked === false)
        next.style.visibility = "visible";
        trivia.style.visibility = "visible";
        trivia.style.zIndex = "1";
        currQues.textContent = questions[i].question;
        a.textContent = questions[i].answers.a;
        b.textContent = questions[i].answers.b;
        c.textContent = questions[i].answers.c
    })

    sphinx.addEventListener('click', function(){
        console.log("To pass or to go");
        if (relics === 3){
            alert("You win the game!");
            location.reload();
        } else {
            alert("You must gain more relics!")
        }
        //animate towards sphinx
        


    })

    
})