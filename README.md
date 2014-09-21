[![browser support](https://ci.testling.com/mattdesl/select-box.png)](https://ci.testling.com/mattdesl/select-box)

# select-box

[![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

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

#### `box.add(items)`

Adds a single item or an array of items to this select box. An "item" is just a string (which indicates value and name), or an object:

```js
{
	name: 'Tuesday',
	value: 'tuesday', 
	disabled: false
}
```

#### `box.clear()`

Clears the data in the box.

#### `box.set(data)`

Clears the current data in the box and adds the specified data.

#### `box.selected()`

Gets the selected `value` for this combo box. 

#### `box.selectedIndex()`

Same as `selected()`, but returns the index of the entry in the `data` list.

#### `box.select(value)`

Selects the item by `value` in this combo box, if it exists. 

#### `box.data`

The internal data which was passed to `add`, `set` or a constructor. This should not be modified externally, although it could be used to retrieve values and names of each entry. 

#### `box.on('change')`

Receives the `onchange` DOM event. 

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/select-box/blob/master/LICENSE.md) for details.
