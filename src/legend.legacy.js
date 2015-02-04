function legend(parent, orig_data) {
    parent.className = 'legend';
    var data = orig_data.hasOwnProperty('datasets') ? orig_data.datasets : orig_data;

    while(parent.hasChildNodes()) {
        parent.removeChild(parent.lastChild);
    }

    for (var i in data) {
        d = data[i];
        var title = document.createElement('span');
        title.className = 'title';
        parent.appendChild(title);

        var colorSample = document.createElement('div');
        colorSample.className = 'color-sample';
        colorSample.style.backgroundColor = colorToHex(d.hasOwnProperty('strokeColor') ? d.strokeColor : d.color);
        colorSample.style.borderColor = colorToHex(d.hasOwnProperty('fillColor') ? d.fillColor : d.color);
        title.appendChild(colorSample);

        var text = document.createTextNode(d.label);
        title.appendChild(text);
    }
}

function componentToHex(c) {
    var hex = Number(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function colorToHex(color) {
    var matchElements = color.match(/^rgba\((\d+),(\d+),(\d+)/);
    if (matchElements)
        return rgbToHex(matchElements[1], matchElements[2], matchElements[3]);
    else
        return color;
}