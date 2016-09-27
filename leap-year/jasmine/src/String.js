
function Add(input) {
    if(input === '') {
        return 0;
    }

    var found = input.match(/\/\/.+\n/);
    var delimiter = /[\,,\n]{1}/;
    if(found && found.length!==0) {
        var configLine = found[0];
        var delimiterPosition = 2;
        delimiter = configLine.substring(delimiterPosition, configLine.length - 1);
        input = input.replace(configLine, '');
    }
    var numbers = input.split(delimiter);        
    var total = 0;
    numbers.forEach(function(num,i) {
        total += parseInt(num,10);
    });
    return total;
}