let resultD231;
let resultD232;
let textFile23;
const computeD231 = async () => {
    let result = 0;
    const lines = textFile23.split('\r\n');
    lines.map((line) => {
    });
    return result;
}
const computeD232 = async () => {
    let result = 0;
    const lines = textFile23.split('\r\n');
    lines.map((line) => {

    });
    return result;
}

const populateTextD23 = async () => {
    const inputFile = document.getElementById("iD23FInputFile");
    textFile23 = await inputFile.files[0].text();
}

const runD23 = async () => {
    resultD231 = await computeD231();
    resultD232 = await computeD232();
    const day231Input = document.getElementById("iD231");
    const day232Input = document.getElementById("iD232");
    day231Input.setAttribute('value', resultD231);
    day232Input.setAttribute('value', resultD232);
}