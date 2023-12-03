let resultD111;
let resultD112;
let textFile11;
const computeD111 = async () => {
    let result = 0;
    const lines = textFile11.split('\r\n');
    lines.map((line) => {
    });
    return result;
}
const computeD112 = async () => {
    let result = 0;
    const lines = textFile11.split('\r\n');
    lines.map((line) => {

    });
    return result;
}

const populateTextD11 = async () => {
    const inputFile = document.getElementById("iD11FInputFile");
    textFile11 = await inputFile.files[0].text();
}

const runD11 = async () => {
    resultD111 = await computeD111();
    resultD112 = await computeD112();
    const day111Input = document.getElementById("iD111");
    const day112Input = document.getElementById("iD112");
    day111Input.setAttribute('value', resultD111);
    day112Input.setAttribute('value', resultD112);
}