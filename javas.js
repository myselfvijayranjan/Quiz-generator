const quizData = [
    {
      question: "What is the capital of Italy?",
      options: ["Rome", "Venice", "Florence", "Milan"],
      correct: 0,
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Earth", "Venus", "Jupiter"],
      correct: 0,
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
      correct: 0,
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correct: 1,
    },
    {
      question: "Which is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correct: 3,
    },
    {
      question: "What does CPU stand for?",
      options: ["Central Processing Unit", "Central Program Unit", "Computer Personal Unit", "Control Processing Unit"],
      correct: 0,
    },
    {
      question: "Which gas do plants absorb during photosynthesis?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correct: 1,
    },
    {
      question: "What is the capital of the United States?",
      options: ["New York", "Los Angeles", "Washington D.C.", "Chicago"],
      correct: 2,
    },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correct: 1,
    },
    {
      question: "Which language is used to style web pages?",
      options: ["HTML", "CSS", "JavaScript", "Python"],
      correct: 1,
    },
    {
      question: "How many continents are there?",
      options: ["5", "6", "7", "8"],
      correct: 2,
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
      correct: 0,
    },
    {
      question: "Which is the smallest prime number?",
      options: ["1", "2", "3", "5"],
      correct: 1,
    },
    {
      question: "What is the boiling point of water?",
      options: ["90°C", "100°C", "120°C", "110°C"],
      correct: 1,
    },
    {
      question: "What does HTTP stand for?",
      options: [
        "Hyper Text Transfer Protocol",
        "High Text Transfer Protocol",
        "Hyper Transfer Text Protocol",
        "High Transfer Text Protocol",
      ],
      correct: 0,
    },
    {
      question: "Which programming language is used for Android apps?",
      options: ["Java", "Swift", "C#", "PHP"],
      correct: 0,
    },
    {
      question: "How many legs does a spider have?",
      options: ["6", "8", "10", "12"],
      correct: 1,
    },
    {
      question: "Which element has the chemical symbol O?",
      options: ["Gold", "Oxygen", "Osmium", "Hydrogen"],
      correct: 1,
    },
    {
      question: "What is the capital of Japan?",
      options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
      correct: 0,
    },
    {
      question: "Which part of the computer is known as the brain?",
      options: ["RAM", "Hard Drive", "CPU", "GPU"],
      correct: 2,
    },
    {
      question: "What does RAM stand for?",
      options: [
        "Read Access Memory",
        "Random Access Memory",
        "Ready Access Memory",
        "Runtime Access Memory",
      ],
      correct: 1,
    },
    {
      question: "Which animal is known as the King of the Jungle?",
      options: ["Tiger", "Lion", "Elephant", "Leopard"],
      correct: 1,
    },
    {
      question: "What is the capital of Canada?",
      options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
      correct: 3,
    },
    {
      question: "Which gas is essential for breathing?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correct: 0,
    },
    {
      question: "How many colors are there in a rainbow?",
      options: ["5", "6", "7", "8"],
      correct: 2,
    },
    {
      question: "Which programming language is primarily used for iOS development?",
      options: ["Swift", "Java", "Kotlin", "C++"],
      correct: 0,
    },
    {
      question: "What is the square root of 64?",
      options: ["6", "7", "8", "9"],
      correct: 2,
    },
    {
      question: "Which planet is the hottest in the Solar System?",
      options: ["Mercury", "Venus", "Mars", "Jupiter"],
      correct: 1,
    },
    {
      question: "Which day comes after Friday?",
      options: ["Thursday", "Saturday", "Sunday", "Monday"],
      correct: 1,
    },
    {
      question: "What is the capital of Germany?",
      options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
      correct: 0,
    },
    {
      question: "Which continent is known as the Dark Continent?",
      options: ["Asia", "Africa", "South America", "Australia"],
      correct: 1,
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H", "O", "H2O", "O2"],
      correct: 2,
    },
    {
      question: "Which company created the iPhone?",
      options: ["Google", "Microsoft", "Apple", "Samsung"],
      correct: 2,
    },
    {
      question: "What does GPU stand for?",
      options: [
        "Graphics Processing Unit",
        "General Processing Unit",
        "Graphics Performance Unit",
        "Graphical Performance Unit",
      ],
      correct: 0,
    },
    {
      question: "Which city is known as the Big Apple?",
      options: ["Los Angeles", "New York", "Chicago", "San Francisco"],
      correct: 1,
    },
    {
      question: "Which programming language is known for AI development?",
      options: ["JavaScript", "Python", "C", "Ruby"],
      correct: 1,
    },
    {
      question: "What is the freezing point of water?",
      options: ["0°C", "-10°C", "32°C", "10°C"],
      correct: 0,
    },
    {
      question: "What is the national language of China?",
      options: ["Mandarin", "Cantonese", "Hindi", "Korean"],
      correct: 0,
    },
    {
      question: "Which animal is known for its hump?",
      options: ["Camel", "Horse", "Elephant", "Giraffe"],
      correct: 0,
    },
    {
      question: "Which planet has rings around it?",
      options: ["Mars", "Earth", "Saturn", "Venus"],
      correct: 2,
    },
    {
      question: "What is 5 x 5?",
      options: ["20", "25", "30", "35"],
      correct: 1,
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Control Style Sheets",
      ],
      correct: 0,
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      correct: 2,
    },
    {
      question: "Which gas is most abundant in the Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
      correct: 1,
    },
    {
      question: "Which instrument is used to measure temperature?",
      options: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
      correct: 0,
    },
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Delhi", "Bangalore", "Kolkata"],
      correct: 1,
    },
    {
      question: "What is the color of the sky on a clear day?",
      options: ["Blue", "Red", "Green", "Yellow"],
      correct: 0,
    },
  ];
