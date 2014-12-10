function legend(parent, data) {
    parent.className = 'legend';
    var datas = data.hasOwnProperty('datasets') ? data.datasets : data;

    // remove possible children of the parent
    while(parent.hasChildNodes()) {
        parent.removeChild(parent.lastChild);
    }

    datas.forEach(function(d) {
        var title = document.createElement('span');
        title.className = 'title';
        parent.appendChild(title);

        var chip = document.createElement('div');
        chip.className = 'chip';
        chip.style.backgroundColor = d.hasOwnProperty('strokeColor') ? d.strokeColor : d.color;
        chip.style.borderColor = d.hasOwnProperty('fillColor') ? d.fillColor : d.color;
        title.appendChild(chip);

        var text = document.createTextNode(d.label);
        title.appendChild(text);
    });
}
