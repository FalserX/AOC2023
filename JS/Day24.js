let resultD241;
let resultD242;
let textFile24;
const computeD241 = async () => {
    let result = 0;
    const lines = textFile24.split('\r\n');
    lines.map((line) => {
    });
    return result;
}
const computeD242 = async () => {
    let result = 0;
    const lines = textFile24.split('\r\n');
    lines.map((line) => {

    });
    return result;
}

const populateTextD24 = async () => {
    const inputFile = document.getElementById("iD24FInputFile");
    textFile24 = await inputFile.files[0].text();
}

const runD24 = async () => {
    resultD241 = await computeD241();
    resultD242 = await computeD242();
    const day241Input = document.getElementById("iD241");
    const day242Input = document.getElementById("iD242");
    day241Input.setAttribute('value', resultD241);
    day242Input.setAttribute('value', resultD242);
}