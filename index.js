let keyboardContainer = document.getElementById('qwerty')
let questionBlock = document.getElementById('question')
let answerBlock = document.getElementById('answer')
let scoreBlock = document.getElementById('score')
let hangmanImg = document.getElementById('hangmanImg')
let startButton = document.getElementById('start-button')
let resault = document.getElementById('restart-text')
let restart = document.getElementById('restart-button')

startButton.addEventListener('click', () => {
    let modal = document.getElementById('start-modal-id')
    modal.classList.add('close')
})

let words = [
    {question: "У кого длинный нос?", answer: "БУРАТИНО"},
    {question: "Что дает корова?", answer: "МОЛОКО"},
    {question: "У кого длинный нос?", answer: "БУРАТИНО"},
    {question: "У кого длинный нос?", answer: "БУРАТИНО"}
]

let score = 0
scoreBlock.innerHTML = 'Ошибок: ' + score + '/6'

questionBlock.innerHTML = 'Вопрос: ' + words[1].question

let word = words[1].answer.split('');
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
    if (wordArr.join('') == words[1].answer) {
        let modal = document.getElementById('resault-modal-id')
        modal.classList.add('open')
        resault.innerHTML = 'Вы победили епта'
    }
})

restart.addEventListener("click", () => window.location.reload ())

