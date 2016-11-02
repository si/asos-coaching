function Rover() {
  
};

Rover.prototype.ORIENTATIONS = [ "N", "E", "S", "W" ];

Rover.prototype.ROTATION = {
  "L": -1,
  "R": 1
};

Rover.prototype.getNewOrientation = function(orientation, rotation) {
  rotation = this.ROTATION[rotation];
  var currentOrientationIndex = this.ORIENTATIONS.indexOf(orientation);
  var newOrientationIndex = currentOrientationIndex + rotation;
  
  if (newOrientationIndex < 0) {
    return this.ORIENTATIONS[this.ORIENTATIONS.length - 1];
  }
  if (newOrientationIndex >= this.ORIENTATIONS.length) {
    return this.ORIENTATIONS[0]
  }

  return this.ORIENTATIONS[newOrientationIndex];
};

Rover.prototype.init = function(dataString) {
  var instructions = this.getInstructionsFromDataString(dataString);
  var orientation = this.getOrientationFromDataString(dataString);

  instructions.forEach(function(instruction) {
    if (Object.keys(this.ROTATION).indexOf(instruction) !== -1) {
      orientation = this.getNewOrientation(orientation, instruction);
    }    
  }.bind(this));
  return "  " + orientation;
}

Rover.prototype.getInstructionsFromDataString = function(dataString) {
  return dataString
    .split("\n")[2]
    .split("");
}

Rover.prototype.getOrientationFromDataString = function(dataString) {
  return dataString
    .split("\n")[1]
    .split(" ")[2];
}
/*
Rover.prototype.parseDataString = function(dataString) {
  var lines = dataString.split("\n");
  var plateauSize = lines[0]
    .split(" ")
    .map(function(item) { return parseInt(item, 10); });
  
  return {
    plateauSize: plateauSize
  };
  
};*/