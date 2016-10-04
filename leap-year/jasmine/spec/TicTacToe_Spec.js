describe("Tic tac toe", function() {

  describe("If no moves have been made", function() {
    it('For the first move at 1,1 should put an X', function() {
      var game = new TicTacToe();
      game.makeMove(1,1);
      expect(game.markAt(1,1)).toBe('X');
    }); 
    it('For the first move at 2,1 should put an X', function() {
      var game = new TicTacToe();
      game.makeMove(2,1);
      expect(game.markAt(2,1)).toBe('X');
    });     
    it('For the first move at 3,1 should put an X', function() {
      var game = new TicTacToe();
      game.makeMove(3,1);
      expect(game.markAt(3,1)).toBe('X');
    });     
  });

  describe("If one move has been made", function() {
    it('for the second move at 3,1 should put an O', function() {
      var game = new TicTacToe();
      game.makeMove(1,1);
      game.makeMove(3,1);
      expect(game.markAt(3,1)).toBe('O');
    }); 
  });

  describe("If a mark has already been made at 1,1", function() {
    it('It should not allow another mark there', function() {
      var game = new TicTacToe();
      game.makeMove(1,1);
      game.makeMove(1,1);
      expect(game.markAt(1,1)).toBe('X');
    }); 
  });

  describe("If a user has three in a row horizontally", function() {
    it('and it is the top row, should call X winning', function() {
      var game = new TicTacToe();
      game.makeMove(1,1);
      game.makeMove(1,3);
      game.makeMove(2,1);
      game.makeMove(1,2);
      var status = game.makeMove(3,1);
      expect(status).toBe('X wins');
    }); 
    it('and it is the middle row, should call O winning', function() {
      /*
      X X -
      O O O
      X - -
      */
      var game = new TicTacToe();
      game.makeMove(1,1);
      game.makeMove(1,2);
      game.makeMove(2,1);
      game.makeMove(2,2);
      game.makeMove(1,3);
      var status = game.makeMove(3,2);
      expect(status).toBe('O wins');
    });    
    it('and it is the bottom row, should call X winning', function() {
      /*
      O - -
      O X O
      X X X
      */
      var game = new TicTacToe();
      game.makeMove(1,3); // X
      game.makeMove(1,1); // O
      game.makeMove(2,3); // X
      game.makeMove(3,2); // O
      game.makeMove(2,2); // X
      game.makeMove(1,2); // O
      
      var status = game.makeMove(3,3);
      expect(status).toBe('X wins');
    });    
  });

  describe("If a user has three in a row vertically", function() {
    it('and it is the first row, should call X winning', function() {
      /*
      X O X
      X O O
      X X O
      */
      var game = new TicTacToe();
      game.makeMove(1,1);
      game.makeMove(2,1); // O
      game.makeMove(3,1);
      game.makeMove(2,2); // O
      game.makeMove(2,3);
      game.makeMove(3,2); // O
      game.makeMove(1,2);
      game.makeMove(3,3); // O
      var status = game.makeMove(1,3);
      expect(status).toBe('X wins');
    });   
  });

  describe("If no user has three in a row", function() {    
    it('And only one move was made, there is no winner', function() {
      var game = new TicTacToe();
      var status = game.makeMove(1,1);
      expect(status).not.toBeDefined();
    });   
    it('And all nine moves were made, there is no winner', function() {
      /*
      O X O
      X O X
      X O X
      */      
      var game = new TicTacToe();
      game.makeMove(2,1);
      game.makeMove(1,1); // O
      game.makeMove(1,2);
      game.makeMove(3,1); // O
      game.makeMove(3,2);
      game.makeMove(2,2); // O
      game.makeMove(1,3);
      game.makeMove(2,3); // O
      var status = game.makeMove(3,3);
      expect(status).not.toBeDefined();
    });   
    
  });
});

function TicTacToe() {
  this.moveCounter = 0;
  this.moves = [ [],[],[] ];

  this.makeMove = function(x, y){
    if( this.markAt(x, y) !== undefined) {
      return;
    }

    var mark;
    this.moveCounter++;

    if (this.moveCounter % 2) {
      mark = 'X';
    } else {
      mark = 'O';
    }
    
    this.moves[x-1][y-1] = mark;

    // Check rows    
    for(i =1; i<=3; i++) {
      if(this.markAt(1,i) && this.markAt(1,i) === this.markAt(2, i) && this.markAt(1,i) === this.markAt(3, i)) {
        return mark + ' wins';
      }
    }

    // Check columns
    for(i =1; i<=3; i++) {
      if(this.markAt(i,1) && this.markAt(i,1) === this.markAt(i,2) && this.markAt(i,1) === this.markAt(i,3)) {
        return mark + ' wins';
      }
    }
  }
  
  this.markAt = function(x, y){
    return this.moves[x-1][y-1];
  }
}