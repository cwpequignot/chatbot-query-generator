// Here are the five different question structure segments //

var fiveWs = ['Who', 'What', 'How', 'When', 'Where', 'Why', '[Null]'];
var queryVerbs = ['can', 'do', 'will', 'could', 'should', 'would', 'have','had'];
var subjects = ['i','you','he','she','they'];
var actionVerbs = ['think', 'feel', 'have', 'had', 'try','buy','eat','explore','ask','say','know','get','give','tell','do'];
var objects = ['[x]'];

/**
 * Generates query from the pick variables
 * @returns {string} query
 */
function generateQuery() {

    var pickFiveWs = fiveWs[Math.floor(Math.random()*fiveWs.length)];
    var pickQueryVerbs = queryVerbs[Math.floor(Math.random()*queryVerbs.length)];
    var pickSubjects = subjects[Math.floor(Math.random()*subjects.length)];
    var pickActionVerbs = actionVerbs[Math.floor(Math.random()*actionVerbs.length)];
    var pickObjects = objects[Math.floor(Math.random()*objects.length)];

    return pickFiveWs + " " + pickQueryVerbs + " " + pickSubjects + " " + pickActionVerbs + " " + pickObjects + "?";
};

/**
 * Adds paragraph text in the html
 * @returns {string}
 */
function addQueryLine(text) {
    var para = document.createElement("p");
    var newQuery = document.createTextNode(text);
    para.appendChild(newQuery);
    document.body.appendChild(para);
};

/**
 * Prints query to the DOM
 */
function printQuery() {
    addQueryLine(generateQuery());
};