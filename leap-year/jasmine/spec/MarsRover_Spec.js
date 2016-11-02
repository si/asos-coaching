describe("Mars Rover", function() {

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
    }
  ];

  scenarios.forEach(function(scenario){
    it("Can turn left with (" + scenario.input + ")", function() {
      var rover = new Rover();
      var outputArray = rover
        .init(scenario.input)
        .split(" ");
      expect(outputArray[2]).toBe(scenario.outputOrientation);
    });
  });

scenarios = [
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
    }
  ];

  scenarios.forEach(function(scenario){
    it("Can turn right with (" + scenario.input + ")", function() {
      var rover = new Rover();
      var outputArray = rover
        .init(scenario.input)
        .split(" ");
      expect(outputArray[2]).toBe(scenario.outputOrientation);
    });
  });

});