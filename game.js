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
    let outcome
    
    playerMove = toSentenceCase(playerMove)
    outcome = outcomeMachine[playerMove][computerMove]

    switch (outcome) {
        case "Won":
            return 1
        case "Lost":
            return -1
        default:
            return 0
    }
}