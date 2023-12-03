let resultD31;
let resultD32;
let textFile3;
const computeD31 = async () => {
    let result = 0;
    const lines = textFile3.replace(/\r/g, '').split('\n');
    lines.map((line) => {
    });
    return result;
}
const computeD32 = async () => {
    let result = 0;
    const lines = textFile3.replace(/\r/g, '').split('\n');
    lines.map((line) => {

    });
    return result;
}

const populateTextD3 = async () => {
    const inputFile = document.getElementById("iD3FInputFile");
    textFile3 = await inputFile.files[0].text();
}

const runD3 = async () => {
    resultD31 = await computeD31();
    resultD32 = await computeD32();
    const day31Input = document.getElementById("iD31");
    const day32Input = document.getElementById("iD32");
    day31Input.setAttribute('value', resultD31);
    day32Input.setAttribute('value', resultD32);
}