let selectedQuestions = [];
let questionIndexes = []; // To keep track of unique question indexes
let currentQuestionIndex = 0;
let score = 0;

// Randomly select 5 unique questions from the quizData array
while (questionIndexes.length < 5) {
  const randomIndex = Math.floor(Math.random() * quizData.length);
  if (!questionIndexes.includes(randomIndex)) {
    questionIndexes.push(randomIndex);
    selectedQuestions.push(quizData[randomIndex]);
  }
}
function checkAnswer(selectedIndex) {
    const correctIndex = selectedQuestions[currentQuestionIndex].correct;
    const options = document.querySelectorAll(".option-btn");
  
    // Remove 'selected' class from all options
    options.forEach((btn) => btn.classList.remove("selected"));
  
    // Add 'selected' class to the clicked button
    options[selectedIndex].classList.add("selected");
  
    // Check if the selected option is correct
    if (selectedIndex === correctIndex) {
      score++;
    }
  
    document.getElementById("next-btn").style.display = "block";
  }
  
  // Update button click event handler in the loadQuestion function
  function loadQuestion() {
    const questionBox = document.getElementById("question");
    const optionsBox = document.getElementById("options");
  
    const currentQuiz = selectedQuestions[currentQuestionIndex];
    questionBox.innerHTML = currentQuiz.question;
    optionsBox.innerHTML = "";
  
    currentQuiz.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.className = "option-btn";
      button.textContent = option;
      button.onclick = () => checkAnswer(index); // Attach the click handler
      optionsBox.appendChild(button);
    });
  }

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < selectedQuestions.length) {
    loadQuestion();
    document.getElementById("next-btn").style.display = "none";
  } else {
    showScore();
  }
}

function showScore() {
  document.getElementById("quiz-box").classList.add("hidden");
  document.getElementById("score-box").classList.remove("hidden");
  document.getElementById("score").textContent = `${score} / ${selectedQuestions.length}`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  questionIndexes = [];
  selectedQuestions = [];

  while (questionIndexes.length < 5) {
    const randomIndex = Math.floor(Math.random() * quizData.length);
    if (!questionIndexes.includes(randomIndex)) {
      questionIndexes.push(randomIndex);
      selectedQuestions.push(quizData[randomIndex]);
    }
  }

  document.getElementById("score-box").classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");
  loadQuestion();
  document.getElementById("next-btn").style.display = "none";
}

// Load the first question
loadQuestion();