var React = require('react');
var ReactDOM = require("react-dom");
var backbone= require('backbone');
require("main.css"); 
// var LikeButton = require("../js/button.jsx");


var Router=Backbone.Router.extend({
	initialize:function() {
		Backbone.history.start({pushState:true});
	},
	routes:{
		'user/:username': 'user',
		'guest/':'guest',
		"":"index"
	},
	index: function(){
		ReactDOM.render(<LoginRegister router={this} />, document.getElementById('loginRegister'));
		ReactDOM.render(<RegisterForm/>,document.getElementById('registerForm'));
	}
});


var router = new Router();

router.on('route:user', function(username) {
	$("#loginRegister").hide();
	$("#guestView").show();
	ReactDOM.render(<Nav />, document.getElementById('nav'));
			
	var UserList = Backbone.Model.extend({
		initialize:function() {
			console.log("here is your data");
		}
		
	})
	var UserListCollect = Backbone.Collection.extend({
		url:"https://afternoon-scrubland-9189.herokuapp.com/api/lists/?username=" + username,
	})

	var userList = new UserList();
	userList.fetch({
		url:"https://afternoon-scrubland-9189.herokuapp.com/api/lists/?username=" + username,
		success:function(resp){
			var test=resp.toJSON();
			console.log(test.results[0].title);
			var mapped=test.results[0].item_set.map(function(obj){
				return {

					'image':obj.image,
					'name':obj.name,
					'price':obj.price,
					'image':obj.image,
					'description':obj.description,
					'item_link':obj.item_link
					
				}

			})
		
		ReactDOM.render(<ListView data={mapped}/>,document.getElementById('listView'));
		ReactDOM.render(<ListItem/>, document.getElementById('listItem'));

	
		}

	});

});	
