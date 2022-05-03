input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    game.addScore(1)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # # .
        . # . . .
        # . # . .
        # . . # .
        . . . . #
        `)
})
