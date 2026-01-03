controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 3 . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . 3 . . . . . . . . . . 
    . . . . . 3 . 3 . . . . . . . . 
    . . . . . . 3 . . . . . . . . . 
    . . . . . . 3 . . . . . . . . . 
    . . . . . . . 3 3 3 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
game.setGameOverMessage(true, "Hello")
