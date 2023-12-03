let resultD151;
let resultD152;
let textFile15;
const computeD151 = async () => {
    let result = 0;
    const lines = textFile15.split('\r\n');
    lines.map((line) => {
    });
    return result;
}
const computeD152 = async () => {
    let result = 0;
    const lines = textFile15.split('\r\n');
    lines.map((line) => {

    });
    return result;
}

const populateTextD15 = async () => {
    const inputFile = document.getElementById("iD15FInputFile");
    textFile15 = await inputFile.files[0].text();
}

const runD15 = async () => {
    resultD151 = await computeD151();
    resultD152 = await computeD152();
    const day151Input = document.getElementById("iD151");
    const day152Input = document.getElementById("iD152");
    day151Input.setAttribute('value', resultD151);
    day152Input.setAttribute('value', resultD152);
}