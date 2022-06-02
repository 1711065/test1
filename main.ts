music.setVolume(255)
basic.forever(function () {
    serial.writeLine("" + (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )))
    basic.showNumber(sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ))
})
basic.forever(function () {
    if (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ) > 5) {
        music.playTone(988, music.beat(BeatFraction.Whole))
        music.playTone(880, music.beat(BeatFraction.Whole))
        music.playTone(784, music.beat(BeatFraction.Whole))
        music.playTone(880, music.beat(BeatFraction.Whole))
        music.playTone(988, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(988, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(988, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(880, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(880, music.beat(BeatFraction.Whole))
        music.playTone(988, music.beat(BeatFraction.Whole))
        music.playTone(880, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(784, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Double))
    }
})
