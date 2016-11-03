describe("Mars Rover", function() {
  var dataMapper;
  var compass;
  var rover;
  var navigator;

  beforeEach(function() {
    dataMapper = new DataMapper();
    compass = new Compass();  
    navigator = new Navigator();
    rover = new Rover(dataMapper, compass, navigator);
  })
  describe('can turn left', function() {
    var scenarios = [
      { 
        input: "5 5\n2 2 N\nL",
        outputOrientation: "W"
      },
      { 
        input: "5 5\n2 2 S\nL",
        outputOrientation: "E"
      },
      { 
        input: "5 5\n2 2 W\nL",
        outputOrientation: "S"
      },
      { 
        input: "5 5\n2 2 E\nL",
        outputOrientation: "N"
      },
      { 
        input: "5 5\n2 2 E\nLM",
        outputOrientation: "N"
      },
      { 
        input: "5 5\n2 2 E\nLLLM",
        outputOrientation: "S"
      }
    ];

    scenarios.forEach(function(scenario){
      it("with (" + scenario.input + ")", function() {      
        var outputArray = rover
          .move(scenario.input)
          .split(" ");
        expect(outputArray[2]).toBe(scenario.outputOrientation);
      });
    });
  });

  describe('can turn right', function() {
      var scenarios = [
      { 
        input: "5 5\n2 2 N\nR",
        outputOrientation: "E"
      },
      { 
        input: "5 5\n2 2 S\nR",
        outputOrientation: "W"
      },
      { 
        input: "5 5\n2 2 W\nR",
        outputOrientation: "N"
      },
      { 
        input: "5 5\n2 2 E\nR",
        outputOrientation: "S"
      },
      { 
        input: "5 5\n2 2 E\nRM",
        outputOrientation: "S"
      },
      { 
        input: "5 5\n2 2 E\nRRM",
        outputOrientation: "W"
      }
    ];

    scenarios.forEach(function(scenario){
      it("with (" + scenario.input + ")", function() {
        var outputArray = rover
          .move(scenario.input)
          .split(" ");
        expect(outputArray[2]).toBe(scenario.outputOrientation);
      });
    });
  });

  describe('can move', function() {
    var scenarios = [
      { 
        input: "5 5\n2 2 N\nM",
        output: "2 3 N"
      },
      { 
        input: "5 5\n2 2 S\nM",
        output: "2 1 S"
      },
      { 
        input: "5 5\n2 2 W\nM",
        output: "1 2 W"
      }
    ];

    scenarios.forEach(function(scenario){
      it("with (" + scenario.input + ")", function() {
        var output = rover
          .move(scenario.input);
        expect(output).toBe(scenario.output);
      });
    });
  });




});