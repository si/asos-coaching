describe('TicTacToe', function() {
 
  it('X always goes first', function() {   
    var game = new TicTacToe();
    var modelGame = {
      grid: [['X'],[],[]],
      winner: null
    };
    game.makeMove({ column: 1, row: 1 });
    var isEqual = game.isEqual(modelGame);
    expect(isEqual).toBe(true);
  });
 
  it('O never goes first', function() {   
    var game = new TicTacToe();
    var modelGame = {
      grid: [['O'],[],[]],
      winner: null
    };
    game.makeMove({ column: 1, row: 1 });
    var isEqual = game.isEqual(modelGame);
    expect(isEqual).toBe(false);
  });
 
  it('O always goes second', function() {   
    var game = new TicTacToe();
    var modelGame = {
      grid: [['X'],[,'O'],[]],
      winner: null
    };
    game.makeMove({ column: 1, row: 1 });
    game.makeMove({ column: 2, row: 2 });
    var isEqual = game.isEqual(modelGame);
    expect(isEqual).toBe(true);
  });
 
  it('cannot play into a last played position', function() {   
    var game = new TicTacToe();
    var modelGame = {
      grid: [['X'],[],[]],
      winner: null
    };
    game.makeMove({ column: 1, row: 1 });
    game.makeMove({ column: 1, row: 1 });
   
    var isEqual = game.isEqual(modelGame);
    expect(isEqual).toBe(true);
  });
 
  it('cannot play into any occupied position', function() {   
    var game = new TicTacToe();
    var modelGame = {
      grid: [['X','X'],['O','O'],[]],
      winner: null
    };
    game.makeMove({ column: 1, row: 1 });
    game.makeMove({ column: 2, row: 2 });
    game.makeMove({ column: 2, row: 1 });
    game.makeMove({ column: 1, row: 2 });
    game.makeMove({ column: 2, row: 2 });
   
    var isEqual = game.isEqual(modelGame);
    expect(isEqual).toBe(true);
  });
 
  it('cannot play into any occupied position', function() {   
    var game = new TicTacToe();
    var modelGame = {
      grid: [['X','X'],['O','O'],[]],
      winner: null
    };
    game.makeMove({ column: 1, row: 1 });
    game.makeMove({ column: 2, row: 2 });
    game.makeMove({ column: 2, row: 1 });
    game.makeMove({ column: 1, row: 2 });
    game.makeMove({ column: 2, row: 2 });
   
    var isEqual = game.isEqual(modelGame);
    expect(isEqual).toBe(true);
  });
 
  it('declares a winner with three on top row', function() {   
    var game = new TicTacToe();
    var winningGame = {
      grid: [['X', 'X','X']
            ,['O','O']
            ,[]],
      winner: 'X'
    };
    game.makeMove({ column: 1, row: 1 });
    game.makeMove({ column: 1, row: 2 });
    game.makeMove({ column: 2, row: 1 });
    game.makeMove({ column: 2, row: 2 });
    game.makeMove({ column: 3, row: 1 });
   
    var isEqual = game.isEqual(winningGame);
    expect(isEqual).toBe(true);
  });
 
  it('declares a winner with three in the first column', function() {   
    var game = new TicTacToe();
    var winningGame = {
      grid: [['O','X','X']
            ,['O','X']
            ,['O']],
      winner: 'O'
    };
    game.makeMove({ column: 2, row: 1 });
    game.makeMove({ column: 1, row: 1 });
    game.makeMove({ column: 3, row: 1 });
    game.makeMove({ column: 1, row: 2 });
    game.makeMove({ column: 2, row: 2 });
    game.makeMove({ column: 1, row: 3 });
   
      var isEqual = game.isEqual(winningGame);
    expect(isEqual).toBe(true);
  });
 
})