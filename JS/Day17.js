let resultD171;
let resultD172;
let textFile17;
const computeD171 = async () => {
    let result = 0;
    const lines = textFile17.split('\r\n');
    lines.map((line) => {
    });
    return result;
}
const computeD172 = async () => {
    let result = 0;
    const lines = textFile17.split('\r\n');
    lines.map((line) => {

    });
    return result;
}

const populateTextD17 = async () => {
    const inputFile = document.getElementById("iD17FInputFile");
    textFile17 = await inputFile.files[0].text();
}

const runD17 = async () => {
    resultD171 = await computeD171();
    resultD172 = await computeD172();
    const day171Input = document.getElementById("iD171");
    const day172Input = document.getElementById("iD172");
    day171Input.setAttribute('value', resultD171);
    day172Input.setAttribute('value', resultD172);
}