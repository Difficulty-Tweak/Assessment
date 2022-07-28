//delcairing relasionship with elements
const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const questionCont = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerBtn = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

//event listeners on button elements for activating functions
startBtn.addEventListener('click', start)
nextBtn.addEventListener('click', () => {
  currentQuestionIndex++ //adds 1 to current question index
  nextQuestion()
})

//game start function
function start() {
  startBtn.classList.add('hide') //hides Start button after event listener activation
  shuffledQuestions = questions.sort(() => Math.random() - .5) //randomises starting question
  currentQuestionIndex = 0 //sets shuffled question index at 0
  questionCont.classList.remove('hide') //unhide question container
  nextQuestion() //displays next set of questions
}

function nextQuestion() {
  defualtState() //resets page to dafult after each question
  showQuestion(shuffledQuestions[currentQuestionIndex]) //takes current question from current question index
}

//show question function
function showQuestion(question) {
  questionEl.innerText = question.question //question element to display question
  //populates answer buttons with answers
  //loops through answers and creates button for each answer
  question.answers.forEach(answer => { 
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct //sets button colour to correct colour vabiable when answer correct
    }
    button.addEventListener('click', selectAnswer) //eventlistener for answer button
    answerBtn.appendChild(button) //appends buttons to new answer buttons
  })
}

//rests page state to defualt
function defualtState() {
  nextBtn.classList.add('hide') //hides next button
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild)
  } //removes answers from answer buttons if populated
}

//handles answer button selected
function selectAnswer(e) {
  const selectedButton = e.target //gets selected answer button 
  const correct = selectedButton.dataset.correct //sets correct variable to the selected answer button
  //loops througn answer buttons 
  Array.from(answerBtn.children).forEach(button => { //creates array from answer buttons to loop
    setState(button, button.dataset.correct) //sets status for buttons based off setState fuc
  })
  //error handling for no more questions
  if (shuffledQuestions.length > currentQuestionIndex + 1) { 
    nextBtn.classList.remove('hide') //shows next button
  } else {
    startBtn.innerText = 'Restart' 
    startBtn.classList.remove('hide') //shows restart button
  }
}

//handles answer button correct or wrong
function setState(element, correct) {
  clearState(element) //clears button colour
  if (correct) { //checks if correct or wrong
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

//removes status from buttons
function clearState(element) {
  element.classList.remove('correct')  
  element.classList.remove('wrong')
}

//variable containing array of questions
const questions = [
  {
    question: 'Which protocol is used to upload email messages to an email server?', //question text
    answers: [                  //question options and answers
      { text: 'HTTP', correct: false },
      { text: 'SMTP', correct: true },
      { text: 'DNS', correct: false },
      { text: 'PAT', correct: false }
    ]
  },
  {
    question: 'Which protocol is used to automatically provide IP addresses to network computers?',
    answers: [
      { text: 'DNS', correct: false },
      { text: 'ARP', correct: false },
      { text: 'IGMP', correct: false },
      { text: 'DHCP', correct: true }
    ]
  },
  {
    question: 'Which protocol is used to resolve domain names to IP addresses?',
    answers: [
      { text: 'DNS', correct: true },
      { text: 'TCP', correct: false },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'Which protocol is used to resolve IP to MAC addresses?',
    answers: [
      { text: 'DHCP', correct: false },
      { text: 'DNS', correct: false },
      { text: 'ARP', correct: true },
      { text: 'WEP', correct: false }
    ]
  },
  {
    question: 'Which protocol is used to provide secure connections across the Internet?',
    answers: [
      { text: 'ARP', correct: false },
      { text: 'NTP', correct: false },
      { text: 'HTTPS', correct: true },
      { text: 'POP3', correct: false }
    ]
  },
  {
    question: 'What does the acronym SSL represent?',
    answers: [
      { text: 'Secure Socket Layer', correct: true },
      { text: 'System Service Layer', correct: false },
      { text: 'Secure System Link', correct: false },
      { text: 'System Synchronize Link', correct: false }
    ]
  },
  {
    question: 'Which protocol is most similar to SSL? ',
    answers: [
      { text: 'FTP', correct: false },
      { text: 'TLS', correct: true },
      { text: 'POP3', correct: false },
      { text: 'NTP', correct: false }
    ]
  }
]