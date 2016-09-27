module.exports = function (wallaby) {
  return {
    files: [
      'jasmine/src/**/*.js'
    ],

    tests: [
      'jasmine/spec/**/*Spec.js'
    ]
  };
};