const ftoc = function(fahrenheit) {
    result = ((fahrenheit - 32) / 1.8)
    if (result % 1 != 0) {
        return Number(result.toFixed(1));
    } else {
        return Number(result);
    }
}

const ctof = function(celsius) {
    result = ((celsius * 1.8) + 32)
    if (result % 1 != 0) {
        return Number(result.toFixed(1));
    } else {
        return Number(result);
    }
}

module.exports = {
    ftoc,
    ctof
}