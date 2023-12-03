let resultD61;
let resultD62;
let textFile6;
const computeD61 = async () => {
    let result = 0;
    const lines = textFile6.replace(/\r/g, '').split('\n');
    lines.map((line) => {
    });
    return result;
}
const computeD62 = async () => {
    let result = 0;
    const lines = textFile6.replace(/\r/g, '').split('\n');
    lines.map((line) => {

    });
    return result;
}

const populateTextD6 = async () => {
    const inputFile = document.getElementById("iD6FInputFile");
    textFile6 = await inputFile.files[0].text();
}

const runD6 = async () => {
    resultD61 = await computeD61();
    resultD62 = await computeD62();
    const day61Input = document.getElementById("iD61");
    const day62Input = document.getElementById("iD62");
    day61Input.setAttribute('value', resultD61);
    day62Input.setAttribute('value', resultD62);
}