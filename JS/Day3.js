let resultD31;
let resultD32;
let textFile3;
const computeD31 = async () => {
    let result = 0;
    let schema = [];
    const lines = textFile3.replace(/\r/g, '').split('\n');
    lines.map((line) => {
        schema.push([...line]);
    });
    for (let i = 0; i < schema.length; i++) {
        let tempNum = "";
        for (let j = 0; j < schema[i].length; j++) {
            if (!isNaN(Number(schema[i][j]))) {
                tempNum += schema[i][j];
                if ((i > 0 && j > 0 && isNaN(Number(schema[i - 1][j - 1])) && schema[i - 1][j - 1] != '.') ||
                    (i > 0 && isNaN(Number(schema[i - 1][j])) && schema[i - 1][j] != '.') ||
                    (i > 0 && j < schema[i].length - 1 && isNaN(Number(schema[i - 1][j + 1])) && schema[i - 1][j + 1] != '.') ||
                    (j > 0 && isNaN(Number(schema[i][j - 1])) && schema[i][j - 1] != '.') ||
                    (j < schema[i].length - 1 && isNaN(Number(schema[i][j + 1])) && schema[i][j + 1] != '.') ||
                    (j > 0 && i < schema.length - 1 && isNaN(Number(schema[i + 1][j - 1])) && schema[i + 1][j - 1] != '.') ||
                    (i < schema.length - 1 && isNaN(Number(schema[i + 1][j])) && schema[i + 1][j] != '.') ||
                    (i < schema.length - 1 && j < schema[i].length - 1 && isNaN(Number(schema[i + 1][j + 1])) && schema[i + 1][j + 1] != '.')) {
                    let currentIndex = j + 1;
                    while (!isNaN(Number(schema[i][currentIndex]))) {
                        tempNum += schema[i][currentIndex];
                        currentIndex++;
                    }
                    j = currentIndex - 1;
                    result += Number(tempNum);
                    tempNum = "";
                }
            } else if (schema[i][j] === '.') {
                tempNum = "";
            }
        }
    }
    return result;
}
const computeD32 = async () => {
    let result = 0;
    let schema = [];
    const lines = textFile3.replace(/\r/g, '').split('\n');
    lines.map((line) => {
        schema.push([...line]);
    });
    for (let i = 0; i < schema.length; i++) {
        let tempNum = "";
        for (let j = 0; j < schema[i].length; j++) {
            if (!isNaN(Number(schema[i][j]))) {
                tempNum += schema[i][j];
                if ((i > 0 && j > 0 && isNaN(Number(schema[i - 1][j - 1])) && schema[i - 1][j - 1] === '*') ||
                    (i > 0 && isNaN(Number(schema[i - 1][j])) && schema[i - 1][j] === '*') ||
                    (i > 0 && j < schema[i].length - 1 && isNaN(Number(schema[i - 1][j + 1])) && schema[i - 1][j + 1] === '*') ||
                    (j > 0 && isNaN(Number(schema[i][j - 1])) && schema[i][j - 1] === '*') ||
                    (j < schema[i].length - 1 && isNaN(Number(schema[i][j + 1])) && schema[i][j + 1] === '*') ||
                    (j > 0 && i < schema.length - 1 && isNaN(Number(schema[i + 1][j - 1])) && schema[i + 1][j - 1] === '*') ||
                    (i < schema.length - 1 && isNaN(Number(schema[i + 1][j])) && schema[i + 1][j] === '*') ||
                    (i < schema.length - 1 && j < schema[i].length - 1 && isNaN(Number(schema[i + 1][j + 1])) && schema[i + 1][j + 1] === '*')) {
                    let currentIndex = j + 1;
                    while (!isNaN(Number(schema[i][currentIndex]))) {
                        tempNum += schema[i][currentIndex];
                        currentIndex++;
                    }
                    let currentValue = Number(tempNum);
                    tempNum = "";
                    if (j > 0 && i < schema.length - 1 && j < schema[i].length - 1 && isNaN(Number(schema[i + 1][j - 1])) && schema[i + 1][j - 1] === '*') {
                        let currentIndex = j - 2;
                        if (!isNaN(Number(schema[i + 1][currentIndex]))) {
                            while (currentIndex >= 0 && !isNaN(Number(schema[i + 1][currentIndex]))) {
                                currentIndex--;
                            }
                            currentIndex++;
                            while (currentIndex < schema[i + 1].length && !isNaN(Number(schema[i + 1][currentIndex]))) {
                                tempNum += schema[i + 1][currentIndex];
                                currentIndex++;
                            }
                            result += currentValue * Number(tempNum);
                            tempNum = "";
                        } else if (!isNaN(Number(schema[i + 1][j]))) {
                            currentIndex = j;
                            while (currentIndex < schema[i + 1].length && !isNaN(Number(schema[i + 1][currentIndex]))) {
                                tempNum += schema[i + 1][currentIndex];
                                currentIndex++;
                            }
                            result += currentValue * Number(tempNum);
                            tempNum = "";
                        } else if (!isNaN(Number(schema[i + 2][currentIndex]))) {
                            while (currentIndex >= 0 && !isNaN(Number(schema[i + 2][currentIndex]))) {
                                currentIndex--;
                            }
                            currentIndex++;
                            while (currentIndex < schema[i + 2].length && !isNaN(Number(schema[i + 2][currentIndex]))) {
                                tempNum += schema[i + 2][currentIndex];
                                currentIndex++;
                            }
                            result += currentValue * Number(tempNum);
                            tempNum = "";
                        } else if (!isNaN(Number(schema[i + 2][j - 1]))) {
                            currentIndex = j - 1;
                            while (currentIndex >= 0 && !isNaN(Number(schema[i + 2][currentIndex]))) {
                                currentIndex--;
                            }
                            currentIndex++;
                            while (currentIndex < schema[i + 2].length && !isNaN(Number(schema[i + 2][currentIndex]))) {
                                tempNum += schema[i + 2][currentIndex];
                                currentIndex++;
                            }
                            result += currentValue * Number(tempNum);
                            tempNum = "";
                        } else if (!isNaN(Number(schema[i + 2][j]))) {
                            currentIndex = j;
                            while (currentIndex >= 0 && !isNaN(Number(schema[i + 2][currentIndex]))) {
                                currentIndex--;
                            }
                            currentIndex++;
                            while (currentIndex >= 0 && !isNaN(Number(schema[i + 2][currentIndex]))) {
                                tempNum += schema[i + 2][currentIndex];
                                currentIndex++;
                            }
                            result += currentValue * Number(tempNum);
                            tempNum = "";
                        }
                    } else if (j > 0 && i < schema.length - 1 && isNaN(Number(schema[i + 1][j - 1])) && schema[i + 1][j] === '*') {
                        let currentIndex = j - 1;
                        if (!isNaN(Number(schema[i + 1][currentIndex]))) {
                            while (currentIndex >= 0 && !isNaN(Number(schema[i + 1][currentIndex]))) {
                                currentIndex--;
                            }
                            currentIndex++;
                            while (currentIndex < schema[i + 1].length && !isNaN(Number(schema[i + 1][currentIndex]))) {
                                tempNum += schema[i + 1][currentIndex];
                                currentIndex++;
                            }
                            result += currentValue * Number(tempNum);
                            tempNum = "";
                        } else if (!isNaN(Number(schema[i + 1][j + 1]))) {
                            currentIndex = j + 1;
                            while (currentIndex < schema[i + 1].length && !isNaN(Number(schema[i + 1][currentIndex]))) {
                                tempNum += schema[i + 1][currentIndex];
                                currentIndex++;
                            }
                            result += currentValue * Number(tempNum);
                            tempNum = "";
                        } else if (!isNaN(Number(schema[i + 2][currentIndex]))) {
                            while (currentIndex >= 0 && !isNaN(Number(schema[i + 2][currentIndex]))) {
                                currentIndex--;
                            }
                            currentIndex++;
                            while (currentIndex < schema[i + 2].length && !isNaN(Number(schema[i + 2][currentIndex]))) {
                                tempNum += schema[i + 2][currentIndex];
                                currentIndex++;
                            }
                            result += currentValue * Number(tempNum);
                            tempNum = "";
                        } else if (!isNaN(Number(schema[i + 2][j]))) {
                            currentIndex = j;
                            while (currentIndex >= 0 && !isNaN(Number(schema[i + 2][currentIndex]))) {
                                currentIndex--;
                            }
                            currentIndex++;
                            while (currentIndex < schema[i + 2].length && !isNaN(Number(schema[i + 2][currentIndex]))) {
                                tempNum += schema[i + 2][currentIndex];
                                currentIndex++;
                            }
                            result += currentValue * Number(tempNum);
                            tempNum = "";
                        } else if (!isNaN(Number(schema[i + 2][j + 1]))) {
                            currentIndex = j + 1;
                            while (currentIndex >= 0 && !isNaN(Number(schema[i + 2][currentIndex]))) {
                                currentIndex--;
                            }
                            currentIndex++;
                            while (currentIndex >= 0 && !isNaN(Number(schema[i + 2][currentIndex]))) {
                                tempNum += schema[i + 2][currentIndex];
                                currentIndex++;
                            }
                            result += currentValue * Number(tempNum);
                            tempNum = "";
                        } else if (j > 0 && isNaN(Number(schema[i + 1][j - 1])) && schema[i + 1][j - 1] === '*') {
                            let currentIndex = j - 2;
                            if (!isNaN(Number(schema[i + 1][currentIndex]))) {
                                while (currentIndex >= 0 && !isNaN(Number(schema[i + 1][currentIndex]))) {
                                    currentIndex--;
                                }
                                currentIndex++;
                                while (currentIndex < schema[i + 1].length && !isNaN(Number(schema[i + 1][currentIndex]))) {
                                    tempNum += schema[i + 1][currentIndex];
                                    currentIndex++;
                                }
                                result += currentValue * Number(tempNum);
                                tempNum = "";
                            } else if (!isNaN(Number(schema[i + 1][j]))) {
                                currentIndex = j;
                                while (currentIndex < schema[i + 1].length && !isNaN(Number(schema[i + 1][currentIndex]))) {
                                    tempNum += schema[i + 1][currentIndex];
                                    currentIndex++;
                                }
                                result += currentValue * Number(tempNum);
                                tempNum = "";
                            } else if (!isNaN(Number(schema[i + 2][currentIndex]))) {
                                while (currentIndex >= 0 && !isNaN(Number(schema[i + 2][currentIndex]))) {
                                    currentIndex--;
                                }
                                currentIndex++;
                                while (currentIndex < schema[i + 2].length && !isNaN(Number(schema[i + 2][currentIndex]))) {
                                    tempNum += schema[i + 2][currentIndex];
                                    currentIndex++;
                                }
                                result += currentValue * Number(tempNum);
                                tempNum = "";
                            } else if (!isNaN(Number(schema[i + 2][j - 1]))) {
                                currentIndex = j - 1;
                                while (currentIndex >= 0 && !isNaN(Number(schema[i + 2][currentIndex]))) {
                                    currentIndex--;
                                }
                                currentIndex++;
                                while (currentIndex < schema[i + 2].length && !isNaN(Number(schema[i + 2][currentIndex]))) {
                                    tempNum += schema[i + 2][currentIndex];
                                    currentIndex++;
                                }
                                result += currentValue * Number(tempNum);
                                tempNum = "";
                            } else if (!isNaN(Number(schema[i + 2][j]))) {
                                currentIndex = j;
                                while (currentIndex >= 0 && !isNaN(Number(schema[i + 2][currentIndex]))) {
                                    currentIndex--;
                                }
                                currentIndex++;
                                while (currentIndex >= 0 && !isNaN(Number(schema[i + 2][currentIndex]))) {
                                    tempNum += schema[i + 1][currentIndex];
                                    currentIndex++;
                                }
                                result += currentValue * Number(tempNum);
                                tempNum = "";
                            }
                        }
                    } else if (j < schema[i].length - 1 && i < schema.length - 1 && isNaN(Number(schema[i + 1][j + 1])) && schema[i + 1][j + 1] === '*') {
                        let currentIndex = j;
                        if (!isNaN(Number(schema[i + 1][currentIndex]))) {
                            while (currentIndex >= 0 && !isNaN(Number(schema[i + 1][currentIndex]))) {
                                currentIndex--;
                            }
                            currentIndex++;
                            while (currentIndex < schema[i + 1].length && !isNaN(Number(schema[i + 1][currentIndex]))) {
                                tempNum += schema[i + 1][currentIndex];
                                currentIndex++;
                            }
                            result += currentValue * Number(tempNum);
                            tempNum = "";
                        } else if (!isNaN(Number(schema[i + 1][j + 2]))) {
                            currentIndex = j + 2;
                            while (currentIndex < schema[i + 1].length && !isNaN(Number(schema[i + 1][currentIndex]))) {
                                tempNum += schema[i + 1][currentIndex];
                                currentIndex++;
                            }
                            result += currentValue * Number(tempNum);
                            tempNum = "";
                        } else if (!isNaN(Number(schema[i + 2][currentIndex]))) {
                            while (currentIndex >= 0 && !isNaN(Number(schema[i + 2][currentIndex]))) {
                                currentIndex--;
                            }
                            currentIndex++;
                            while (currentIndex < schema[i + 2].length && !isNaN(Number(schema[i + 2][currentIndex]))) {
                                tempNum += schema[i + 2][currentIndex];
                                currentIndex++;
                            }
                            result += currentValue * Number(tempNum);
                            tempNum = "";
                        } else if (!isNaN(Number(schema[i + 2][j + 1]))) {
                            currentIndex = j + 1;
                            while (currentIndex >= 0 && !isNaN(Number(schema[i + 2][currentIndex]))) {
                                currentIndex--;
                            }
                            currentIndex++;
                            while (currentIndex < schema[i + 2].length && !isNaN(Number(schema[i + 2][currentIndex]))) {
                                tempNum += schema[i + 2][currentIndex];
                                currentIndex++;
                            }
                            result += currentValue * Number(tempNum);
                            tempNum = "";
                        } else if (!isNaN(Number(schema[i + 2][j + 2]))) {
                            currentIndex = j + 2;
                            while (currentIndex >= 0 && !isNaN(Number(schema[i + 2][currentIndex]))) {
                                currentIndex--;
                            }
                            currentIndex++;
                            while (currentIndex >= 0 && !isNaN(Number(schema[i + 2][currentIndex]))) {
                                tempNum += schema[i + 2][currentIndex];
                                currentIndex++;
                            }
                            result += currentValue * Number(tempNum);
                            tempNum = "";
                        }
                    }
                    j = currentIndex - 1;
                }
            } else if (schema[i][j] === '*') {
                if (j > 0 && !isNaN(Number(schema[i][j - 1]))) {
                    let currentIndex = j - 1;
                    while (currentIndex > 0 && !isNaN(Number(schema[i][currentIndex]))) {
                        currentIndex--;
                    }
                    currentIndex++;
                    tempNum += schema[i][currentIndex];
                    while (currentIndex < schema[i].length && !isNaN(Number(schema[i][currentIndex]))) {
                        tempNum += schema[i][currentIndex];
                        currentIndex++;
                    }
                    let currentValue = Number(tempNum);
                    tempNum = "";
                    if (j > 0 && !isNaN(Number(schema[i][j + 1]))) {
                        currentIndex = j + 1;
                        tempNum += schema[i][currentIndex];
                        while (currentIndex < schema[i].length && !isNaN(Number(schema[i][currentIndex]))) {
                            tempNum += schema[i][currentIndex];
                            currentIndex++;
                        }
                        result += currentValue * Number(tempNum);
                        tempNum = "";
                    } else if (j > 0 && i < schema.length && !isNaN(Number(schema[i + 1][j - 1]))) {
                        currentIndex = j - 1;
                        tempNum += schema[i + 1][currentIndex];
                        while (currentIndex < schema[i].length && !isNaN(Number(schema[i + 1][currentIndex]))) {
                            tempNum += schema[i][currentIndex];
                            currentIndex++;
                        }
                        result += currentValue * Number(tempNum);
                        tempNum = "";

                    } else if (i < schema.length && !isNaN(Number(schema[i + 1][j]))) {
                        currentIndex = j;
                        tempNum += schema[i + 1][currentIndex];
                        while (currentIndex < schema[i].length && !isNaN(Number(schema[i + 1][currentIndex]))) {
                            tempNum += schema[i + 1][currentIndex];
                            currentIndex++;
                        }
                        result += currentValue * Number(tempNum);
                        tempNum = "";
                    } else if (j < schema[i].length && i < schema.length && !isNaN(Number(schema[i + 1][j + 1]))) {
                        currentIndex = j + 1;
                        tempNum += schema[i + 1][currentIndex];
                        while (currentIndex < schema[i + 1].length && !isNaN(Number(schema[i + 1][currentIndex]))) {
                            tempNum += schema[i + 1][currentIndex];
                            currentIndex++;
                        }
                        result += currentValue * Number(tempNum);
                        tempNum = "";
                    }
                    j = currentIndex;
                } else if (j > 0 && !isNaN(Number(schema[i][j + 1]))) {
                    let currentIndex = j + 1;
                    while (currentIndex > 0 && !isNaN(Number(schema[i][currentIndex]))) {
                        currentIndex--;
                    }
                    currentIndex++;
                    tempNum += schema[i][currentIndex];
                    while (currentIndex < schema[i].length && !isNaN(Number(schema[i][currentIndex]))) {
                        tempNum += schema[i][currentIndex];
                        currentIndex++;
                    }
                    let currentValue = Number(tempNum);
                    tempNum = "";
                    if (j > 0 && i < schema.length && !isNaN(Number(schema[i + 1][j]))) {
                        currentIndex = j;
                        tempNum += schema[i + 1][currentIndex];
                        while (currentIndex < schema[i].length && !isNaN(Number(schema[i + 1][currentIndex]))) {
                            tempNum += schema[i][currentIndex];
                            currentIndex++;
                        }
                        result += currentValue * Number(tempNum);
                        tempNum = "";

                    } else if (i < schema.length && !isNaN(Number(schema[i + 1][j + 1]))) {
                        currentIndex = j + 1;
                        tempNum += schema[i + 1][currentIndex];
                        while (currentIndex < schema[i].length && !isNaN(Number(schema[i + 1][currentIndex]))) {
                            tempNum += schema[i + 1][currentIndex];
                            currentIndex++;
                        }
                        result += currentValue * Number(tempNum);
                        tempNum = "";
                    }
                    j = currentIndex;
                }
            } else if (schema[i][j] === '.') {
                tempNum = "";
            }
        }
    }
    return result;
}

const populateTextD3 = async () => {
    const inputFile = document.getElementById("iD3FInputFile");
    textFile3 = await inputFile.files[0].text();
}

const runD3 = async () => {
    resultD31 = await computeD31();
    resultD32 = await computeD32();
    const day31Input = document.getElementById("iD31");
    const day32Input = document.getElementById("iD32");
    day31Input.setAttribute('value', resultD31);
    day32Input.setAttribute('value', resultD32);
}