const quizData=[
    {
        question:"which language runs on browser?",
        a:"Java",
        b:"C",
        c:"Python",
        d:"Javascript",
        correct:"d"
    },

    {
        question:"CSS stands for?",
        a:"Central Style Sheets",
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"Cars Suvs Supercars",
        correct:"b"
    },

    {
        question:"HTML stands for?",
        a:"Hyperloop Machine Language",
        b:"Helicopters Troctors Mopeds Lorries",
        c:"HyperText Markup Language",
        d:"HyperText Markdown Language",
        correct:"c"
    },
    {
        question:"Javascript was launched in year?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"none",
        correct:"b"
    }
];

//assigning variables 

const quiz=document.getElementById("quiz");
const answerEls=document.querySelectorAll(".answer");
const questionEl=document.getElementById("question");

const aText=document.getElementById('a-text');
const bText=document.getElementById('b-text');
const cText=document.getElementById('c-text');
const dText=document.getElementById('d-text');

const submitBtn=document.getElementById('submit');

//intialising 
let currentQuiz=0;
let score=0;

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData=quizData[currentQuiz];

    questionEl.innerText=currentQuizData.question
    aText.innerText=currentQuizData.a
    bText.innerText=currentQuizData.b
    cText.innerText=currentQuizData.c
    dText.innerText=currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl=>answerEl.checked=false)
}

function getSelected(){
    // initialise
    let answer
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer;

}

submitBtn.addEventListener('click',()=>{
    const answer=getSelected()

    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++

        }
        currentQuiz++ //for fetching the second question
        if(currentQuiz<quizData.length){
            loadQuiz()

        }
        else{
            quiz.innerHTML=`
            <h2>You answered ${score}/${quizData.length} questins correctly.
            <button onclick="location.reload()">Reload</button></h2>`
        }

    }
})