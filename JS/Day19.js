let resultD191;
let resultD192;
let textFile19;
const computeD191 = async () => {
    let result = 0;
    const lines = textFile19.split('\r\n');
    lines.map((line) => {
    });
    return result;
}
const computeD192 = async () => {
    let result = 0;
    const lines = textFile19.split('\r\n');
    lines.map((line) => {

    });
    return result;
}

const populateTextD19 = async () => {
    const inputFile = document.getElementById("iD19FInputFile");
    textFile19 = await inputFile.files[0].text();
}

const runD19 = async () => {
    resultD191 = await computeD191();
    resultD192 = await computeD192();
    const day191Input = document.getElementById("iD191");
    const day192Input = document.getElementById("iD192");
    day191Input.setAttribute('value', resultD191);
    day192Input.setAttribute('value', resultD192);
}