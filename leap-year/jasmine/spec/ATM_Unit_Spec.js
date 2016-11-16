describe('[UNIT] ATM', function() {
  var transactionHistory;
  var statement;
  var printer;
  var clock;  
  var stubDate;

  beforeEach(function() {
    transactionHistory = {
      addTransaction: function(transaction) {},
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
        return stubDate;  
      }
    }

    printer = {
      print: function() {}
    };
  });

  it('should make deposit with 1000', function() {
    var atm = new ATM(statement, transactionHistory, clock);
    stubDate = new Date(2012, 01, 10);
    atm.makeDeposit(1000);
    expect(transactionHistory.addTransaction).toHaveBeenCalledWith({ amount: 1000, type: 'Deposit', date: clock.getDate()});
  });
/*
  it('should make withdrawal with 1000', function() {
    var atm = new ATM(statement, transactionHistory);
    atm.makeWithdrawal(1000);
    expect(transactionHistory.addTransaction).toHaveBeenCalledWith({}});
  });
*/
  it('should print statements', function() {
    var atm = new ATM(statement, transactionHistory);
    atm.printStatement(printer);

    expect(transactionHistory.getTransactions).toHaveBeenCalled();
    expect(statement.getStatement).toHaveBeenCalled();
  });
});

describe('[UNIT] Transaction History', function() {
  var scenarios = [
    { 
      amount: 1000, type: 'Deposit', year: 2016, month: 01, date: 10
    }, 
    { 
      amount: 2000, type: 'Withdrawal', year: 2013, month: 01, date: 11
    }
  ]
  scenarios.forEach(function(scenario) {
    it('should register ' + scenario.type +  ' of ' + scenario.amount, function() {
      var transactionHistory = new TransactionHistory();
      transactionHistory.addTransaction({ 
        amount: scenario.amount, 
        type: scenario.type, 
        date: new Date(scenario.year, scenario.month, scenario.date)
      });
      var transactions = transactionHistory.getTransactions();
      expect(transactions.length).toBe(1);
      expect(transactions[0].amount).toBe(scenario.amount);
      expect(transactions[0].type).toBe(scenario.type);
      expect(transactions[0].date.getFullYear()).toBe(scenario.year);
      expect(transactions[0].date.getMonth()).toBe(scenario.month);
      expect(transactions[0].date.getDate()).toBe(scenario.date);
    })
  })
  

});