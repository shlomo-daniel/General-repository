//--- global vars for page ---\\
const mainOutput = document.getElementById("page") // element: the output page
const elementsTab = document.querySelector('#elements select') // "elements" input

//--- general design tab settings ---\\
const generalValues = {
    bgc: '',
    padding: '',
    fontStyle: '',
    fontWeight: '',
    italic: '',
}

let copy = generalValues;

function bgcPage(bgcInputElem) {
    let bgcSave = mainOutput.style.background = bgcInputElem.value;
    generalSettingsSave(bgcSave);
    generalValues.bgc = bgcSave;
    savePage()
    console.log(generalValues)
}

// padding main Page
function paddingChange(paddingInput) {
    let paddingSave = mainOutput.style.padding = paddingInput.value + "px";
    generalSettingsSave(paddingSave);
    generalValues.padding = paddingSave;
    savePage()
}
function fontStyle(fontStyleElem) {
    let fontStyleSave = mainOutput.style.fontFamily = fontStyleElem.value;
    generalSettingsSave(fontStyleSave);
    generalValues.fontStyle = fontStyleSave;
    savePage()
}

function fontWeight(fontWeightElem) {
    let fontWeightSave = mainOutput.style.fontWeight = fontWeightElem.value;
    generalSettingsSave(fontWeightSave);
    generalValues.fontWeight = fontWeightSave;
    savePage()
}
function isFontItalic(isItalicElem) {
    let isFontItalicSave = mainOutput.style.fontStyle = isItalicElem.value;
    generalSettingsSave(isFontItalicSave);
    generalValues.italic = isFontItalicSave;
    savePage()
}
//end.

//--- change tabs sections ---\\
function pageToShow(elemString, theElem) {
    // use css class to show the clicked tab
    document.querySelector("nav a.active").classList.remove('active');
    theElem.classList.add('active');
    // displaying the fitting settings inputs by forwardindg an id then add class to show it
    document.querySelector('#panelSide>div.show').classList.remove('show');
    document.getElementById(elemString).classList.add('show');
}
//end.

//--- system of showing the relevant params of chosen elem ---\\

// each element and its params to show
const paramsobjects = {
    title: ["headerType", "fontSize", "color", "content", "textAlign"],
    p: ["fontSize", "color", "content", "textAlign"],
    input: ["inputType", "fontSize", "color"],
    button: ["fontSize", "color", "content",],
    img: ["imageLink", "size", "align"],
    hr: [],
}

// show relevant params
function selecTypeElem(selectorElem) {

    //get DOM input of element type
    selectedElemAdd = selectorElem.value;

    // get the elem selected object
    selecInObj = paramsobjects[selectedElemAdd];

    const allInputs = document.querySelectorAll('#params>div');

    // remove "show" class to hide all elems of input
    for (const divItem of allInputs) {
        divItem.classList.remove('show');
    }

    // show elems with id that fits object from array
    for (const oneParam of selecInObj) {
        document.getElementById(oneParam).classList.add('show')
    }
}
// explain:
// 1. get the element of selection.
// 2. use its value as obj name of relevant value.
// 3. takes all dom divs under params remove class, to hide.
// 4. add class to show the relevant params of the obj selected, the obj is the elem to add in page.

// end.

function addToPage() {
    // creating elem
    let createdElem = document.createElement(elementsTab.value);
    giveCssValues(createdElem);

    if (elementsTab.value === "title") {
        const headerHs = document.querySelector('#headerType select').value; // heading value
        createdElem = document.createElement(headerHs);
        giveCssValues(createdElem);

    } else if (elementsTab.value === "button") {
        giveCssValues(createdElem);
        createdElem.style.textAlign = 'center';
    } else if (elementsTab.value === "img") {
        createdElem.setAttribute('src', " ");
        giveCssValues(createdElem);
    }
    // put element on page
    mainOutput.appendChild(createdElem);
    savePage()
}

// input elements 
const headerHs = document.querySelector('#headerType select')
const fontSizeInput = document.querySelector('#fontSize input');
const colorInput = document.querySelector('#color input');
const contentInput = document.querySelector('#content input');
const inputType = document.querySelector('#inputType select');
const alignInput = document.querySelector('#textAlign select');
const imageLinkInput = document.querySelector('#imageLink input');
const imageSizeInput = document.querySelector('#size input');
const imageAlignInput = document.querySelector('#align select');

function giveCssValues(createdElem) {

    // use of values --
    createdElem.innerHTML = contentInput.value;
    createdElem.style.fontSize = `${fontSizeInput.value}px`;
    createdElem.style.color = colorInput.value;
    createdElem.type = inputType.value;
    createdElem.style.textAlign = alignInput.value;
    createdElem.setAttribute("src", imageLinkInput.value);
    createdElem.style.width = `${imageSizeInput.value}px`;
    createdElem.style.height = `${imageSizeInput.value}px`;
    createdElem.style.margin = imageAlignInput.value;

}

// reset inputs to prevent worng values 
function resetInputs() {
    // clear all inputs
    headerHs.value = "";
    contentInput.value = "";
    fontSizeInput.value = "";
    colorInput.value = "#000000";
    inputType.value = "";
    alignInput.value = "";
    document.querySelector('#imageLink input').value = "";
    imageSizeInput.value = "";
    imageSizeInput.value = "";
    imageAlignInput.value = "";
}
// end.

//--- local storage ---\\
function generalSettingsSave(bgcSave, paddingSave, fontStyleSave, fontWeightSave, isFontItalicSave) {

    localStorage.bgcSaved = bgcSave;
    localStorage.paddingSaved = paddingSave;
    localStorage.fontStyleSaved = fontStyleSave;
    localStorage.fontWeightSaved = fontWeightSave;
    localStorage.isFontItalicSaved = isFontItalicSave;

    console.log(bgcSave)

}

function savePage() {
    const currentPage = mainOutput.innerHTML;
    localStorage.currentPageData = currentPage;
    localStorage.generalObj = JSON.stringify(generalValues);
    console.log(localStorage.generalObj)
}

function loadPage() {
    mainOutput.innerHTML = localStorage.currentPageData;
    let localstorageObjSaves = JSON.parse(localStorage.generalObj)
    console.table(localstorageObjSaves);

    mainOutput.style.background = localstorageObjSaves.bgc;
    mainOutput.style.padding = localstorageObjSaves.padding + "px";
    mainOutput.style.fontFamily = localstorageObjSaves.fontStyle;
    mainOutput.style.fontWeight = localstorageObjSaves.fontWeight;
    mainOutput.style.fontStyle = localstorageObjSaves.italic;

}
// end.

// print function
function printPage() {
    print();
}

// ***Progress log:***
//-fix image inputs not resetting ? Fixed!
//- make sure all font weight working ? Fixed
//- is font italic ? Fixed
//- save to local storage, load, and save fixed
//- localstorage to save general settings ?
// save general settings to local storage and load them?
