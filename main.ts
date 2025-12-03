basic.forever(function () {
    if (input.temperature() > 22) {
        basic.showString("¡Estoy hot!")
    } else {
        basic.showString("Frío como su corazón")
    }
})
