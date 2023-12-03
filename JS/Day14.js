let resultD141;
let resultD142;
let textFile14;
const computeD141 = async () => {
    let result = 0;
    const lines = textFile14.split('\r\n');
    lines.map((line) => {
    });
    return result;
}
const computeD142 = async () => {
    let result = 0;
    const lines = textFile14.split('\r\n');
    lines.map((line) => {

    });
    return result;
}

const populateTextD14 = async () => {
    const inputFile = document.getElementById("iD14FInputFile");
    textFile14 = await inputFile.files[0].text();
}

const runD14 = async () => {
    resultD141 = await computeD141();
    resultD142 = await computeD142();
    const day141Input = document.getElementById("iD141");
    const day142Input = document.getElementById("iD142");
    day141Input.setAttribute('value', resultD141);
    day142Input.setAttribute('value', resultD142);
}