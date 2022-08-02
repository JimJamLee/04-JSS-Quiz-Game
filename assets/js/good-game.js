var userInitials = document.querySelector('#userInitials')
var saveScoreBtn = document.querySelector('#saveScoreBtn')
var finalScore = document.querySelector('#finalScore')
var mostRecentScore = localStorage.getItem('mostRecentScore')

var highScores = JSON.parse(localStorage.getItem('highScores')) || []

const maxHighScores = 5

finalScore.innerText = mostRecentScore

userInitials.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !userInitials.value
})

function saveHighScore(e) {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: userInitials.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('./high-scores.html')
}