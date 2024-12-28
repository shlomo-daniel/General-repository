// --- DATA scripts --- \\

import { allCases } from "./allCases.js"


// create class for making new case
class Case {
    static id = 10;
    id;
    caseName;
    opendDate;
    caseStatus;
    content;
    constructor(caseName, opendDate, caseStatus, content) {
        this.id = Case.id++;
        this.caseName = caseName;
        this.opendDate = opendDate;
        this.caseStatus = caseStatus;
        this.content = content;
    }
    addCase(newCase) {
        allCases = [...allCases, newCase];
        return newCase;
    }
}


// GLOBAL VARS
let lastRemoved;


// --- data functions --- \\
function addCase(newCase) {
    allCases = [...allCases, newCase];
    return newCase;
}
function removeCase(caseId) {
    lastRemoved = allCases.find(caseObj => caseObj.id === caseId);
    allCases = allCases.filter(caseObj => caseObj.id !== caseId);
}
// case id for finding case and num 1 || 2 to get file name or file itself
function readContent(caseId, num) {
    const getCase = allCases.find(caseObj => caseId === caseObj.id);
    return getCase.content[num].file;
}

function modifyCase() { }

// im here!!!
function findCase(id, caseName) {
    const foundCase = allCases.find(obj => obj.id === id || obj.caseName === caseName)
}

//  --- INTERFACE CODE --- \\


// export { addCase, removeCase, readContent, modifyCase, findCase, allCases }