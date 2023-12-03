let resultD41;
let resultD42;
let textFile4;
const computeD41 = async () => {
    let result = 0;
    const lines = textFile4.split('\r\n');
    lines.map((line) => {
    });
    return result;
}
const computeD42 = async () => {
    let result = 0;
    const lines = textFile4.split('\r\n');
    lines.map((line) => {

    });
    return result;
}

const populateTextD4 = async () => {
    const inputFile = document.getElementById("iD4FInputFile");
    textFile4 = await inputFile.files[0].text();
}

const runD4 = async () => {
    resultD41 = await computeD41();
    resultD42 = await computeD42();
    const day41Input = document.getElementById("iD41");
    const day42Input = document.getElementById("iD42");
    day41Input.setAttribute('value', resultD41);
    day42Input.setAttribute('value', resultD42);
}