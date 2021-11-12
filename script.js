const quizdata = [ 
    {
        question: "How old is farmaajo?",
        a: "45",
        b: "50",
        c: "55",
        d: "60",
          
        correct: "c",
    }, {
        question: "What is the most used programming language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
       
        correct: "d",

    }, {
        question: "Who is the president of Somalia?",
        a: "Hassan",
        b: "Mohamed",
        c: "Shariif",
        d: "Muuse",
          
        correct: "b",
    }, { 
        question: "What does HTML standard for",
        a: "HyberText Markup language",
        b: "Hyber Text",
        c: "Hydrogen language",
        d: "Mark up language",
          
        correct: "a",
    },{
        question: "Which Javascrip launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None of the above",
          
        correct: "d",
        
    }
];

const quiz = document.getElementById("quiz");
const answerels = document.querySelectorAll(".answer");
const questionel = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


let currentquiz = 0;
let score = 0;

loadquiz();

function loadquiz() {
    const currentquizdata = quizdata[currentquiz];
    questionel.innerText = currentquizdata.question;
     a_text.innerText = currentquizdata.a;
     b_text.innerText = currentquizdata.b;
     c_text.innerText = currentquizdata.c;
     d_text.innerText = currentquizdata.d;
}

function getselected(){
    let answer = undefined;
    
    answerels.forEach(answerel => {
        if(answerel.checked){
           answer = answerel.id;
        }
    });
    return answer;
}

function deselectanswers() {
    answerels.forEach(answerel => {
        answerel.checked = false;
    });
}

submitBtn.addEventListener("click", () => {

    // check answerel
  const answer = getselected();

  if(answer){
      if(answer === quizdata[currentquiz].correct){
          score++;
      }
    
    currentquiz++;
    if(currentquiz < quizdata.length){
        loadquiz();
    } else {
        quiz.innerHTML = `
         <h2>You anwered corectly at ${score}/${quizdata.length} questions.</h2>
          <button onclick="location.reload()">Reload</button> `;
    }
}
});
