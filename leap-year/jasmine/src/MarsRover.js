function DataMapper() {

};

DataMapper.prototype.getInstructions = function(dataString) {
  return dataString
    .split("\n")[2]
    .split("");
}

DataMapper.prototype.getOrientation = function(dataString) {
  return dataString
    .split("\n")[1]
    .split(" ")[2];
}

DataMapper.prototype.getPosition = function(dataString) {
  return dataString
    .split("\n")[1]
    .split(" ")
    .slice(0, 2).map(function(item) {
      return parseInt(item, 10);
    }); 
}


function Compass() {

};

Compass.prototype.ORIENTATION = {
  North: "N",
  West: "W",
  East: "E",
  South: "S"
};

Compass.prototype.ORIENTATIONS = [ 
  Compass.prototype.ORIENTATION.North,
  Compass.prototype.ORIENTATION.East,
  Compass.prototype.ORIENTATION.South,
  Compass.prototype.ORIENTATION.West ];

Compass.prototype.ROTATION = {
  "L": -1,
  "R": 1
};


Compass.prototype.getNewOrientation = function(orientation, rotation) {
  rotation = this.ROTATION[rotation];

  if (!rotation) {
    return orientation;
  }

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

function Navigator() {

}

Navigator.prototype.instructionToPosition = (function() {
  var ORIENTATION = Compass.prototype.ORIENTATION;
  var dictionary = {};

  dictionary[ORIENTATION.North] = function(position) { 
    position[1] += 1; 
    return position;
  };
  dictionary[ORIENTATION.South] = function(position) {
     position[1] -= 1;
     return position;
  };
  dictionary[ORIENTATION.East] = function(position) { 
    position[0] += 1; 
    return position;
  };
  dictionary[ORIENTATION.West] = function(position) { 
    position[0] -= 1; 
    return position;
  };
  
  return dictionary;
})();

Navigator.prototype.move = function(position, orientation) {
  return this.instructionToPosition[orientation]([].concat(position));
}


function Rover(dataMapper, compass, navigator) {
  this.dataMapper = dataMapper;
  this.compass = compass;
  this.navigator = navigator;
};

Rover.prototype.move = function(dataString) {
  var instructions = this.dataMapper.getInstructions(dataString);
  var orientation = this.dataMapper.getOrientation(dataString);
  var position = this.dataMapper.getPosition(dataString);

  instructions.forEach(function(instruction) {   
      if(instruction === "M") {
        position = this.navigator.move(position, orientation);
        return;
      }
      orientation = this.compass.getNewOrientation(orientation, instruction);
  }.bind(this));

  return position.join(" ") + " " + orientation;
}
