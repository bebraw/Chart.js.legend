function legend(parent, data) {
    parent.className = 'legend';

    data.datasets.forEach(function(d) {
        var container = document.createElement('div');
        container.className = 'container';
        parent.appendChild(container);

        var color = document.createElement('div');
        color.className = 'color';
        color.style.backgroundColor = d.strokeColor;
        container.appendChild(color);

        var title = document.createElement('div');
        title.className = 'title';
        container.appendChild(title);

        var text = document.createTextNode(d.title);
        title.appendChild(text);
    });
}
