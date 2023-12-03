let resultD251;
let resultD252;
let textFile25;
const computeD251 = async () => {
    let result = 0;
    const lines = textFile25.split('\r\n');
    lines.map((line) => {
    });
    return result;
}
const computeD252 = async () => {
    let result = 0;
    const lines = textFile25.split('\r\n');
    lines.map((line) => {

    });
    return result;
}

const populateTextD25 = async () => {
    const inputFile = document.getElementById("iD25FInputFile");
    textFile25 = await inputFile.files[0].text();
}

const runD25 = async () => {
    resultD251 = await computeD251();
    resultD252 = await computeD252();
    const day251Input = document.getElementById("iD251");
    const day252Input = document.getElementById("iD252");
    day251Input.setAttribute('value', resultD251);
    day252Input.setAttribute('value', resultD252);
}