(function(){
function Xys(){
	var html = document.querySelector('html');
	var userAgent = navigator.userAgent;
	
	// console.log(userAgent)
	html.className = '';
	if(userAgent.indexOf("iPhone")!=-1){
		html.classList.add('iphone')
	}else if(userAgent.indexOf('Android')!=-1){
		html.classList.add('android')
	}else if(userAgent.indexOf('iPad')!=-1){
		html.classList.add('ipad')
	}else{
		html.classList.add('pc')
	}
	
	if(window.innerWidth<640){
		html.classList.add('lt640')
		html.classList.add('lt960')
		html.classList.add('lt1200')
	}else if(window.innerWidth<960){
		html.classList.add('lt960')
		html.classList.add('lt1200')
		html.classList.add('gt640')
	}else if(window.innerWidth<1200){
		html.classList.add('lt1200')
		html.classList.add('gt640')
		html.classList.add('gt960')
	}else{
		html.classList.add('gt640')
		html.classList.add('gt960')
		html.classList.add('gt1200')
	}
	
	// rem布局
	var screenWidth = window.innerWidth;
	//console.log(screenWidth)
	var danwei = screenWidth / 3.75;
	var html = document.querySelector('html');
	var body = document.querySelector('body');

	// body.style.height = 100 +"vh";
	
	html.style.fontSize = danwei + "px";
}	
	Xys();
	window.onresize= function(){
		Xys();
	}	
})()