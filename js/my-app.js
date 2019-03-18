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
		path: '/tabs/',
    	url: 'tabs.html',
    	name: 'tabs',
		},{
		path: '/cruce/',
    	url: 'cruce.html',
    	name: 'cruce',	
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




 

