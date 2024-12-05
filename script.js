const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextBtn = document.querySelector('.nextBtn');
const scoreCard = document.querySelector('.scoreCard');
const alert = document.querySelector('.alert');
const startBtn = document.querySelector('.startBtn');
const timer = document.querySelector('.timer');


// Make an array of objects that stores question, choices of question and answer
const quiz = [

    {
        question: "Q. Which of the following is not a valid way to declare a function in JavaScript?",
        choices: ["function myFunction() {}", " let myFunction = function() {};", "myFunction: function() {}", "const myFunction = () => {};"],
        answer: "myFunction: function() {}"
    },
    {
        question: "Q. Which of the following is not a JavaScript data type?",
        choices: ["string", "boolean", "object", "float"],
        answer: "float"
    },
    {
        question: "Q. What is the purpose of the this keyword in JavaScript?",
        choices: ["It refers to the current function.", "It refers to the current object.", "It refers to the parent object.", " It is used for comments."],
        answer: "It refers to the current object."
    },
    {
        question: "Q. What is the purpose of the this keyword in JavaScript?",
        choices: [
            "It refers to the current function.", 
            "It refers to the current object.", 
            "It refers to the parent object.", 
            "It is used for comments."
        ],
        answer: "It refers to the current object."
    },
    {
        question: "Q. Which method is used to access an HTML element by its id?",
        choices: [
            "getElementsByClassName()", 
            "getElementById()", 
            "querySelectorAll()", 
            "getElementsByTagName()"
        ],
        answer: "getElementById()"
    },
    {
        question: "Q. What does document.querySelector('#idName') return?",
        choices: [
            "A list of all elements with the idName.", 
            "The first element with the idName.", 
            "The last element with the idName.", 
            "An array of matching elements."
        ],
        answer: "The first element with the idName."
    },
    {
        question: "Q. Which method returns a live collection of elements with a specified class name?",
        choices: [
            "document.querySelectorAll()", 
            "document.getElementsByClassName()", 
            "document.getElementById()", 
            "document.createElement()"
        ],
        answer: "document.getElementsByClassName()"
    },
    {
        question: "Q. What does the textContent property do?",
        choices: [
            "Replaces all the HTML inside an element.", 
            "Modifies the CSS of an element.", 
            "Sets or returns the text content of an element.", 
            "Creates a new element."
        ],
        answer: "Sets or returns the text content of an element."
    },
    {
        question: "Q. How can you create a new element in the DOM?",
        choices: [
            "document.addElement()", 
            "document.createElement()", 
            "document.appendChild()", 
            "document.newElement()"
        ],
        answer: "document.createElement()"
    },
    {
        question: "Q. What does the innerHTML property do?",
        choices: [
            "Retrieves or sets the HTML inside an element.", 
            "Changes the CSS of an element.", 
            "Appends a child node to an element.", 
            "Creates a new HTML element."
        ],
        answer: "Retrieves or sets the HTML inside an element."
    },
    {
        question: "Q. Which method removes a child node from the DOM?",
        choices: [
            "removeChild()", 
            "deleteChild()", 
            "removeElement()", 
            "deleteElement()"
        ],
        answer: "removeChild()"
    },
    {
        question: "Q. How do you attach an event listener to a DOM element?",
        choices: [
            "element.on('click', callback)", 
            "element.addEventListener('click', callback)", 
            "element.addClick(callback)", 
            "element.attachEventListener(callback)"
        ],
        answer: "element.addEventListener('click', callback)"
    },
    {
        question: "Q. What will document.querySelectorAll('.className') return?",
        choices: [
            "A single element with the class className.", 
            "A live collection of elements with the class className.", 
            "A static NodeList of elements with the class className.", 
            "The first element with the class className."
        ],
        answer: "A static NodeList of elements with the class className."
    },
    {
        question: "Q. Which property gives the parent node of an element?",
        choices: [
            "parentNode", 
            "parentElement", 
            "getParentNode()", 
            "parent"
        ],
        answer: "parentNode"
    },
    {
        question: "Q. How do you change the style of an element dynamically?",
        choices: [
            "element.setAttribute('style', value)", 
            "element.style.propertyName = value", 
            "element.innerHTML = value", 
            "element.textContent = value"
        ],
        answer: "element.style.propertyName = value"
    },
    {
        question: "Q. Which method checks if an element has a specific class?",
        choices: [
            "classList.check()", 
            "classList.has()", 
            "classList.contains()", 
            "classList.verify()"
        ],
        answer: "classList.contains()"
    },
    {
        question: "Q. How do you append a new child element to a parent?",
        choices: [
            "parent.appendChild(newChild)", 
            "parent.addChild(newChild)", 
            "parent.addElement(newChild)", 
            "parent.append(newChild)"
        ],
        answer: "parent.appendChild(newChild)"
    },
    {
        question: "Q. What will document.createTextNode() create?",
        choices: [
            "An empty HTML element.", 
            "A new text node.", 
            "A paragraph element.", 
            "A string."
        ],
        answer: "A new text node."
    },
    {
        question: "Q. Which property is used to return all child elements of a node?",
        choices: [
            "children", 
            "childNodes", 
            "childElements", 
            "childNodeList"
        ],
        answer: "children"
    },
    {
        question: "Q. How do you clone an element in the DOM?",
        choices: [
            "element.copyNode()", 
            "element.cloneElement()", 
            "element.cloneNode()", 
            "element.copyElement()"
        ],
        answer: "element.cloneNode()"
    },
    {
        question: "Q. What does event.preventDefault() do?",
        choices: [
            "Stops the event from bubbling up the DOM tree.", 
            "Prevents the browser's default behavior for the event.", 
            "Stops event propagation completely.", 
            "Prevents the event listener from running."
        ],
        answer: "Prevents the browser's default behavior for the event."
    },
    {
        question: "Q. How can you stop event propagation?",
        choices: [
            "event.preventDefault()", 
            "event.stopPropagation()", 
            "event.stopDefault()", 
            "event.preventPropagation()"
        ],
        answer: "event.stopPropagation()"
    },
    {
        question: "Q. Which of the following is NOT a valid DOM method?",
        choices: [
            "document.getElementsByTagName()", 
            "document.querySelectorAll()", 
            "document.getElementsByName()", 
            "document.getElementByAttribute()"
        ],
        answer: "document.getElementByAttribute()"
    },
    {
        question: "Q. How do you access the first child of an element?",
        choices: [
            "element.firstChild", 
            "element.getChild(0)", 
            "element.children[0]", 
            "element.firstElementChild"
        ],
        answer: "element.firstElementChild"
    },
    {
        question: "Q. How do you remove a class from an element?",
        choices: [
            "element.removeClass()", 
            "element.classList.remove('className')", 
            "element.classList.delete('className')", 
            "element.deleteClass('className')"
        ],
        answer: "element.classList.remove('className')"
    },
    {
        question: "Q. How do you convert a NodeList into an array?",
        choices: [
            "Array.from(NodeList)", 
            "NodeList.toArray()", 
            "Array.toArray(NodeList)", 
            "NodeList.array()"
        ],
        answer: "Array.from(NodeList)"
    },
    {
        question: "Q. Which method triggers a click event programmatically?",
        choices: [
            "element.triggerClick()", 
            "element.fireEvent('click')", 
            "element.click()", 
            "element.performClick()"
        ],
        answer: "element.click()"
    },
    {
        question: "Q. How do you get the value of an input field?",
        choices: [
            "inputElement.value()", 
            "inputElement.getAttribute('value')", 
            "inputElement.value", 
            "inputElement.innerText"
        ],
        answer: "inputElement.value"
    },
    {
        question: "Q. How do you replace a child element in the DOM?",
        choices: [
            "parent.replaceChild(newChild, oldChild)", 
            "parent.changeChild(newChild, oldChild)", 
            "parent.removeChild(oldChild)", 
            "parent.swapChild(newChild, oldChild)"
        ],
        answer: "parent.replaceChild(newChild, oldChild)"
    },
    {
        question: "Q. Which property returns the tag name of an element?",
        choices: [
            "element.tagName", 
            "element.nodeType", 
            "element.nodeName", 
            "element.tag"
        ],
        answer: "element.tagName"
    }

];

