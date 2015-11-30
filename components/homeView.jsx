var React = require('react');
var ReactDOM = require("react-dom");
var backbone= require('backbone');
var Parse = require('parse');
var ParseReact = require('parse-react');
require("../main.css"); 

Parse.initialize("QzUpMLVJPUY5MqYOUKW5Hi4IH1Kl3VEcbvOUM9e3", "9NOA3Cg44xPNbHwErIUgtHHUvCt49EsU0d8ibHau");

var ToDoItems = React.createClass({  //allows queries to be subscribed to
	mixins: [ParseReact.Mixin],
	observe: function () {   //subscribes the app to all todos, ordered by status
		return {
			todos: (new Parse.Query("item")).ascending("status")
		};
	},
	render: function () {  //renders the text of each to do into a list
		return (
			<ul>
				{this.data.item.map(function(i) {
					return <li>{i.text}</li>;
				})}
			</ul>
		);
	}
});








// var Router=Backbone.Router.extend({
// 	initialize:function() {
// 		Backbone.history.start({pushState:true});
// 	},
// 	routes:{
// 		"":"index"
// 	},
// 	index: function(){
// 		ReactDOM.render(<HomeView router={this} />, document.getElementById('homePageView'));
// 	}
// });


// var router = new Router();

// router.on('route:index', function() {
// 	$("#homePageView").hide();
// 	$("#updateView").show();
// 	ReactDOM.render(<Nav />, document.getElementById('nav'));
			
// 	var UserList = Backbone.Model.extend({
// 		initialize:function() {
// 			console.log("here is your data");
// 		}
		
// 	})
// 	var toDoItems = Backbone.Collection.extend({
// 		url:"https://afternoon-scrubland-9189.herokuapp.com/api/lists/?username=" + username,
// 	})

// 	var userList = new UserList();
// 	userList.fetch({
// 		url:"https://afternoon-scrubland-9189.herokuapp.com/api/lists/?username=" + username,
// 		success:function(resp){
// 			var test=resp.toJSON();
// 			console.log(test.results[0].title);
// 			var mapped=test.results[0].item_set.map(function(obj){
// 				return {

// 					'image':obj.image,
// 					'name':obj.name,
// 					'price':obj.price,
// 					'image':obj.image,
// 					'description':obj.description,
// 					'item_link':obj.item_link
					
// 				}

// 			})
		
// 		ReactDOM.render(<ListView data={mapped}/>,document.getElementById('listView'));
// 		ReactDOM.render(<ListItem/>, document.getElementById('listItem'));

	
// 		}

// 	});

// });	
