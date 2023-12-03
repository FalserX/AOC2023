let resultD161;
let resultD162;
let textFile16;
const computeD161 = async () => {
    let result = 0;
    const lines = textFile16.replace(/\r/g, '').split('\n');
    lines.map((line) => {
    });
    return result;
}
const computeD162 = async () => {
    let result = 0;
    const lines = textFile16.replace(/\r/g, '').split('\n');
    lines.map((line) => {

    });
    return result;
}

const populateTextD16 = async () => {
    const inputFile = document.getElementById("iD16FInputFile");
    textFile16 = await inputFile.files[0].text();
}

const runD16 = async () => {
    resultD161 = await computeD161();
    resultD162 = await computeD162();
    const day161Input = document.getElementById("iD161");
    const day162Input = document.getElementById("iD162");
    day161Input.setAttribute('value', resultD161);
    day162Input.setAttribute('value', resultD162);
}