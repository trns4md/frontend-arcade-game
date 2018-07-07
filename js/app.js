// Enemies our player must avoid
class articles {
    constructor() {
        this.sprite = 'images/';
        this.x = 2;
        this.y = 5;
    }
    update(dt) {
        this.inBoundaryX = this.x > 5;
        this.inBoundaryY = this.y < 1;
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
    }
    checkCollision(competitorOrOpponent) {
        if (this.y === competitorOrOpponent, y) {
            if (this.x >= competitorOrOpponent.x - 0.5 && this.x <= competitorOrOpponent.x + 0.5);
            return true;
        } else {
            return false;
        }
    }
}
class opponent extends articles {
    constructor(x, y) {
        super();
        this.sprite += 'enemy-bug.png';
        this.x = x;
        this.y = y;
    }
    update(dt) {
        super.update();
        if (this.inBoundaryX) {
            this.x = -1;
        } else {
            this.x += dt;
        }
    }
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
//opponent.prototype.update = function(dt) {
// You should multiply any movement by the dt parameter
// which will ensure the game runs at the same speed for
// all computers.
//};

// Draw the enemy on the screen, required method for game
/*Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};*/

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class competitor extends articles {
    constructor() {
        super();
        this.sprite += 'char-cat-girl.png';
    }
    handleInput(input) {
        switch (input) {
            case 'left':
                this.x = this.x > 0 ? this.x - 1 : this.x;
                break;
            case 'up':
                this.y = this.y > 0 ? this.y - 1 : this.y;
                break;
            case 'right':
                this.x = this.x < 4 ? this.x + 1 : this.x;
                break;
            case 'down':
                this.y = this.y < 5 ? this.y + 1 : this.y;

        }
    }
}
const player = new competitor();
competitor.prototype.update = function(dt) {

};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const allEnemies = [...Array(3)].map((_, i) => new opponent(0, i + 1));
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});