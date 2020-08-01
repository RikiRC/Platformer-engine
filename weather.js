class weather 
{
    constructor(typeOfWeather) 
    {
        if (typeOfWeather == 1)
        {
            var drops = [];
            for (var e = 0; e < 500; e++) 
            {
                drops.push
                ({
                    x: Math.random() * world.width,
                    y: Math.random() * world.height,
                    width: 1,
                    height: 7
                });
            }
        }

        if(typeOfWeather == 2)
        {
            var drops = [];
            for (var e = 0; e < 300; e++) 
            {
                drops.push
                ({
                    x: Math.random() * world.width,
                    y: Math.random() * world.height,
                    size: Math.random() * 3,
                    vx: -4 + Math.random() * 5 + 2,
                    vy: Math.random() * 10
                });
            }
        }

        this.weatherType = function()
        {
            return typeOfWeather;
        }

        this.draw = function ()
        {
            if(typeOfWeather == 1)
            {
                ctx.fillStyle = "#F4FFFF";
                for (var e = 0; e < drops.length; e++) 
                {
                    var p = drops[e];
                    ctx.fillRect(p.x, p.y, p.width, p.height);
                    p.y += 10;
                    if (p.y > game.height) p.y = Math.random() * game.width, p.y = -10;
                }
            }

            if(typeOfWeather == 2)
            {
                ctx.fillStyle = "#FFFFFF";
                for (var e = 0; e < drops.length; e++) 
                {
                    var p = drops[e];
                    ctx.fillRect(p.size * p.vx + p.x, p.size * p.vy + p.y, p.size, p.size);
                    p.x += p.vx;
                    p.y += p.vy;
        
                    if (p.x > world.width || p.y > world.height) p.x = Math.random() * world.width, p.y = p.size;
                }
            }
        }
    }
}