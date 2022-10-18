// This function creates ONE div for each call.
function createDiv() {
    let div = document.createElement('div');
    div.style.width = '30px'
    div.style.height = '30px'
    div.style.backgroundColor = "blue"
    return document.getElementById('sketchpad').append(div);      
}

// This one gets the current slider value.
function getValue() {
    let val = document.querySelector("#myRange");
    if (val.value != null)
    return (val.value*val.value);
    else
    return (16*16);
}

// This one generates as much divs as specified by the slider value.
function sketchGen() {
    document.getElementById('sketchpad').replaceChildren();
    let pixel = getValue();
    for (let i = 0; i < pixel; i++) {
        createDiv ();
    }
}

