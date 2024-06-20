// --- data --- \\
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
        caseName: 'dana',
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
        caseName: 'dana',
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
function addCase(newCase = {}) {
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

function findCase() { }