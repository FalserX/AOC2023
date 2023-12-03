let resultD221;
let resultD222;
let textFile22;
const computeD221 = async () => {
    let result = 0;
    const lines = textFile22.replace(/\r/g, '').split('\n');
    lines.map((line) => {
    });
    return result;
}
const computeD222 = async () => {
    let result = 0;
    const lines = textFile22.replace(/\r/g, '').split('\n');
    lines.map((line) => {

    });
    return result;
}

const populateTextD22 = async () => {
    const inputFile = document.getElementById("iD22FInputFile");
    textFile22 = await inputFile.files[0].text();
}

const runD22 = async () => {
    resultD221 = await computeD221();
    resultD222 = await computeD222();
    const day221Input = document.getElementById("iD221");
    const day222Input = document.getElementById("iD222");
    day221Input.setAttribute('value', resultD221);
    day222Input.setAttribute('value', resultD222);
}