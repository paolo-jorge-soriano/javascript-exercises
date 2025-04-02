const palindromes = function (text) {
    const nonAlphanumericRegex = /[^a-zA-Z0-9]/g;

    text = text.toLowerCase().replace(nonAlphanumericRegex, "");
    let reversedText = text.split("").reverse().join("");

    if (text === reversedText) {
        return true;
    }

    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