// Making Variables
let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 20;
let timerID = null;

// Arrow Function to Show Questions
const showQuestions = () => {
    const questionDetails = quiz[currentQuestionIndex];
    questionBox.textContent = questionDetails.question;

    choicesBox.textContent = "";
    for (let i = 0; i < questionDetails.choices.length; i++) {
        const currentChoice = questionDetails.choices[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);

        choiceDiv.addEventListener('click', () => {
            if (choiceDiv.classList.contains('selected')) {
                choiceDiv.classList.remove('selected');
            }
            else {
                choiceDiv.classList.add('selected');
            }
        });
    }

    if(currentQuestionIndex < quiz.length){
        startTimer();
    }
}

// Function to check answers
const checkAnswer = () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (selectedChoice.textContent === quiz[currentQuestionIndex].answer) {
        // alert("Correct Answer!");
        displayAlert("Correct Answer!");
        score++;
    }
    else {
        // alert("Wrong answer");
        displayAlert(`Wrong Answer! ${quiz[currentQuestionIndex].answer} is the Correct Answer`);
    }
    timeLeft = 20;
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) {
        showQuestions();
    }
    else {
        stopTimer();
        showScore();
    }
}

// Function to show score
const showScore = () => {
    questionBox.textContent = "";
    choicesBox.textContent = "";
    scoreCard.textContent = `You Scored ${score} out of ${quiz.length}!`;
    displayAlert("You have completed this quiz!");
    nextBtn.textContent = "Play Again";
    quizOver = true;
    timer.style.display = "none";
}

