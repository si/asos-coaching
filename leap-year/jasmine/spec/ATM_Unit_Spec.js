describe('[UNIT] ATM', function() {
  var transactionHistory;
  var statement;
  var printer;
  var clock;  
  var stubDate;

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

    clock = {
      getDate: function() {
        return stubDate.getFullYear() + '-' + stubDate.getMonth() + stubDate.getDay();  
      }
    }

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

describe('[UNIT] Transaction History', function() {
  it('should register deposit of 1000', function() {
    var transactionHistory = new TransactionHistory();
    transactionHistory.addTransaction(1000, 'Deposit', new Date(2012, 01, 10));
    var transactions = transactionHistory.getTransactions();
    expect(transactions.length).toBe(1);
    expect(transactions[0].amount).toBe(1000);
    expect(transactions[0].type).toBe('Deposit');
    expect(transactions[0].date.getFullYear()).toBe(2016);
    expect(transactions[0].date.getMonth()).toBe(1);
    expect(transactions[0].date.getDate()).toBe(10);
  })
});