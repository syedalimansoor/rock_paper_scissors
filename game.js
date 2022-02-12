//#region Helpers
const randomFrom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}
const toSentenceCase = (text) => {
    return text[0].toUpperCase() + text.slice(1).toLowerCase()
}
//#endregion Helpers

const moveOptions = ["Rock", "Paper", "Scissors"]
const outcomeMachine = {
    Rock: {
        Rock: "Tie",
        Paper: "Lost",
        Scissors: "Won"
    },
    Paper: {
        Rock: "Won",
        Paper: "Tie",
        Scissors: "Lost"
    },
    Scissors: {
        Rock: "Lost",
        Paper: "Won",
        Scissors: "Tie"
    }
}

const computerPlay = () => randomFrom(moveOptions)

const getScore = (playerMove, computerMove) => {
    const outcome = outcomeMachine[playerMove][computerMove]
    switch (outcome) {
        case "Won":
            return 1
        case "Lost":
            return -1
        default:
            return 0
    }
}

const getInput = () => {
    let playerMove, valid, input
    let prompt = "Enter your move: (Rock/Paper/Scissors)"
    do {
        input = window.prompt(prompt)
        if (input) playerMove = toSentenceCase(input)
        valid = moveOptions.includes(playerMove)
        if (!valid) window.alert("Invalid move!")
    } while (!valid)

    return playerMove
}

const playOneRound = () => {
    const playerMove = getInput()
    const computerMove = computerPlay()
    const delta = getScore(playerMove, computerMove)

    let alert = `The computer chose ${computerMove}! `

    switch (delta) {
        case 1:
            alert += "You won!"
            break
        case -1:
            alert += "You lost!"
            break
        case 0:
            alert += "It's a tie!"
            break
    }

    window.alert(alert)
    return delta
}

const game = () => {
    let score = 0;

    for (let i = 0; i < 5; i++) {
        score += playOneRound()
    }

    window.alert(`Game over! Your score is ${score}`)
}

game();