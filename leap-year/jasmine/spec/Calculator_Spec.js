describe("Calculator", function() {

  it("starts at zero", function() {
    var response = getCalculation();
    expect(response).toBe(0);
  });

  it("returns 5", function() {
    var response = getCalculation(5);
    expect(response).toBe(10);
  });

});

var getCalculation = function(val) {
    return val || 0;
};