let resultD71;
let resultD72;
let textFile7;
const computeD71 = async () => {
    let result = 0;
    const lines = textFile7.split('\r\n');
    lines.map((line) => {
    });
    return result;
}
const computeD72 = async () => {
    let result = 0;
    const lines = textFile7.split('\r\n');
    lines.map((line) => {

    });
    return result;
}

const populateTextD7 = async () => {
    const inputFile = document.getElementById("iD7FInputFile");
    textFile7 = await inputFile.files[0].text();
}

const runD7 = async () => {
    resultD71 = await computeD71();
    resultD72 = await computeD72();
    const day71Input = document.getElementById("iD71");
    const day72Input = document.getElementById("iD72");
    day71Input.setAttribute('value', resultD71);
    day72Input.setAttribute('value', resultD72);
}