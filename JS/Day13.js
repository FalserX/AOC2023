let resultD131;
let resultD132;
let textFile13;
const computeD131 = async () => {
    let result = 0;
    const lines = textFile13.replace(/\r/g, '').split('\n');
    lines.map((line) => {
    });
    return result;
}
const computeD132 = async () => {
    let result = 0;
    const lines = textFile13.replace(/\r/g, '').split('\n');
    lines.map((line) => {

    });
    return result;
}

const populateTextD13 = async () => {
    const inputFile = document.getElementById("iD13FInputFile");
    textFile13 = await inputFile.files[0].text();
}

const runD13 = async () => {
    resultD131 = await computeD131();
    resultD132 = await computeD132();
    const day131Input = document.getElementById("iD131");
    const day132Input = document.getElementById("iD132");
    day131Input.setAttribute('value', resultD131);
    day132Input.setAttribute('value', resultD132);
}