controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
	
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 3 . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . 3 . . . . . . . . . . 
    . . . . . 3 . 3 . . . . . . . . 
    . . . . . . 3 . . . . . . . . . 
    . . . . . f f f . . . . . . f . 
    . . . . f f . 3 f 3 3 . f f f . 
    . . . f . . . . f f f f . . f . 
    . . f f f . . f f f . . . . f . 
    f f . . f . f . . f . . . . f . 
    f . . . f . . . . f . . . f . . 
    f . . . . f . . f . . . f . . . 
    . f . . . . f f f . . . f . . . 
    . . f f f f f f . . f f . . . . 
    . . . . . . . . f f . . . . . . 
    `, SpriteKind.Player)
game.setGameOverMessage(true, "Hello")
