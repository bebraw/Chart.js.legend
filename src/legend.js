function legend(parent, data) {
    parent.className = 'legend';

    data.datasets.forEach(function(d) {
        var title = document.createElement('span');
        title.className = 'title';
        title.style.borderColor = d.strokeColor;
        parent.appendChild(title);

        var text = document.createTextNode(d.title);
        title.appendChild(text);
    });
}
