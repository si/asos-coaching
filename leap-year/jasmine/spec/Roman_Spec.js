describe("Roman Numeral converter", function() {

  it("converts 1 to I", function() {
    var romanNumeral = RomanConverter(1);
    expect(romanNumeral).toBe('I');
  });

  it("converts 2 to II", function() {
    var romanNumeral = RomanConverter(2);
    expect(romanNumeral).toBe('II');
  });

  it("converts 3 to III", function() {
    var romanNumeral = RomanConverter(3);
    expect(romanNumeral).toBe('III');
  });

  it("converts 4 to IV", function() {
    var romanNumeral = RomanConverter(4);
    expect(romanNumeral).toBe('IV');
  });

  it("converts 5 to V", function() {
    var romanNumeral = RomanConverter(5);
    expect(romanNumeral).toBe('V');
  });

  it("converts 6 to VI", function() {
    var romanNumeral = RomanConverter(6);
    expect(romanNumeral).toBe('VI');
  });

  it("converts 7 to VII", function() {
    var romanNumeral = RomanConverter(7);
    expect(romanNumeral).toBe('VII');
  });

  it("converts 8 to VIII", function() {
    var romanNumeral = RomanConverter(8);
    expect(romanNumeral).toBe('VIII');
  });

  it("converts 9 to IX", function() {
    var romanNumeral = RomanConverter(9);
    expect(romanNumeral).toBe('IX');
  });

  it("converts 10 to X", function() {
    var romanNumeral = RomanConverter(10);
    expect(romanNumeral).toBe('X');
  });

  it("converts 11 to XI", function() {
    var romanNumeral = RomanConverter(11);
    expect(romanNumeral).toBe('XI');
  });

  it("converts 12 to XII", function() {
    var romanNumeral = RomanConverter(12);
    expect(romanNumeral).toBe('XII');
  });

  it("converts 39 to XXXIX", function() {
    var romanNumeral = RomanConverter(39);
    expect(romanNumeral).toBe('XXXIX');
  });

  it("converts 40 to XL", function() {
    var romanNumeral = RomanConverter(40);
    expect(romanNumeral).toBe('XL');
  });

  it("converts 41 to XLI", function() {
    var romanNumeral = RomanConverter(41);
    expect(romanNumeral).toBe('XLI');
  });

  it("converts 49 to XLIX", function() {
    var romanNumeral = RomanConverter(49);
    expect(romanNumeral).toBe('XLIX');
  });

  it("converts 50 to L", function() {
    var romanNumeral = RomanConverter(50);
    expect(romanNumeral).toBe('L');
  });

  it("converts 51 to LI", function() {
    var romanNumeral = RomanConverter(51);
    expect(romanNumeral).toBe('LI');
  });

  it("converts 89 to LXXXIX", function() {
    var romanNumeral = RomanConverter(89);
    expect(romanNumeral).toBe('LXXXIX');
  });


//   it("converts 91 to XCI", function() {
//     var romanNumeral = RomanConverter(91);
//     expect(romanNumeral).toBe('XCI');
//   });

});
