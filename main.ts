input.onButtonPressed(Button.A, function () {
    radio.sendString("Hi")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("can you read me")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Hello")
})
radio.setGroup(1)
