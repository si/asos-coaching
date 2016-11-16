/*
Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
*/

xdescribe("[ACC] Allows to make a deposit", function() {
  describe('given a deposit of 1000', function() {
      it("it prints a statement with ", function() {
        var expectedStatement = "date || credit || debit || balance<br>10/01/2012 || 1000.00 || || 1000.00";
        var statement = new Statement(),
            transactionHistory = new TransactionHistory();

        var clock = {
            getDate: jasmine.createSpy().and.returnValue(new Date('2012-01-10'))
          }, 
          atm = new ATM(statement, transactionHistory, clock),
            printer = {
              print: jasmine.createSpy()
            };

        atm.makeDeposit(1000);        
        atm.printStatement(printer);

        expect(printer.print).toHaveBeenCalledWith(expectedStatement);        
      });
  });
});