let resultD101;
let resultD102;
let textFile10;
const computeD101 = async () => {
    let result = 0;
    const lines = textFile10.replace(/\r/g, '').split('\n');
    lines.map((line) => {
    });
    return result;
}
const computeD102 = async () => {
    let result = 0;
    const lines = textFile10.replace(/\r/g, '').split('\n');
    lines.map((line) => {

    });
    return result;
}

const populateTextD10 = async () => {
    const inputFile = document.getElementById("iD10FInputFile");
    textFile10 = await inputFile.files[0].text();
}

const runD10 = async () => {
    resultD101 = await computeD101();
    resultD102 = await computeD102();
    const day101Input = document.getElementById("iD101");
    const day102Input = document.getElementById("iD102");
    day101Input.setAttribute('value', resultD101);
    day102Input.setAttribute('value', resultD102);
}