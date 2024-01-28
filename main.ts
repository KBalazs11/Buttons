input.onButtonPressed(Button.A, function () {
    loops.everyInterval(500, function() {
        basic.showIcon(IconNames.Asleep)
        basic.clearScreen()
        basic.pause(500)
        basic.showIcon(IconNames.Sad)
        basic.clearScreen()
        basic.pause(500)
    })
})
basic.showString("Your.text.")
