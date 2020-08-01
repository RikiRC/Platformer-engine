function boxCheck(x, y, width, height) 
{
    this.array = [];
    for (var x2 = 0; x2 < width; x2++)
    {
        for (var y2 = 0; y2 < height; y2++) 
        {
            this.array.push([x + x2, y + y2]);
        }
    }
};

function collisionPixel(obj1, obj2) 
{
    for (var i = 0; i < obj1.array.length; i++) 
    {
        var x = obj1.array[i][0];
        var y = obj1.array[i][1];
        var checkPixel = getPixel(obj2.imageData, x - obj2.x, y - obj2.y);
        if (checkPixel[3] === 255) return true;
    }
    return false;
};

function getPixel(pixelArray, x, y, marginX, marginY) 
{
    return Array(
        pixelArray.data[(y * pixelArray.width + x) * 4],
        pixelArray.data[(y * pixelArray.width + x) * 4 + 1],
        pixelArray.data[(y * pixelArray.width + x) * 4 + 2],
        pixelArray.data[(y * pixelArray.width + x) * 4 + 3]
    );
};