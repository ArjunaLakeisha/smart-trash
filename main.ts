let distance = 0
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    distance = sonar.ping(
    DigitalPin.P4,
    DigitalPin.P3,
    PingUnit.Centimeters
    )
    whaleysans.showNumber(distance)
    if (distance > 0 && distance < 20) {
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.pause(3000)
    } else {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(500)
    }
    basic.pause(100)
})
