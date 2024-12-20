// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010000010001000000000000000100010100000000010001000100010000000101000101000101010101000101000101010001000000000001000000010001010100010101010100010002000100010101000100000001000100000001000101010001010100010001010101010001010100000001000100000000000100010101000101010001000101010001000101010001000000010001000100010000010100010001010100010001000101000101000100010000000100010000000001010001000100010101000101000101010100010000000100000000000000000101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . 2 . 2 . . . . . . . 2 . 2 
2 . . . . 2 . 2 . 2 . 2 . . . 2 
2 . 2 2 . 2 2 2 2 2 . 2 2 . 2 2 
2 . 2 . . . . . 2 . . . 2 . 2 2 
2 . 2 2 2 2 2 . 2 . 2 . 2 . 2 2 
2 . 2 . . . 2 . 2 . . . 2 . 2 2 
2 . 2 2 2 . 2 . 2 2 2 2 2 . 2 2 
2 . . . 2 . 2 . . . . . 2 . 2 2 
2 . 2 2 2 . 2 . 2 2 2 . 2 . 2 2 
2 . 2 . . . 2 . 2 . 2 . 2 . . 2 
2 . 2 . 2 2 2 . 2 . 2 . 2 2 . 2 
2 . 2 . 2 . . . 2 . 2 . . . . 2 
2 . 2 . 2 . 2 2 2 . 2 2 . 2 2 2 
2 . 2 . . . 2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.brick,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
