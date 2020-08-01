class player 
{
    constructor(startX,startY, src) 
    {
        var player = 
        {
            jump: false,
            x: startX,
            y: startY,
            vy: 0,
            vx: 4,
            spriteSrc: src,
        };
        return player;
    }
}