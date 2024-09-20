window.addEventListener("DOMContentLoaded", function (){

        // Loader
        const loader = document.querySelector('.loader')
    
        setTimeout(()=> {
        loader.style.opacity = '0'
                 setTimeout(()=> { 
                 loader.style.display = 'none'
                 }, 5000)
               }, 2000)
        // Loader

        
    const questions = [
        {
            question:"What is the captial of Uzbekistan?",
            answers: [
                {text: "Tashkent", correct: true},
                {text: "Samarkand", correct: false},
                {text: "Bukhara", correct: false},
                {text: "Andijon", correct: false},
            ]
        },
        {
            question:"The ancient cities in Uzbekistan?",
            answers: [
                {text: "Navoi", correct: false},
                {text: "Samarkand", correct: true},
                {text: "Bukhara", correct: true},
                {text: "Tashkent", correct: false},
            ]
        },
        {
            question:"What is the largest city in Uzbekistan?",
            answers: [
                {text: "Samarkand", correct: false},
                {text: "Andijon", correct: false},
                {text: "Bukhara", correct: false},
                {text: "Tashkent", correct: true},
            ]
        },
        {
            question:"What was the capital of  Timured empire?",
            answers: [
                {text: "Tashkent", correct: false},
                {text: "Samarkand", correct: true},
                {text: "Bukhara", correct: false},
                {text: "Ferghana", correct: false},
            ]
        },
        {
            question:"What is the smallest city in Uzbekistan?",
            answers: [
                {text: "Tashkent", correct: false},
                {text: "Samarkand", correct: false},
                {text: "Bukhara", correct: false},
                {text: "Andijon", correct: true},
            ]
        },
        {
            question:"What is the official language in Uzbekistan?",
            answers: [
                {text: "Arabic", correct: false},
                {text: "Uzbek", correct: true},
                {text: "English", correct: false},
                {text: "Kazakh", correct: false},
            ]
        },
        {
            question:"How old is Samarkand?",
            answers: [
                {text: "1,000-years", correct: false},
                {text: "over 2,500-years", correct: true},
                {text: "300-years", correct: false},
                {text: "32-years", correct: false},
            ]
        },
        {
            question:"How many regions are there in Uzbekistan?",
            answers: [
                {text: "20", correct: false},
                {text: "15", correct: false},
                {text: "12", correct: true},
                {text: "8", correct: false},
            ]
        },
        {
            question:"What is the most populated city in Uzbekistan?",
            answers: [
                {text: "Tashkent", correct: true},
                {text: "Ferghana", correct: false},
                {text: "Khorazem", correct: false},
                {text: "Namangan", correct: false},
            ]
        },
        {
            question:"What is the coldest region  in Uzbekistan?",
            answers: [
                {text: "Tashkent", correct: false},
                {text: "Samarkand", correct: false},
                {text: "Qashqadaryo", correct: false},
                {text: "Andijon", correct: true},
            ]
        },
    ];

    const questionElement = document.getElementById("question")
    const answerButtons = document.getElementById("answerButton")
    const nextBtn = document.getElementById("next_btn")

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz(){
        currentQuestionIndex = 0;
        score = 0;
        nextBtn.innerHTML = "Next";
        showQuestion();
    }

    function showQuestion(){
        reseState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

        currentQuestion.answers.forEach(answer=> {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer)
        })
    }

    function reseState(){
        nextBtn.style.display = "none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }


    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
               selectedBtn.classList.add("correct");
               score++;
        }else{
            selectedBtn.classList.add("incorrect")
        }

        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct")
            }
            button.disabled = true;
        });
        nextBtn.style.display = "block";
    }

    function handleNextbtn() {
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }else{
            showScore();
        }
    }


    function showScore(){
        reseState();
        questionElement.innerHTML = `Result is here ${score} out of ${questions.length}!`
    }

    nextBtn.addEventListener("click", ()=> {
        if(currentQuestionIndex < questions.length){
            handleNextbtn()
        }else{
            startQuiz();
        }
    })
    startQuiz();
})

