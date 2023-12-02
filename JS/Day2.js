let resultD21;
let resultD22;
let textFile2;
const RED_COUNT = 12;
const GREEN_COUNT = 13;
const BLUE_COUNT = 14;
let max_few_red_current_count = 0;
let max_few_green_current_count = 0;
let max_few_blue_current_count = 0;
let currentGames = {};
const computeD21 = async () => {
    const lines = textFile2.split('\r\n');
    lines.map((line) => {
        let ok = true;
        const currentId = line.substring("Game".length + 1, line.indexOf(':')).trimStart();
        line = line.substring(line.indexOf(':') + 1);
        const parties = line.split(';');
        parties.map((party) => {
            const take = party.split(',');
            take.map((t) => {
                const l = t.split(" ");
                const s = l.filter((str) => str !== '');
                const value = s[0];
                const block = s[1];
                if (block === "blue" && value > BLUE_COUNT) {
                    ok = false;
                } else if (block === "red" && value > RED_COUNT) {
                    ok = false;
                } else if (block === "green" && value > GREEN_COUNT) {
                    ok = false;
                }
            });
        });
        currentGames[currentId] = ok;
    });
    let sum = 0;
    Object.entries(currentGames).map((currentGame) => {
        if (currentGame[1]) {
            sum += Number(currentGame[0]);
        }
    });

    return sum;
}
const computeD22 = async () => {
    let result = 0;
    const lines = textFile2.split('\r\n');
    lines.map((line) => {
        const currentId = line.substring("Game".length + 1, line.indexOf(':')).trimStart();
        line = line.substring(line.indexOf(':') + 1);
        const parties = line.split(';');
        parties.map((party) => {
            const take = party.split(',');
            take.map((t) => {
                const l = t.split(" ");
                const s = l.filter((str) => str !== '');
                const value = Number(s[0]);
                const block = s[1];
                if (block === "blue" && value > max_few_blue_current_count) {
                    max_few_blue_current_count = value;
                } else if (block === "red" && value > max_few_red_current_count) {
                    max_few_red_current_count = value;
                } else if (block === "green" && value > max_few_green_current_count) {
                    max_few_green_current_count = value;
                }
            });
        });
        currentGames[currentId] = { "red": max_few_red_current_count, "green": max_few_green_current_count, "blue": max_few_blue_current_count };
        max_few_red_current_count = 0;
        max_few_blue_current_count = 0;
        max_few_green_current_count = 0;
    });
    Object.entries(currentGames).map((currentGame) => {
        const valuesGame = currentGame[1];
        result += Number(valuesGame["red"]) * Number(valuesGame["green"]) * Number(valuesGame["blue"]);
    });
    return result;
}

const populateTextD2 = async () => {
    const inputFile = document.getElementById("iD2FInputFile");
    textFile2 = await inputFile.files[0].text();
}

const runD2 = async () => {
    resultD21 = await computeD21();
    resultD22 = await computeD22();
    const day21Input = document.getElementById("iD21");
    const day22Input = document.getElementById("iD22");
    day21Input.setAttribute('value', resultD21);
    day22Input.setAttribute('value', resultD22);
}