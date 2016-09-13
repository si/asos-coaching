describe("Leap year validator", function() {

  it("does not validate 1 as a leap year", function() {
    var leapYear = isLeapYear(1);
    expect(leapYear).toBe(false);
  });

  it("does validate 4 as a leap year", function() {
    var leapYear = isLeapYear(4);
    expect(leapYear).toBe(true);
  });

  it("does validate 8 as a leap year", function() {
    var leapYear = isLeapYear(8);
    expect(leapYear).toBe(true);
  });

  it("does not validate 100 as a leap year", function() {
    var leapYear = isLeapYear(100);
    expect(leapYear).toBe(false);
  });

  it("does validate 400 as a leap year", function() {
    var leapYear = isLeapYear(400);
    expect(leapYear).toBe(true);
  });

});
