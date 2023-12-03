let resultD51;
let resultD52;
let textFile5;
const computeD51 = async () => {
    let result = 0;
    const lines = textFile5.replace(/\r/g, '').split('\n');
    lines.map((line) => {
    });
    return result;
}
const computeD52 = async () => {
    let result = 0;
    const lines = textFile5.replace(/\r/g, '').split('\n');
    lines.map((line) => {

    });
    return result;
}

const populateTextD5 = async () => {
    const inputFile = document.getElementById("iD5FInputFile");
    textFile5 = await inputFile.files[0].text();
}

const runD5 = async () => {
    resultD51 = await computeD51();
    resultD52 = await computeD52();
    const day51Input = document.getElementById("iD51");
    const day52Input = document.getElementById("iD52");
    day51Input.setAttribute('value', resultD51);
    day52Input.setAttribute('value', resultD52);
}