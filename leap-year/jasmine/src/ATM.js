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

};

TransactionHistory.prototype.addTransaction = function() {
  
};

TransactionHistory.prototype.getTransactions = function() {
  
};