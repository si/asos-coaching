describe("String calculator", function() {

  it("should return zero for empty string", function() {
    var result = Add('');
    expect(result).toBe(0);
  });

  it("should return one for '1'", function() {
      var result = Add('1');
      expect(result).toBe(1);
  })

  it("should return two for '2'", function() {
      var result = Add('2');
      expect(result).toBe(2);
  })

  it("should return three for '0,3'", function() {
      var result = Add('0,3');
      expect(result).toBe(3);
  }) 

  it("should return five for '0,2\n3'", function() {
      var result = Add('0,2\n3');
      expect(result).toBe(5);
  }) 

  it("should return five for '//;\n0;2;3'", function() {
      var result = Add('//;\n0;2;3');
      expect(result).toBe(5);
  })  

  it("should return five for '//&\n0&2&3'", function() {
      var result = Add('//&\n0&2&3');
      expect(result).toBe(5);
  })

  it("should return five for '//__\n0__2__3'", function() {
      var result = Add('//__\n0__2__3');
      expect(result).toBe(5);
  })    
});
