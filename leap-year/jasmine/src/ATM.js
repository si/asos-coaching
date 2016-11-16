function ATM(statement, transactionHistory, clock) {
  this.statement = statement;
  this.transactionHistory = transactionHistory;
  this.clock = clock;
}

ATM.prototype.makeDeposit = function(amount) {
  this.transactionHistory.addTransaction({ amount: amount, type: 'Deposit', date: this.clock.getDate() } );
};

ATM.prototype.makeWithdrawal = function(amount) {
  this.transactionHistory.addTransaction({ amount: amount, type: 'Withdrawal', date: this.clock.getDate() } );
};

ATM.prototype.printStatement = function(printer) {
  printer.print(this.statement.getStatement(this.transactionHistory.getTransactions()));
};

function Statement() {

};

Statement.prototype.getStatement = function() {

};

function TransactionHistory() {
  this.transactions = [];
};

TransactionHistory.prototype.addTransaction = function(transaction) {
  this.transactions.push(transaction);
};

TransactionHistory.prototype.getTransactions = function() {
  return this.transactions;
};