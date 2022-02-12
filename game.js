const moveOptions = ["Rock", "Paper", "Scissors"]

const randomFrom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}

const computerPlay = () => randomFrom(moveOptions)
