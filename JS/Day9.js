let resultD91;
let resultD92;
let textFile9;
const computeD91 = async () => {
    let result = 0;
    const lines = textFile9.replace(/\r/g, '').split('\n');
    lines.map((line) => {
    });
    return result;
}
const computeD92 = async () => {
    let result = 0;
    const lines = textFile9.replace(/\r/g, '').split('\n');
    lines.map((line) => {

    });
    return result;
}

const populateTextD9 = async () => {
    const inputFile = document.getElementById("iD9FInputFile");
    textFile9 = await inputFile.files[0].text();
}

const runD9 = async () => {
    resultD91 = await computeD91();
    resultD92 = await computeD92();
    const day91Input = document.getElementById("iD91");
    const day92Input = document.getElementById("iD92");
    day91Input.setAttribute('value', resultD91);
    day92Input.setAttribute('value', resultD92);
}