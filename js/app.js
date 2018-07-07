// Properties that both the Player and Enemy share
class articles {
    constructor() {
            this.sprite = 'images/';
            this.x = 2;
            this.y = 5;
        }
        //general boundaries for objects
    update(dt) {
            this.inBoundaryX = this.x > 5;
            this.inBoundaryY = this.y < 1;
        }
        //rendering the board
    render() {
            ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
        }
        //checking for object collision
    checkCollision(competitorOrOpponent) {
        if (this.y === competitorOrOpponent.y) {
            if (this.x >= competitorOrOpponent.x - 0.5 && this.x <= competitorOrOpponent.x + 0.5) {
                return true;
            }

        }
    }
}
//Enemy Class
class opponent extends articles {
    constructor(x, y, speed) {
            super();
            this.sprite += 'enemy-bug.png';
            this.x = x;
            this.y = y;
            this.speed = speed;
        }
        //set enemy boundaries and speed
    update(dt) {
        super.update();
        if (this.inBoundaryX) {
            this.x = -1;
        } else {
            this.x += dt * (2 * Math.floor(Math.random(this.speed) * 5));
        }
    }
}


// Player class
class competitor extends articles {
    constructor() {
            super();
            this.sprite += 'char-cat-girl.png';
            this.moving = false;
            this.win = false;
        }
        //check if the player has won and alert the win then resets game
    update(dt) {
            super.update();
            if (this.inBoundaryY && !this.moving && !this.win) {
                alert("Congratulations!! You Win!!");
                player.y = 5;
                player.x = 2;
            }
        }
        //check to see if player is moving
    render() {
            super.render();
            this.moving = false;
        }
        //input the key function and set limits set move to true
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
        this.moving = true;
    }
}

// Now instantiate the objects.
const player = new competitor();
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