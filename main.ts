input.onButtonPressed(Button.A, function () {
    Dice = randint(1, 6)
    basic.showNumber(Dice)
    radio.sendNumber(Dice)
})
let Dice = 0
radio.setGroup(42)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
