const questions = [
  {
    title: "What should you eat everyday?",
    answers: ["McDonalds", "Apple", "KFC", "Popeyes"],
    correctAnswer: 1,
  },
  {
    title: "How many times a day should you brush your teeth?",
    answers: ["Once, in the morning", "None", "Once, before bedtime", "Twice"],
    correctAnswer: 3,
  },
  {
    title: "What is the recommended daily water intake for adults?",
    answers: ["1 liter", "2 liters", "3 liters", "4 liters"],
    correctAnswer: 1,
  },
  {
    title:
      "Which food group should make up the largest portion of your diet according to nutrition guidelines?",
    answers: [
      "Fruits and vegetables",
      "Meat and poultry",
      "Dairy products",
      "Processed foods",
    ],
    correctAnswer: 0,
  },
  {
    title:
      "How many hours of sleep per night is generally recommended for adults?",
    answers: ["4-5 hours", "6-7 hours", "8-9 hours", "10-11 hours"],
    correctAnswer: 1,
  },
  {
    title: "Which nutrient is essential for building and repairing muscles?",
    answers: ["Fat", "Carbohydrates", "Protein", "Vitamins"],
    correctAnswer: 2,
  },
  {
    title:
      "Which of the following is considered a 'good' source of dietary fiber?",
    answers: [
      "White bread",
      "Whole wheat bread",
      "Fruit juice",
      "Potato chips",
    ],
    correctAnswer: 1,
  },
  {
    title: "What is the primary function of antioxidants in the body?",
    answers: [
      "Promoting inflammation",
      "Preventing oxidative damage",
      "Increasing cholesterol levels",
      "Stimulating insulin production",
    ],
    correctAnswer: 1,
  },
  {
    title: "What is the main source of vitamin D for most people?",
    answers: ["Fatty fish", "Sunlight", "Milk", "Eggs"],
    correctAnswer: 1,
  },
  {
    title: "Which of the following is a symptom of dehydration?",
    answers: [
      "Excessive thirst",
      "Dark urine",
      "Flushed skin",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    title:
      "What is the recommended frequency for cardiovascular exercise per week?",
    answers: ["1-2 days", "3-4 days", "5-6 days", "7 days"],
    correctAnswer: 2,
  },
];

// La a cata intrebare suntem
let questionNum = 0;

// Cate raspunsuri corecte sunt
let numCorrect = 0;

// Incarcarea primei intrebari odata ce s-a incarcat pagina
const title = document.getElementById("question-title");
const answer0 = document.getElementById("answer-0");
const answer1 = document.getElementById("answer-1");
const answer2 = document.getElementById("answer-2");
const answer3 = document.getElementById("answer-3");
const currentQuestion = document.getElementById("current-question");
const totalQuestions = document.getElementById("num-questions");

const answersContainer = document.getElementsByClassName(
  "question-answers-container"
)[0];

//pune intrebarea si raspunsurile in elementele corespunzatoare din html
title.innerHTML = questions[questionNum].title;
answer0.innerHTML = questions[questionNum].answers[0];
answer1.innerHTML = questions[questionNum].answers[1];
answer2.innerHTML = questions[questionNum].answers[2];
answer3.innerHTML = questions[questionNum].answers[3];
currentQuestion.innerHTML = questionNum + 1;
totalQuestions.innerHTML = questions.length;

//
function clickContainer(e) {
  //e.target.id verifica daca elementul selectat are sau nu id, iar daca nu are paraseste functia
  //se paraseste functia si daca se atinge numarul maxim de intrebari
  if (!e.target.id || questionNum >= questions.length) return;

  //in id se stocheaza numele id-ului
  const id = e.target.id;

  //se separa numele id-ului pentru a identifica raspunsul corect
  const answerIndex = Number(id.split("-")[1]);

  //verifica daca indexul raspunsului ales corespunde cu raspunsul corect si creste contorul raspunsurilor corecte
  if (answerIndex === questions[questionNum].correctAnswer) {
    numCorrect++;
  }

  //trece la urmatoarea intrebare - creste numarul intrebarii cu 1
  questionNum++;

  //daca se ajunge la ultima intrebare elementele quizz-boxului sunt eliminate
  //se creaza noi elemente: doua paragrafe care contin rezultatul quizzului

  if (questionNum === questions.length) {
    title.remove();
    answersContainer.remove();
    document.getElementsByClassName("quiz-details")[0].remove();
    const quizContainer = document.getElementsByClassName("quiz-container")[0];

    const resultsContainer = document.createElement("div");
    resultsContainer.classList.add("results-container");
    const resultsText = document.createElement("p");
    resultsText.innerHTML = "Your score is:";
    const scorContainer = document.createElement("p");
    scorContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
    resultsContainer.appendChild(resultsText);
    resultsContainer.appendChild(scorContainer);
    quizContainer.appendChild(resultsContainer);

    return;
  }

  // Actualizam interfata
  title.innerHTML = questions[questionNum].title;
  answer0.innerHTML = questions[questionNum].answers[0];
  answer1.innerHTML = questions[questionNum].answers[1];
  answer2.innerHTML = questions[questionNum].answers[2];
  answer3.innerHTML = questions[questionNum].answers[3];
  currentQuestion.innerHTML = questionNum + 1;
}

answersContainer.addEventListener("click", clickContainer);
