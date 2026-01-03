let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 3 . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . 3 . . . . . . . . . . 
    . . . . . 3 . 3 . . . . . . . . 
    . . . . . . 3 . . . . . . . . . 
    . . . . . . 3 f f f . . . . . . 
    . . . . . f f 3 3 f 3 . . . . . 
    . . . . f . . . . f . . . . . . 
    . . . f . f . . . f . . . . . . 
    . . . f . f . f f f . . . . . . 
    . . . f f f . . . . . . . . . . 
    . . . f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
game.setGameOverMessage(true, "Hello")
game.onUpdate(function () {
	
})
