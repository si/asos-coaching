describe('[UNIT] ATM', function() {
  var transactionHistory;
  var statement;
  var printer;

  beforeEach(function() {
    transactionHistory = {
      addTransaction: function(amount, type) {},
      getTransactions: function() {}
    };
    statement = {
      getStatement: function() {}
    };
    spyOn(transactionHistory, 'addTransaction');
    spyOn(transactionHistory, 'getTransactions');
    spyOn(statement, 'getStatement');

    printer = {
      print: function() {}
    };
  });

  it('should make deposit with 1000', function() {
    var atm = new ATM(statement, transactionHistory);
    atm.makeDeposit(1000);
    expect(transactionHistory.addTransaction).toHaveBeenCalledWith(1000, 'Deposit');
  });

  it('should print statements', function() {
    var atm = new ATM(statement, transactionHistory);
    atm.printStatement(printer);

    expect(transactionHistory.getTransactions).toHaveBeenCalled();
    expect(statement.getStatement).toHaveBeenCalled();
  });
});