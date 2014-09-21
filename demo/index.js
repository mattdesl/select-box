var SelectBox = require('../')
var eases = require('eases')

function getData() {
	//get some data
	var names = Object.keys(eases)
	names = names.filter(function(e) {
		return 'linear'
	})
	//a little separator, not selectable
	names.unshift({ disabled: true, name: '—' })
	names.unshift('linear')
	return names
}

require('domready')(function() {
	var names = getData()

	var box = SelectBox(names)
	box.select('backOut')
	box.on('change', function(ev) {
		console.log("Changed to", box.selected())
	})

	document.body.appendChild(box.element)
})