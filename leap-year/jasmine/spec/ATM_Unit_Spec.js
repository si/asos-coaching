function TransactionHistoryMock(transactions) {
  this.addTransaction = jasmine.createSpy();
  this.getTransactions = jasmine.createSpy().and.returnValue(transactions);
};

describe('[UNIT] ATM', function() {
  var transactionHistory;
  var statement;
  var printer;
  var clock;  
  var stubDate;

  beforeEach(function() {
    transactionHistory = new TransactionHistoryMock();
    statement = {
      getStatement: function() {}
    };
    spyOn(statement, 'getStatement');

    clock = {
      getDate: function() {
        return stubDate;  
      }
    }

    printer = {
      print: function() {}
    };

    spyOn(printer, 'print')
  });

  it('should make deposit with 1000', function() {
    var atm = new ATM(statement, transactionHistory, clock);
    stubDate = new Date(2012, 01, 10);
    atm.makeDeposit(1000);
    expect(transactionHistory.addTransaction).toHaveBeenCalledWith({ amount: 1000, type: 'Deposit', date: clock.getDate()});
  });

  it('should make withdrawal with 500', function() {
    var atm = new ATM(statement, transactionHistory, clock);
    stubDate = new Date(2012, 02, 13);
    atm.makeWithdrawal(500);
    expect(transactionHistory.addTransaction).toHaveBeenCalledWith({ amount: 500, type: 'Withdrawal', date: clock.getDate()});
  });

  it('should print statements', function() {
    var atm = new ATM(statement, transactionHistory);
    atm.printStatement(printer);

    //  TODO: Don't expect queries, allow them. Expect commands
    expect(transactionHistory.getTransactions).toHaveBeenCalled();
    expect(statement.getStatement).toHaveBeenCalled();
    expect(printer.print).toHaveBeenCalled();
  });
});

describe('[UNIT] Statement', function() {
  var transactionHistory;
  var statement;
  var printer;
  var transactionHistoryStubData = [
    { amount: 1000, type: 'Deposit', date: new Date(2012, 1, 10)},
    { amount: 1500, type: 'Deposit', date: new Date(2012, 1, 14)},
    { amount: 2000, type: 'Deposit', date: new Date(2012, 1, 11)}
  ];
  var balanceData = [ 
    { transaction: { amount: 1000, type: 'Deposit', date: new Date(2012, 1, 10) }, balance: 1000},
    { transaction: { amount: 2000, type: 'Deposit', date: new Date(2012, 1, 11) }, balance: 3000},
    { transaction: { amount: 1500, type: 'Deposit', date: new Date(2012, 1, 14) }, balance: 4500}
  ];
  var formatterData = "date || credit || debit || balance<br>10/01/2012 || 1000.00 || || 1000.00";

  beforeEach(function() {
    transactionHistory = new TransactionHistoryMock([].concat(transactionHistoryStubData));
    
    balanceCalculator = {
      getBalances: jasmine.createSpy().and.returnValue([].concat(balanceData))
    };

    formatter = {
      format: jasmine.createSpy().and.returnValue(formatterData)
    };

    statement = new Statement(transactionHistory, balanceCalculator);
  });  

  it('should call BalanceCalculator with transaction history data', function(){
    statement.getStatement(formatter);
    var dataOrderedByDateAsc = [].concat(transactionHistoryStubData);
    dataOrderedByDateAsc.sort(function(a, b) {
      return a.date.getTime() - b.date.getTime();
    });
    expect(balanceCalculator.getBalances).toHaveBeenCalledWith(dataOrderedByDateAsc);
  });

  it('should call formatter with balance data', function(){
    statement.getStatement(formatter);
    var dataOrderedByDateDesc = [].concat(balanceData);
    dataOrderedByDateDesc.reverse();
    expect(formatter.format).toHaveBeenCalledWith(dataOrderedByDateDesc);
  });

  it('should return formatted statement', function() {
      var output = statement.getStatement(formatter);
      expect(output).toEqual(formatterData);
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

describe('[UNIT] Balance Calculator', function() {
  var transactionHistoryOrdered = [
      { amount: 1000, type: 'Deposit', date: new Date(2012, 1, 10)},
      { amount: 2000, type: 'Deposit', date: new Date(2012, 1, 11)},
      { amount: 1500, type: 'Deposit', date: new Date(2012, 1, 14)}
    ];
  var balanceData = [ 
    { transaction: transactionHistoryOrdered[0], balance: 1000},
    { transaction: transactionHistoryOrdered[1], balance: 3000},
    { transaction: transactionHistoryOrdered[2], balance: 4500}
  ];

    it('should return transaction history with balances', function() {

      //expect(transactions[0].date.getDate()).toBe(scenario.date);
      var balanceCalculator = new BalanceCalculator();
      var output = balanceCalculator.getBalances(transactionHistoryOrdered);
      expect(output).toEqual(balanceData);
    });
});