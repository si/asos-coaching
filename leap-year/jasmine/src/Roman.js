
function RomanConverter(value) {
    console.log('Value', value);
    var map = {
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I',
    };

    if(typeof map[value]!=='undefined') {
        return map[value];
    
    } 

    console.log('Map', map);
    for(var key in map) {
        console.log('Key', key, 'String', map[key] );
        if(value > key) {
            return map[key] + RomanConverter(value - key);
        }
    };
    
    if(value > 50) {
        return map[50] + RomanConverter(value - 50);
    }

    if(value > 40) {
        return map[40] + RomanConverter(value - 40);
    }

    if(value > 10) {
        return map[10] + RomanConverter(value - 10);
    }

    if(value > 5) {
        return map[5] + RomanConverter(value - 5);
    }

    if(value > 1) {
        return map[1] + RomanConverter(value - 1);
  }

};