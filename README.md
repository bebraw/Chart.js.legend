# Chart.js.legend

An implementation of legend widget for [Chart.js](https://github.com/nnnick/Chart.js).

Simply `legend(parent, data)`. See `demo.js` for a full example.

If you need to support older browsers (IE8 and such), use `src/legend.legacy.js`. Otherwise you can stick with `src/legend.js`.

## Quick example

```html
<div id="placeholder"></div>
```

```js
var data = ...;  // refers to the charts data
legend(document.getElementById('placeholder'), data);
```

## Contributors

* [Laurent Goussard](https://github.com/loranger) - Simplified markup, support for pie etc.
* [yousifucv](https://github.com/yousifucv) - Make CSS border work properly
* [KuenzelIT](https://github.com/KuenzelIT) - Update to support new Chart.js syntax and add example
* [Antonin Bourguignon](https://github.com/abourguignon) - Make it easier to customize legend color samples
* [Xu Ding](https://github.com/duskast) - IE8 and lower compatible version (`legend.legacy.js`)
* [Alex Belloni](https://github.com/alexbelloni) - If a chart has tooltips, show legends there
* [TLevasseur](https://github.com/TLevasseur) - Allow legends to be templated. Handy for formatting.

## License

MIT.
