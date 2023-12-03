let resultD11;
let resultD12;
let textFile;
const computeD11 = async () => {
    let isFirstOccurence = true;
    const lines = textFile.replace(/\r/g, '').split('\n');
    let currentDigits = [];
    lines.map((line) => {
        let chars = Array.from(line);
        let firstDigit = 0;
        let secondDigit = 0;
        for (let char of chars) {
            if (!isNaN(Number(char)) && isFirstOccurence) {
                firstDigit = char;
                secondDigit = char;
                isFirstOccurence = false;
            } else if (!isNaN(Number(char))) {
                secondDigit = char;
            }
        }
        currentDigits.push(Number(firstDigit + secondDigit));
        isFirstOccurence = true;
    });
    return currentDigits.reduce((a, b) => {
        return a + b;
    }, 0);
}
const computeD12 = async () => {

    let isFirstOccurence = true;
    const lines = textFile.replace(/\r/g, '').split('\n');
    let currentDigits = [];
    lines.map((line) => {
        let chars = Array.from(line);
        let firstDigit = 0;
        let secondDigit = 0;
        for (let charIndex = 0; charIndex < chars.length; charIndex++) {
            if (!isNaN(Number(chars[charIndex])) && isFirstOccurence) {
                firstDigit = chars[charIndex];
                secondDigit = chars[charIndex];
                isFirstOccurence = false;
            } else if (!isNaN(Number(chars[charIndex]))) {
                secondDigit = chars[charIndex];
            } else {
                if (chars[charIndex] === "o") {
                    if (chars[charIndex + 1] === "n" && chars[charIndex + 2] === "e") {
                        if (isFirstOccurence) {
                            firstDigit = "1";
                            secondDigit = "1";
                            isFirstOccurence = false;
                        } else {
                            secondDigit = 1;
                        }
                        charIndex += 1;
                    }
                } else if (chars[charIndex] === "t") {
                    if (chars[charIndex + 1] === "w" && chars[charIndex + 2] === "o") {
                        if (isFirstOccurence) {
                            firstDigit = "2";
                            secondDigit = "2";
                            isFirstOccurence = false;
                        } else {
                            secondDigit = "2";
                        }
                        charIndex += 1;
                    } else if (chars[charIndex + 1] === "h" && chars[charIndex + 2] === "r" && chars[charIndex + 3] === "e" && chars[charIndex + 4] === "e") {
                        if (isFirstOccurence) {
                            firstDigit = "3";
                            secondDigit = "3";
                            isFirstOccurence = false;
                        } else {
                            secondDigit = "3";
                        }
                        charIndex += 3;
                    }
                } else if (chars[charIndex] === "f") {
                    if (chars[charIndex + 1] === "i" && chars[charIndex + 2] === "v" && chars[charIndex + 3] === "e") {
                        if (isFirstOccurence) {
                            firstDigit = "5";
                            secondDigit = "5";
                            isFirstOccurence = false;
                        } else {
                            secondDigit = "5";
                        }
                        charIndex += 2;
                    } else if (chars[charIndex + 1] === "o" && chars[charIndex + 2] === "u" && chars[charIndex + 3] === "r") {
                        if (isFirstOccurence) {
                            firstDigit = "4";
                            secondDigit = "4";
                            isFirstOccurence = false;
                        } else {
                            secondDigit = "4";
                        }
                        charIndex += 2;
                    }
                } else if (chars[charIndex] === "s") {
                    if (chars[charIndex + 1] === "i" && chars[charIndex + 2] === "x") {
                        if (isFirstOccurence) {
                            firstDigit = "6";
                            secondDigit = "6";
                            isFirstOccurence = false;
                        } else {
                            secondDigit = "6";
                        }
                        charIndex += 1;
                    } else if (chars[charIndex + 1] === "e" && chars[charIndex + 2] === "v" && chars[charIndex + 3] === "e" && chars[charIndex + 4] === "n") {
                        if (isFirstOccurence) {
                            firstDigit = "7";
                            secondDigit = "7";
                            isFirstOccurence = false;
                        } else {
                            secondDigit = "7";
                        }
                        charIndex += 3;
                    }
                } else if (chars[charIndex] === "e") {
                    if (chars[charIndex + 1] === "i" && chars[charIndex + 2] === "g" && chars[charIndex + 3] === "h" && chars[charIndex + 4] === "t") {
                        if (isFirstOccurence) {
                            firstDigit = "8";
                            secondDigit = "8";
                            isFirstOccurence = false;
                        } else {
                            secondDigit = "8";
                        }
                        charIndex += 3;
                    }
                } else if (chars[charIndex] === "n") {
                    if (chars[charIndex + 1] === "i" && chars[charIndex + 2] === "n" && chars[charIndex + 3] === "e") {
                        if (isFirstOccurence) {
                            firstDigit = "9";
                            secondDigit = "9";
                            isFirstOccurence = false;
                        } else {
                            secondDigit = "9";
                        }
                        charIndex += 2;
                    }
                }
            }
        }
        currentDigits.push(Number(firstDigit + secondDigit));
        isFirstOccurence = true;
    });
    return currentDigits.reduce((a, b) => {
        return a + b;
    }, 0);
}

const populateTextD1 = async () => {
    const inputFile = document.getElementById("iD1FInputFile");
    textFile = await inputFile.files[0].text();
}

const runD1 = async () => {
    resultD11 = await computeD11();
    resultD12 = await computeD12();
    const day11Input = document.getElementById("iD11");
    const day12Input = document.getElementById("iD12");
    day11Input.setAttribute('value', resultD11);
    day12Input.setAttribute('value', resultD12);
}