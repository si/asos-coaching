// Simple function to check if a year is a leap year (divisible by 4, not 100 but both 4 and 100)
var isLeapYear = function(year) {
    if((year % 4 === 0) && (year % 100 !== 0)) {
        return true;
    } else if(year % 400 === 0) {
        return true;
    }    
    return false;
}