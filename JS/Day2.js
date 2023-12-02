let resultD21;
let resultD22;
let textFile2;
const RED_COUNT = 12;
const GREEN_COUNT = 13;
const BLUE_COUNT = 14;
let red_current_count = 0;
let green_current_count = 0;
let blue_current_count = 0;
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
    const lines = textFile2.split('\r\n');
    lines.map((line) => {
        let isFirstOccurence = true;
        const currentId = line.substring("Game".length + 1, line.indexOf(':')).trimStart();
        line = line.substring(line.indexOf(':') + 1);
        const parties = line.split(';');
        parties.map((party) => {
            const take = party.split(',');
            let b = false;
            let g = false;
            let r = false;
            take.map((t) => {
                const l = t.split(" ");
                const s = l.filter((str) => str !== '');
                const value = s[0];
                const block = s[1];
                if (block === "blue" && (isFirstOccurence || value < blue_current_count)) {
                    blue_current_count = value;
                    b = true;
                } else if (block === "red" && (isFirstOccurence || value < red_current_count)) {
                    red_current_count = value;
                    r = true;
                } else if (block === "green" && (isFirstOccurence || value < green_current_count)) {
                    green_current_count = value;
                    g = true;
                }
                if (!g) {
                    green_current_count = 0;
                } else if (!r) {
                    red_current_count = 0;
                } else if (!b) {
                    blue_current_count = 0;
                }
            });
            isFirstOccurence = false;
        });
        console.log(`[${currentId}]: { "red": ${red_current_count}, "green": ${green_current_count}, "blue": ${blue_current_count} }`);
        currentGames[currentId] = { "red": red_current_count, "green": green_current_count, "blue": blue_current_count };

    })
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