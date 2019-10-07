class GuessingGame {
    constructor() {
      this.min = 0;
      this.max = 0;
      this.guessResult = 0;
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
      this.guessResult = Math.round((this.max-this.min)/2)+this.min;
      return this.guessResult;

    }

    lower() {
      this.max = this.guessResult;
    }

    greater() {
      this.min = this.guessResult;
    }
}

module.exports = GuessingGame;