// Function to Show Alert
const displayAlert = (msg) => {
    alert.style.display = "block";
    alert.textContent = msg;
    setTimeout(()=>{
        alert.style.display = "none";
    }, 100000);
}

// Function to Start Timer
const startTimer = () => {
    clearInterval(timerID); // Check for any exist timers
    timer.textContent = timeLeft;

    const countDown = ()=>{
        timeLeft--;
        timer.textContent = timeLeft;
        if(timeLeft === 0){
            const confirmUser = confirm("Time Up!!! Do you want to play the quiz again");
            if(confirmUser){
                timeLeft = 15;
                startQuiz();
            }
            else{
                startBtn.style.display = "block";
                container.style.display = "none";
                return;
            }
        }
    }
    timerID = setInterval(countDown, 1000);
}

// Function to Stop Timer
const stopTimer = () =>{
    clearInterval(timerID);
}

// Function to shuffle question
const shuffleQuestions = () =>{
    for(let i=quiz.length-1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
    }
    currentQuestionIndex = 0;
    showQuestions();
}

// Function to Start Quiz
const startQuiz = () =>{
    timeLeft = 20;
    timer.style.display = "flex";
    shuffleQuestions();
}

// Adding Event Listener to Start Button
startBtn.addEventListener('click', ()=>{
    startBtn.style.display = "none";
    container.style.display = "block";
    startQuiz();
});

nextBtn.addEventListener('click', () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (!selectedChoice && nextBtn.textContent === "Next") {
        // alert("Select your answer");
        displayAlert("Select your answer");
        return;
    }
    if (quizOver) {
        nextBtn.textContent = "Next";
        scoreCard.textContent = "";
        currentQuestionIndex = 0;
        quizOver = false;
        score = 0;
        startQuiz();
    }
    else {
        checkAnswer();
    }
});