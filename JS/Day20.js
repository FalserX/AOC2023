let resultD201;
let resultD202;
let textFile20;
const computeD201 = async () => {
    let result = 0;
    const lines = textFile20.split('\r\n');
    lines.map((line) => {
    });
    return result;
}
const computeD202 = async () => {
    let result = 0;
    const lines = textFile20.split('\r\n');
    lines.map((line) => {

    });
    return result;
}

const populateTextD20 = async () => {
    const inputFile = document.getElementById("iD20FInputFile");
    textFile20 = await inputFile.files[0].text();
}

const runD20 = async () => {
    resultD201 = await computeD201();
    resultD202 = await computeD202();
    const day201Input = document.getElementById("iD201");
    const day202Input = document.getElementById("iD202");
    day201Input.setAttribute('value', resultD201);
    day202Input.setAttribute('value', resultD202);
}