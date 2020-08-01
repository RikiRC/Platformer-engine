class movement 
{
    constructor(player,playerSpr) 
    {
        this.initialize = function()
        {
            if (keys[39]) 
            {
                while (collisionPixel(new boxCheck(player.x, player.y + playerSpr.height, playerSpr.width, 1), worldCheck)) player.y -= 1;
                for (var i = 0; i < player.vx; i++)
                    if (!collisionPixel(new boxCheck(player.x + playerSpr.width, player.y, 1, playerSpr.height), worldCheck)) player.x += 1;
            }
            if (keys[37]) 
            {
                while (collisionPixel(new boxCheck(player.x, player.y + playerSpr.height, playerSpr.width, 1), worldCheck)) player.y -= 1;
                for (var i = 0; i < player.vx; i++)
                    if (!collisionPixel(new boxCheck(player.x - 1, player.y, 1, playerSpr.height), worldCheck)) player.x -= 1;
            }
            if (keys[38] && !player.jump && player.vy < 2)
            {
                jumpSound.play() ,player.jump=true, player.vy = -10;
            }
            for (var i = 0; i < player.vy; i++)
            {
                if (!collisionPixel(new boxCheck(player.x, player.y + playerSpr.height, playerSpr.width, 1), worldCheck)) player.y += 1;
                else player.jump = false, player.vy = 0;
            }
        
            for (var i = 0; i > player.vy; i--)
            {
                if (!collisionPixel(new boxCheck(player.x, player.y, playerSpr.width, 1), worldCheck)) player.y -= 1;
                else player.vy = 0;
            }
            player.vy++;
        }

        this.drawPlayer = function()
        {
            ctx.drawImage(playerSpr, player.x, player.y);
        }

        this.camera = function ()
        {
            camera.x = Math.round(player.x + (playerSpr.width / 2) - (camera.width / 2));
            camera.y = Math.round(player.y + (playerSpr.height / 2) - (camera.height / 2));
            if (camera.x < 0) camera.x = 0;
            if (camera.y < 0) camera.y = 0;
            if (camera.x + camera.width > world.width) camera.x = world.width - camera.width;
            if (camera.y + camera.height > world.height) camera.y = world.height - camera.height;        
        }

        this.listeners = function ()
        {
            document.addEventListener("keydown", function(e) 
            {
                keys[e.keyCode] = true;
            }, false);

            document.addEventListener("keyup", function(e) 
            {
                delete keys[e.keyCode];
            }, false);
        }
    }
}