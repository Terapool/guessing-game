class GuessingGame {
    constructor() {
		
		this.min = 0;
		this.max = 0;
		
		}

    setRange(min, max) 
	{
	this.min = min;
	this.max = max;
    }

    guess() {
    var i;
	i = (this.max - this.min)/2;
	i = i + this.min;
    this.center = Math.round (i);
	return this.center;


    }

    lower() {
    this.max = this.center;
    }

    greater() {
	this.min = this.center;
    }
}

module.exports = GuessingGame;

