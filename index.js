var events = require('dom-events')
var EventEmitter = require('events').EventEmitter
var inherits = require('inherits')

function Select(opt) {
	if (!(this instanceof Select))
		return new Select(opt)
	EventEmitter.call(this)
	opt = opt||{}
	if (Array.isArray(opt))
		opt = { data: opt }
	this.element = opt.element || document.createElement("select")
	this.data = []
	events.on(this.element, 'change', this.emit.bind(this, 'change'))
	
	if (opt.data) 
		this.set(opt.data)
}

inherits(Select, EventEmitter)

Select.prototype.select = function(value) {
	this.data.forEach(function(f) {
		if (f.value === value)
			f.element.setAttribute('selected', 'selected')
		else
			f.element.removeAttribute('selected')
	})
	return this;
}

Select.prototype.selected = function() {
	return this.data[this.element.selectedIndex].value
}

Select.prototype.selectedIndex = function() {
	return this.element.selectedIndex
}

Select.prototype.clear = function() {
	this.data.length = 0
	while (this.element.firstChild) 
	    this.element.removeChild(this.element.firstChild);	
	return this;
}

Select.prototype.set = function(data) {
	this.clear()
	this.add(data);
	return this;
}

Select.prototype.add = function(data) {
	this.data.length = 0
	if (!Array.isArray(data) && typeof data === 'string')
		data = [data]
	if(!(data instanceof Array)) {
		var tmpdata = [];
		for(var key in data){
			if(!data.hasOwnProperty(key)) continue;
			tmpdata.push({
				name: data[key],
				value: key
			})
		}
		data = tmpdata;
	}
	data.forEach(function(f) {
		var opt = document.createElement('option');
		var settings = f
		if (typeof f === 'string')  {
			settings = {}
			settings.name = f
			settings.value = f
		} else {
			if (!settings.value && settings.name)
				settings.value = settings.name 
			else if (!settings.name && settings.value)
				settings.name = settings.value
		}
		
		opt.setAttribute('value', settings.value)
		if (settings.disabled)
			opt.setAttribute('disabled', 'disabled')
		if (settings.selected)
			opt.setAttribute('selected', 'selected')

		opt.innerHTML = settings.name

		settings.element = opt
		this.data.push(settings)
	    this.element.appendChild(opt);	
	}.bind(this))
	return this;
} 

module.exports = Select
