// reference our namespace
var TodoApp = window.TodoApp || {};

// creaete a todo model
TodoApp.TodoModel = Backbone.Model.extend({
	defaults: {
		title: 'Do something',
		notes: '',
		important: false,
		due: false
	}
});