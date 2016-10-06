function TicTacToe() {
  this.grid = [[],[],[]];
  this.winner = null;
 
  this.getNextMark = function() {
    var marksCounter = [].concat.apply([], this.grid)
      .filter(function(item) { return typeof item !== 'undefined' })
      .length;
     
    return (marksCounter % 2 === 0) ? 'X' : 'O'
  }
 
  this.setWinner = function() {
    if (this.grid[0][0] === this.grid[0][1] &&
        this.grid[0][0] === this.grid[0][2]) {
          this.winner = this.grid[0][0];
    }
    if (this.grid[0][0] === this.grid[1][0] &&
        this.grid[0][0] === this.grid[2][0]) {
          this.winner = this.grid[0][0];
    }
 
}
 
  this.makeMove = function(location) {
    if (typeof this.grid[location.row-1][location.column-1] !== 'undefined') {
      return;
    }
 
    this.grid[location.row-1][location.column-1] = this.getNextMark();   
    this.setWinner();
  }
 
  this.isEqual = function(modelGame) {
    return (JSON.stringify(modelGame) === JSON.stringify(this));
  }
}