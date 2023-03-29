loops.everyInterval(500, function () {
    basic.pause(100)
})
basic.forever(function () {
    for (let index = 0; index < 5; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(300)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(300)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(300)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
