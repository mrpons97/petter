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
		path: '/accordions/',
    	url: 'accordions.html',
    	name: 'accordions',	
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




 

