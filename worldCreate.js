class worldCreate 
{
    constructor(map) 
    {
        this.draw = function()
        {
            for (var y = 0; y < map.length; y++) 
            {
                for (var x = 0; x < map[y].length; x++) 
                {
                    if (x * 40 < camera.x + camera.width && y * 40 < camera.y + camera.height && x * 40 > camera.x - 40 && y * 40 > camera.y - 40) 
                    {
                        if (map[y][x] == 1) ctx.fillStyle = "#0000d9", worldCtx.fillRect(x * 40, y * 40, 40, 40);
                        else if (map[y][x] == 0 && weather.weatherType() == 1)
                        {
                            ctx.fillStyle = "#FFFFFF", ctx.globalAlpha = 0.1
                        }
                        else if (map[y][x] == 0 && weather.weatherType() == 2)
                        {
                            ctx.fillStyle = "#FFFFFF", ctx.globalAlpha = 0.1
                        }
                        else ctx.fillStyle = "#00b300";
                        ctx.fillRect(x * 40, y * 40, 40, 40);
                        ctx.globalAlpha = 1
                    }
                }
            }
            worldCheck.imageData = worldCtx.getImageData(worldCheck.x, worldCheck.y, worldCheck.width, worldCheck.height);
        }

        this.ctxStart = function()
        {
            ctx.clearRect(0, 0, game.width, game.height);
            worldCtx.clearRect(0, 0, world.width, world.height);
            ctx.save();
            worldCtx.save();
            ctx.translate(-camera.x, -camera.y);
        }

        this.ctxRestore = function ()
        {
            ctx.restore();
            worldCtx.restore();
        }
    }
}