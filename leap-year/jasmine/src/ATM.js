function ATM(statement, transactionHistory) {
  this.statement = statement;
  this.transactionHistory = transactionHistory;
}

ATM.prototype.makeDeposit = function(amount) {
  this.transactionHistory.addTransaction(amount, 'Deposit');
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