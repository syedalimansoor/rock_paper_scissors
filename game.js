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
    let playerMove, valid
    let prompt = "Enter your move: (Rock/Paper/Scissors)"
    do {
        playerMove = toSentenceCase(window.prompt(prompt))
        valid = moveOptions.includes(playerMove)
        if (!valid) prompt = "Invalid move! " + prompt
    } while (!valid)

    return playerMove
}

const playOneRound = () => {
    const playerMove = getInput()
    const computerMove = computerPlay()
    return getScore(playerMove, computerMove)
}