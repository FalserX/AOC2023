let resultD81;
let resultD82;
let textFile8;
const computeD81 = async () => {
    let result = 0;
    const lines = textFile8.split('\r\n');
    lines.map((line) => {
    });
    return result;
}
const computeD82 = async () => {
    let result = 0;
    const lines = textFile8.split('\r\n');
    lines.map((line) => {

    });
    return result;
}

const populateTextD8 = async () => {
    const inputFile = document.getElementById("iD8FInputFile");
    textFile8 = await inputFile.files[0].text();
}

const runD8 = async () => {
    resultD81 = await computeD81();
    resultD82 = await computeD82();
    const day81Input = document.getElementById("iD81");
    const day82Input = document.getElementById("iD82");
    day81Input.setAttribute('value', resultD81);
    day82Input.setAttribute('value', resultD82);
}