const loginPage = document.getElementById('loginPage');
const homePage = document.getElementById('homePage');
const flashcard = document.getElementById('flashcard');
const submitBtn = document.getElementById('submitBtn');
const result = document.getElementById('result');

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'London', 'Rome'],
    answer: 0,
    hint: 'Famous for the Eiffel Tower.'
  },
  {
     question: 'Who isthe first prime minister of india?',
    options: ['mahatma gandhi ', 'jawaharlal nehru', 'ka paul', 'sardar vallabhai patel'],
    answer: 1,
    hint: 'his birthday is celebrated as childrens day.'
  },
  {
    question: 'Who isthe CEO of apple?',
    options: ['Sunder pichaiya ', 'Bil gates', 'Tim Cook', 'jeff bezos'],
    answer: 2,
    hint: 'he became cheif exc in 2011.'
    
  },
  {
     question: 'In which year india won t20i world cup?',
    options: ['1983 ', '2011', '2013', '2007'],
    answer: 3,
    hint: 'india played against pakistan.'
  },
  {
    question: 'which of the teams won the 2022 fifa world cup?',
    options: ['argentina', 'france', 'portugal', 'india'],
    answer: 0,
    hint: 'messi plays for the winning team.'
   },
   {
    question: 'Which is smallest country in the world?',
    options: ['pakistan', 'bangladesh', 'vatican city', 'sri lanka'],
    answer: 2,
    hint: 'it is located in europe.'
   },
   {
     question: 'In which year india won t20i world cup?',
    options: ['1983 ', '2011', '2013', '2007'],
    answer: 3,
    hint: 'india played against pakistan.'
    
  }
 
 
];

let currentQuestionIndex = 0;
let score = 0;

// Hide login page and show home page
document.getElementById('loginBtn').addEventListener('click', () => {
  loginPage.classList.add('hidden');
  homePage.classList.remove('hidden');
  showQuestion(currentQuestionIndex);
});

// Show current question and options
function showQuestions(index) {
  if (index < questions.length) {
    const currentQuestions = questions[index];
    flashcard.innerHTML = `
      <h2>${currentQuestions.question}</h2>
      <ul>
        ${currentQuestions.options.map((option, idx) => `<li><input type="radio" name="option" value="${idx}">${option}</li>`).join('')}
      </ul>
      <p>Hint: ${currentQuestions.hint}</p>
    `;
  } else {
    flashcard.innerHTML = '<h2>Quiz Completed</h2>';
    submitBtn.disabled = true;
  }
}
// ... Your existing code ...

// Show current question and options
function showQuestion(index) {
  if (index < questions.length) {
    const currentQuestion = questions[index];
    flashcard.innerHTML = `
      <div class="flashcard" id="card">
        <div class="front">
          <h2>${currentQuestion.question}</h2>
          <ul>
            ${currentQuestion.options.map((option, idx) => `<li><input type="radio" name="option" value="${idx}">${option}</li>`).join('')}
          </ul>
        </div>
        <div class="back">
          <p>Hint: ${currentQuestion.hint}</p>
        </div>
      </div>
    `;

    const card = document.getElementById('card');
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  } else {
    flashcard.innerHTML = '<h2>Quiz Completed</h2>';
    submitBtn.disabled = true;
  }
}

// ... Your existing code ...


// Handle answer submission
submitBtn.addEventListener('click', () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    const selectedAnswer = parseInt(selectedOption.value);
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      score++;
    }
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
    result.innerHTML = `Score: ${score}`;
  } else {
    alert('Please select an answer.');
  }
});