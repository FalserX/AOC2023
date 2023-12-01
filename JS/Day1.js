let resultD11;
let resultD12;

const computeD11 = async() => {
    return "a";
}
const computeD12 = async() => {
    return "b";
}

const runD1 = async() => {
    resultD11 = await computeD11();
    resultD12 = await computeD12();
    const day11Input = document.getElementById("iD11");
    const day12Input = document.getElementById("iD12");
    day11Input.setAttribute('value', resultD11);
    day12Input.setAttribute('value', resultD12);
}