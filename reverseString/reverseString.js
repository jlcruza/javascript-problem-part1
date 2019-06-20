const reverseString = function(str) {
    reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str.charAt(i);
    }
    return reverse;
}

module.exports = reverseString