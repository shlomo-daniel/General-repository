// --- DATA --- \\

// TS case interface
interface CaseObj {
    caseName: string,
    id: number,
    opendDate: string,
    caseStatus: string,
    content: Array<{
        fileName: string,
        file: string,
    }>
}




// create class for making new case
class Case {
    static id: number = 10;
    id: number
    caseName: string
    opendDate: string
    caseStatus: string
    content: [];

    constructor(caseName: string, opendDate: string, caseStatus: string, content: []) {
        this.id = Case.id++;
        this.caseName = caseName;
        this.opendDate = opendDate;
        this.caseStatus = caseStatus;
        this.content = content;

    }

    addCase(newCase: CaseObj) {
        allCases = [...allCases, newCase];
        return newCase;
    }
}

// example for cases
let allCases = [
    {
        caseName: 'dana',
        id: 1,
        opendDate: '2012-05-23',
        caseStatus: 'just opend',
        content: [
            {
                fileName: 'main file',
                file: 'word.xdoc'
            },
            {
                fileName: 'evidence file',
                file: 'pics and text.pdf'
            },
        ],
    },
    {
        caseName: 'mosh',
        id: 2,
        opendDate: '2012-05-23',
        caseStatus: 'just opend',
        content: [
            {
                fileName: 'main file',
                file: 'word.xdoc'
            },
            {
                fileName: 'evidence file',
                file: 'pics and text.pdf'
            },
        ],
    },
    {
        caseName: 'fiona',
        id: 3,
        opendDate: '2012-05-23',
        caseStatus: 'just opend',
        content: [
            {
                fileName: 'main file',
                file: 'word.xdoc'
            },
            {
                fileName: 'evidence file',
                file: 'pics and text.pdf'
            },
        ],
    },
];

let lastRemoved;



// --- data functions --- \\
function addCase(newCase: CaseObj) {
    allCases = [...allCases, newCase];
    return newCase;
}

function removeCase(caseId: number) {
    lastRemoved = allCases.find(caseObj => caseObj.id === caseId);
    allCases = allCases.filter(caseObj => caseObj.id !== caseId);
}

// case id for finding case and num 1 || 2 to get file name or file itself
function readContent(caseId: number, num: number) {
    const getCase = allCases.find(caseObj => caseId === caseObj.id);
    return getCase.content[num].file;
}
// im hrer!!!
function modifyCase() { }

function findCase() { }

//  --- INTERFACE CODE --- \\

