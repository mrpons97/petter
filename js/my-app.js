// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/zeus/',
    	url: 'zeus.html',
    	name: 'zeus',
  		},
		{
		path: '/busca/',
    	url: 'busca.html',
    	name: 'busca',
  		},
		{
		path: '/micho/',
    	url: 'micho.html',
    	name: 'micho',
		},{
		path: '/cruce/',
    	url: 'cruce.html',
    	name: 'cruce',	
		},{
		path: '/login-screen/',
    	url: 'login-screen.html',
    	name: 'login-screen',	
		}	
		
		
	]
});

// Export selectors engine
var $$ = Dom7;

var notificationWelcome = myApp.notification.create({
  icon: '<i class="material-icons">info</i>',
  title: '¡Bienvenido a Petter!',
  subtitle: '',
  text: '',
  closeButton: true,
	closeTimeout: 3000,
});
$$('.open-welcome').on('click', function () {
  notificationWelcome.open();
});
$$(window).on('load', function () {
  notificationWelcome.open();
});

var app = new Framework7({
  routes: [{
    path: '/login-screen/',
    /*
    We can load it from url like:
    url: 'login-screen.html'
    But in this example we load it just from content string
    */
    content: '\
      <div class="page no-navbar no-toolbar no-swipeback">\
        <div class="page-content login-screen-content">\
          <div class="login-screen-title">My App</div>\
          <form>\
            <div class="list">\
              <ul>
              <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label">Username</div>
                  <div class="item-input-wrap">
                    <input type="text" name="username" placeholder="Username">
                    <span class="input-clear-button"></span>
                  </div>
                </div>
              </li>
              <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label">Password</div>
                  <div class="item-input-wrap">
                    <input type="password" name="password" placeholder="Password">
                    <span class="input-clear-button"></span>
                  </div>
                </div>
              </li>
            </ul>
            </div>\
            <div class="list">\
              <ul>\
                <li><a href="#" class="item-link list-button">Sign In</a></li>\
              </ul>\
              <div class="block-footer">\
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\
                <p><a href="/index/" class="link back">Close Login Screen</a></p>\
              </div>\
            </div>\
          </form>\
        </div>\
      </div>'
    }]
});

// Login Screen-Modal DOM events
$$('.login-screen').on('loginscreen:open', function (e, loginScreen) {
  console.log('Login screen open')
});
$$('.login-screen').on('loginscreen:opened', function (e, loginScreen) {
  console.log('Login screen opened')
});
$$('.login-screen').on('loginscreen:close', function (e, loginScreen) {
  console.log('Login screen close')
});
$$('.login-screen').on('loginscreen:closed', function (e, loginScreen) {
  console.log('Login screen closed')
});




 

