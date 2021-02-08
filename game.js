
let buttonColors = ["red", "blue", "green", "yellow"]

let gamePattern = []
let userClickedPattern = []

let started = false
let level = 0

$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("level " + level)
        nextSequence()
        started = true
    }
})

$(".btn").click(function() {

    let userChosenColor = $(this).attr("id") 
    userClickedPattern.push(userChosenColor)

    animate(userChosenColor)
    sound(userChosenColor)

    checkAnswer(userClickedPattern.length-1)
})

let checkAnswer = (currentLevel) => {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence()
            }, 1000)
        }
    } else {
        
        $("h1").text("GAME OVER. Press Any Key to Start")
    
        $("body").addClass("game-over")

        setTimeout(function() {
            $("body").removeClass("game-over")
        }, 200)

        sound("wrong")

        startOver()
    }
}

let nextSequence = () => {
    userClickedPattern = []
    
    level++
    
    $("#level-title").text("level " + level)

    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColor = buttonColors[randomNumber]
    
    gamePattern.push(randomChosenColor)

    animate(randomChosenColor)
    sound(randomChosenColor)
}

let animate = (currentColor) => {
    $("#" + currentColor).addClass("pressed")
    
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed")
    }, 100)
}

let sound = (name) => {
    let audio = new Audio("sounds/" + name + ".mp3")
        audio.play()
}

let startOver = () => {
    gamePattern = []    
    started = false
    level = 0   
}