// reference our namespace
var TodoApp = window.TodoApp || {};

// lets make a view
TodoApp.TodoView = Backbone.View.extend({
	//this will contain all markup generate bu this view in an <li>
	tagName: 'li',
	// this class will be apply every to the containing <li>
	className :'todo',
	//the above will makea container like <li class="todo"></li>

	// pre-compile the template
	template:_.template($('#todo-template').html()),
	events:{
		'click .delete': 'delete_todo',
		'click .complete': 'complete_todo'
	},
	delete_todo: function(e){
		e.preventDefault();
		this.model.destroy();
		this.$el.slideUp('fast', function(){
			this.remove();
		});
	},

	complete_todo:function(e){
		e.preventDefault();
		this.$el.slideUp('fast', function(){
			this.remove();
		});
	},

	render: function(){
		//store the render html
		var new_html = this.template(this.model.toJSON());

		console.log(new_html);

		//append the new html to the container element
		this.$el.html(new_html);

		// see if this.model is important
		if(this.model.get('important')){
			this.$el.addClass('important');
		}
		return this;
	}
});