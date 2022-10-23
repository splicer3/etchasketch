// This function creates ONE column for each call.
function createColumn() {
    let row = document.createElement('div');
    row.className += ' row'
    row.id = 'row'
    return document.getElementById('sketchpad').append(row);
}

function createDivs() {
    let div = document.createElement('div');
    div.className += ' pixels';
    div.id = 'pixel';
    return document.querySelector('#row').appendChild(div);
}

// This one gets the current slider value.
function getValue() {
    let val = document.querySelector("#myRange");
    if (val.value != null)
    return (val.value);
    else
    return (16);
}

// This one generates as much divs as specified by the slider value.
function sketchGen() {
    document.getElementById('sketchpad').replaceChildren();
    let pixel = getValue();
    for (let i = 0; i < pixel; i++) {
        createColumn ();
        for (let j = 0; j < pixel; j++) {
            createDivs();
        }
        document.getElementById('row').id = 'rowed';
    }
}
$(".pixels").on("click", function () {
    $(".pixels").addClass('clickedPixels');
});

