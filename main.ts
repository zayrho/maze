tiles.setCurrentTilemap(tilemap`level2`)
let mySprite = Render.getRenderSpriteVariable()
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 8))
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile3`)) {
        game.gameOver(true)
    } else if (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile3`)) {
        game.gameOver(true)
    } else if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile3`)) {
        game.gameOver(true)
    } else if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile3`)) {
        game.gameOver(true)
    }
})
