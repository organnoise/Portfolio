$( document ).ready(function() {
	
	console.log(is_safari);
	
	var hash = location.hash;
	
	if (hash != '' && !is_safari) $('#main').load('sections.html ' + hash + '_');
	else if (hash != '' && hash != '#see' && is_safari) $('#main').load('sections.html ' + hash + '_');
	else if (hash == '#') $('#main').load('sections.html ' + '#home' + '_');
	else if (hash == '#see' && is_safari) $('#main').load('sections.html ' + '#seeSafari_');
	else $('#main').load('sections.html ' + '#home' + '_');

	

	$(window).bind( 'hashchange', function(e) {
		var hash = location.hash;
		//FadeOut contentFader container
		//if(hash == '#see' && is_safari)console.log(hash);
		
		$('html, body').animate({ scrollTop: 0 }, 'slow');
		$('#contentFader').fadeOut('slow', function(){
			//load flexbox see page because user isn't on safari
			if (hash != '' && !is_safari) $('#main').load('sections.html ' + hash + '_', function(){ 
			    $('html, body').animate({ scrollTop: 0 }, 'slow', function(){
			    	$('#contentFader').fadeIn('slow', 'swing');
			    });	
			});
			else if (hash == '#') $('#main').load('sections.html ' + '#home' + '_', function(){
				$('html, body').animate({ scrollTop: 0 }, 'fast');
				$('#contentFader').fadeIn('slow', 'swing');
			});
			//Loads different see page for safari users that doesn't use flexbox
			else if (hash != '#see' && hash != '' && is_safari){
				 $('#main').load('sections.html ' + hash + '_', function(){ 
				    $('html, body').animate({ scrollTop: 0 }, 'slow', function(){
				    	$('#contentFader').fadeIn('slow', 'swing');
				    });	
				});
			}
			else if (hash == '#see' && is_safari) $('#main').load('sections.html ' + '#seeSafari_', function(){
				console.log('safari see');
			    $('html, body').animate({ scrollTop: 0 }, 'slow', function(){
			    	$('#contentFader').fadeIn('slow', 'swing');
			    });	
			});
			else $('#main').load('sections.html ' + '#home' + '_', function(){
				$('html, body').animate({ scrollTop: 0 }, 'fast');
				$('#contentFader').fadeIn('slow', 'swing');
			});
		});

	 });
	 
	 $('#contentFader').on('DOMSubtreeModified', function(){
		  $('[data-toggle="tooltip"]').tooltip(); 		 
	 });
	
	 if ('scrollRestoration' in history) {
	   history.scrollRestoration = 'manual';
	 }
	
});


var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
var is_safari = navigator.userAgent.indexOf('Safari') > -1;
var is_opera = navigator.userAgent.toLowerCase().indexOf('op') > -1;
if ((is_chrome)&&(is_safari)) {is_safari=false;}
if ((is_chrome)&&(is_opera)) {is_chrome=false;}



