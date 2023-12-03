let resultD211;
let resultD212;
let textFile21;
const computeD211 = async () => {
    let result = 0;
    const lines = textFile21.split('\r\n');
    lines.map((line) => {
    });
    return result;
}
const computeD212 = async () => {
    let result = 0;
    const lines = textFile21.split('\r\n');
    lines.map((line) => {

    });
    return result;
}

const populateTextD21 = async () => {
    const inputFile = document.getElementById("iD21FInputFile");
    textFile21 = await inputFile.files[0].text();
}

const runD21 = async () => {
    resultD211 = await computeD211();
    resultD212 = await computeD212();
    const day211Input = document.getElementById("iD211");
    const day212Input = document.getElementById("iD212");
    day211Input.setAttribute('value', resultD211);
    day212Input.setAttribute('value', resultD212);
}