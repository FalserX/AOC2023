let resultD181;
let resultD182;
let textFile18;
const computeD181 = async () => {
    let result = 0;
    const lines = textFile18.replace(/\r/g, '').split('\n');
    lines.map((line) => {
    });
    return result;
}
const computeD182 = async () => {
    let result = 0;
    const lines = textFile18.replace(/\r/g, '').split('\n');
    lines.map((line) => {

    });
    return result;
}

const populateTextD18 = async () => {
    const inputFile = document.getElementById("iD18FInputFile");
    textFile18 = await inputFile.files[0].text();
}

const runD18 = async () => {
    resultD181 = await computeD181();
    resultD182 = await computeD182();
    const day181Input = document.getElementById("iD181");
    const day182Input = document.getElementById("iD182");
    day181Input.setAttribute('value', resultD181);
    day182Input.setAttribute('value', resultD182);
}