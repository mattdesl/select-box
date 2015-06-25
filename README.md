# select-box

[![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

![img](http://i.imgur.com/7YBi58U.jpg)

A minimal DOM `<select>` utility. Pull requests / suggestions welcome.

```js
//create a select box
var box = require('select-box')(['Monday', 'Tuesday', 'Wednesday'])

//select an item programmatically
box.select('Tuesday')

box.on('change', function(ev) {
	//get name of selected item
	console.log(box.selected())
})

//have it displayed on page
document.body.appendChild(box.element)
```

## Usage

[![NPM](https://nodei.co/npm/select-box.png)](https://nodei.co/npm/select-box/)

See [demo](demo/) for a complete example.

#### `box = SelectBox([items])`

Creates a new select box with the optional items to add.

`items` can be a string, or an array of strings.

Or, it can be a key-value pair like so:

```js
var box = SelectBox({
    hello: 'Hello!',
    goodbye: 'Goodbye!'
});
```

Now logging `console.log(box.element.outerHTML)` results in:

```html
<select>
    <option value="hello">Hello!</option>
    <option value="goodbye">Goodbye!</option>
</select>
```

#### `box.element`

The DOM element for this `<select>` box.

#### `box.add(items)`

Adds a single item or an array of items to this select box. An "item" is just a string (which indicates value and name), or an object:

```js
{
	name: 'Tuesday',
	value: 'tuesday', 
	disabled: false
}
```

Returns `this` for chaining.

#### `box.clear()`

Clears the data in the box. Returns `this` for chaining.

#### `box.set(data)`

Clears the current data in the box and adds the specified data. Returns `this` for chaining.

#### `box.selected()`

Gets the selected `value` for this combo box. 

#### `box.selectedIndex()`

Same as `selected()`, but returns the index of the entry in the `data` list.

#### `box.select(value)`

Selects the item by `value` in this combo box, if it exists. 

Returns `this` for chaining.

#### `box.data`

The internal data which was passed to `add`, `set` or a constructor. This should not be modified externally, although it could be used to retrieve values and names of each entry. 

#### `box.on('change')`

Receives the `onchange` DOM event.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/select-box/blob/master/LICENSE.md) for details.
