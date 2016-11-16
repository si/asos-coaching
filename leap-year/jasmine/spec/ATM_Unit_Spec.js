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
  var scenarios = [
    { 
      amount: 1000, type: 'Deposit', year: 2016, month: 01, date: 10
    }
  ]
  scenarios.forEach(function(scenario) {
    it('should register deposit of ' + scenario.amount, function() {
      var transactionHistory = new TransactionHistory();
      transactionHistory.addTransaction(
        scenario.amount, 
        scenario.type, 
        new Date(scenario.year, scenario.month, scenario.date)
      );
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