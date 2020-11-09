input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    while (input.temperature() < 8) {
        basic.showString("-")
    }
    while (input.temperature() > 30) {
        basic.showString("+")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    while (pins.analogReadPin(AnalogPin.P0) < 200) {
        basic.showString("H-")
    }
    while (pins.analogReadPin(AnalogPin.P0) > 600) {
        basic.showString("H+")
    }
})
