let resultD121;
let resultD122;
let textFile12;
const computeD121 = async () => {
    let result = 0;
    const lines = textFile12.replace(/\r/g, '').split('\n');
    lines.map((line) => {
    });
    return result;
}
const computeD122 = async () => {
    let result = 0;
    const lines = textFile12.replace(/\r/g, '').split('\n');
    lines.map((line) => {

    });
    return result;
}

const populateTextD12 = async () => {
    const inputFile = document.getElementById("iD12FInputFile");
    textFile12 = await inputFile.files[0].text();
}

const runD12 = async () => {
    resultD121 = await computeD121();
    resultD122 = await computeD122();
    const day121Input = document.getElementById("iD121");
    const day122Input = document.getElementById("iD122");
    day121Input.setAttribute('value', resultD121);
    day122Input.setAttribute('value', resultD122);
}