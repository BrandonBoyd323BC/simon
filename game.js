
let userClickedPattern = []
let gamePattern = []
let buttonColors = ["red", "blue", "green", "yellow"]

let nextSequence = () => {
    Math.floor(Math.random() * 4)
} 

let randomChosenColor = buttonColors[nextSequence]

let pushToGamePattern = (color) => {
    gamePattern.push(color)
}

console.log(gamePattern)

let userClickedPatternAdd = (color) => {
    userClickedPattern.push(color)
}

console.log(userClickedPattern)

pushToGamePattern(randomChosenColor)

    const animate = (x) => {
        switch (x) {
            case 'red': 
                $('.btn.red').fadeTo(100, 0.3, function() { 
                        $(this).fadeTo(500, 1.0); 
                    })
            break;
            case 'yellow':
                $('.btn.yellow').fadeTo(100, 0.3, function() { 
                    $(this).fadeTo(500, 1.0); 
                })
            break;
            case 'blue':
                $('.btn.blue').fadeTo(100, 0.3, function() { 
                    $(this).fadeTo(500, 1.0); 
                })
            break;
            case 'green':
                $('.btn.green').fadeTo(100, 0.3, function() { 
                    $(this).fadeTo(500, 1.0); 
                })
            break;
            default:
        }
    }
    const sound = (x) => {   
        switch (x) {
            case 'red':
                let red = new Audio("sounds/red.mp3")
                red.play()
            break;
            case 'yellow':
                let yellow = new Audio("sounds/yellow.mp3")
                yellow.play()
            break;
            case 'blue':
                let blue = new Audio("sounds/blue.mp3")
                blue.play()
            break;
            case 'green':
                let green = new Audio("sounds/green.mp3")
                green.play()
            break;
            default:
        }
    }

    $(".btn").click(function(event) {
       let userChosenColor = event.target.id
        animate(userChosenColor)
        sound(userChosenColor)
        userClickedPatternAdd(userChosenColor)
    })

    $(document).keydown(function() {
        nextSequence()
    })

    animate(randomChosenColor)
    sound(randomChosenColor)






// if (levelArray.length === 0) {

//     levelArray.push(levelArray++)
// } else {
//     $("h1").text("level ")
// }



// $(document).keydown(function() {
//        myFunction()
//     // $("h1").text("level " + level )
// })



// $(document).click(function() {
//     setTimeout(function () {
//         $(".btn").addClass("pressed")
//     }, 400)
// })






// 

// let userClickedPattern = []

// let gamePattern = []

// let buttonColors = ["red","blue","green","yellow"]

// $(document).on("keypress", function(event) {
//     let nextSequence = () => {
//         let randomNumber =  Math.floor(Math.random() * 4)
//         return randomNumber
//     }
// })

// $("h1").text("test")

// let randomChosenNumber = nextSequence()
// console.log(randomChosenNumber)
// let select = buttonColors[randomChosenNumber]

// $(".btn").click(function(event) {
//     let userChosenColor = event.target.id
//     playSound(userChosenColor)
//     userClickedPattern.push(userChosenColor)
// })

// gamePattern.push(select)




//     let playSound = (name) => {
//         
//         switch (name) {
//             case 'red': 
//             $('.btn.red').fadeTo(100, 0.3, function() { 
//                      $(this).fadeTo(500, 1.0); 
//                  })
//              break;
//              case 'yellow':
//              $('.btn.yellow').fadeTo(100, 0.3, function() { 
//                  $(this).fadeTo(500, 1.0); 
//              })
//              break;
//              case 'blue':
//              $('.btn.blue').fadeTo(100, 0.3, function() { 
//                  $(this).fadeTo(500, 1.0); 
//              })
//              break;
//              case 'green':
//              $('.btn.green').fadeTo(100, 0.3, function() { 
//                  $(this).fadeTo(500, 1.0); 
//              })
//          }
//     }

//     switch (select) {
//         case 'red':
//             let red = new Audio("sounds/red.mp3")
//             red.play()
//         break;
//         case 'yellow':
           
//             let yellow = new Audio("sounds/yellow.mp3")
//             yellow.play()
//         break;
//         case 'blue':
           
//             let blue = new Audio("sounds/blue.mp3")
//             blue.play()
//         break;
//         case 'green':
           
//             let green = new Audio("sounds/green.mp3")
//             green.play()
//         break; 
//     }

// console.log(gamePattern)