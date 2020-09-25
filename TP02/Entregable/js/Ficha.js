
class Ficha {
    constructor(posX, posY, radius, fill, context, img) {
        this.posX = posX;
        this.posY = posY;        
        this.radius = radius;
        this.fill = fill;
        this.context = context;
        this.img = img;        
    }

    setFill(fill) {
        this.fill = fill;
    }

    setPosition(x,y) {
        this.posX = x;
        this.posY = y;
    }

    getPosition() {
        return {
            x: this.getPosX(),
            y: this.getPosY()
        };
    }

    getPosX() {
        return this.posX;
    }
    getPosY() {
        return this.posY;
    }
    getFill() {
        return this.fill;
    }    

    draw() {    
        this.context.fillStyle = this.fill;
        let imgSize = 70;
        this.radius = imgSize / 2;
        this.context.drawImage(this.img, this.posX - (imgSize / 2), this.posY - (imgSize / 2), imgSize, imgSize);
        

        /*this.context.fillStyle = this.fill;
        this.context.beginPath();
        this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.context.fill();
        this.context.closePath();*/   
    }

    getRadius() {
        return this.radius;
    }

    isPointInside(x, y) {
        let _x = this.posX - x;
        let _y = this.posY - y;
        let valor = Math.sqrt(_x * _x + _y * _y) ;
        return valor <= this.radius;
    }
}