let keyboardContainer = document.getElementById('qwerty')
let questionBlock = document.getElementById('question')
let answerBlock = document.getElementById('answer')
let scoreBlock = document.getElementById('score')
let hangmanImg = document.getElementById('hangmanImg')
let startButton = document.getElementById('start-button')
let resault = document.getElementById('restart-text')
let restart = document.getElementById('restart-button')

let questionId = Math.floor(Math.random()*9)
startButton.addEventListener('click', () => {
    let modal = document.getElementById('start-modal-id')
    modal.classList.add('close')
})


let words = [
    {question: "У кого длинный нос?", answer: "БУРАТИНО"},
    {question: "Что дает корова?", answer: "МОЛОКО"},
    {question: "Друг чебурашки?", answer: "ГЕНА"},
    {question: "Человек отравляющий жизнь?", answer: "ТОКСИК"},
    {question: "Во что превратились динозавры?", answer: "НЕФТЬ"},
    {question: "Как зовут Пугачеву?", answer: "АЛЛА"},
    {question: "Самая близкая звезда?", answer: "СОЛНЦЕ"},
    {question: "Сколько будет 2 + 3", answer: "ПЯТЬ"},
    {question: "На каком полюсе живут пингвины?", answer: "ЮЖНОМ"},
    {question: "Что? Где?", answer: "КОГДА"},
    {question: "Негры в США", answer: "АФРОАМЕРИКАНЦЫ"}
]

let score = 0
scoreBlock.innerHTML = 'Ошибок: ' + score + '/6'

questionBlock.innerHTML = 'Вопрос: ' + words[questionId].question

let word = words[questionId].answer.split('');
let wordArr =[]

for (i = 0; i < word.length; i++){
    let div = document.createElement('div');
    div.className = "word";
    div.id = i;
    div.innerHTML = '';
    answerBlock.append(div)
}

keyboardContainer.addEventListener('click', () => {
    let target = event.target
    if (target.tagName != 'BUTTON') return
    let newLuck = 0

    for (i = 0; i < word.length; i++){
        let newWord = document.getElementById(i);
        if (target.innerHTML === word[i]) {
            newWord.innerHTML = target.innerHTML
            wordArr[i] = target.innerHTML
        } else {newLuck = newLuck + 1}
    }
    if (newLuck === word.length) {
        score = score + 1
        scoreBlock.innerHTML = 'Incorrect guesses: ' + score + '/6'
        hangmanImg.src = "images/hangman-" + score + ".svg"
    }
    if (score === 6) {
        let modal = document.getElementById('resault-modal-id')
        modal.classList.add('open')
        resault.innerHTML = 'Вы проиграли епта'
    }
    console.log(wordArr.join(''))
    if (wordArr.join('') == words[questionId].answer) {
        let modal = document.getElementById('resault-modal-id')
        modal.classList.add('open')
        resault.innerHTML = 'Вы победили епта'
    }
})

restart.addEventListener("click", () => window.location.reload ())

