// document ready function
$(document).ready(function() { 	
	//------------- Elastic textarea -------------//
		if ($('textarea').hasClass('elastic')) {
			$('.elastic').elastic();
		}
	//--------------- Tabs ------------------//
    //Activate support tab
	$('.tabs-left li:eq(1) a').tab('show'); // Select third tab (0-indexed)
	
	//support page scroll
	if($(".scroll-y").length) {
		$(".scroll-y").niceScroll({
			cursoropacitymax: 0.7,
			cursorborderradius: 6,
			cursorwidth: "5px"
		});
	}
	if($(".support-section").length) {
		$(".support-section div.tab-content>.tab-pane.active").niceScroll({
			cursoropacitymax: 0.7,
			cursorborderradius: 6,
			cursorwidth: "5px"
		});
	}

	//------------- Support page  -------------//
	function supportPage(){
		var supportSec = $('.support-section');
		var supportUl = supportSec.find('ul.nav-tabs');
		var supportLi = supportUl.children('li');
		function supportMsg () {
			var msgCont = supportSec.find('div.tab-content>.tab-pane.active>.messages');
			return msgCont;
		}
		//add icons for onlinie and offline users
		supportLi.each(function(index) {
			if($(this).hasClass('online')) {
				//append online icon
				$(this).append('<span class="status entypo-icon-dot green"></span>');
			}
			if($(this).hasClass('offline')) {
				//append offline icon
				$(this).append('<span class="status entypo-icon-dot red"></span>');
			}
			if($(this).hasClass('disconnected')) {
				//append offline icon
				$(this).append('<span class="status silk-icon-power gray"></span>');
			}
			//add close icon with hide state
		   	$(this).append('<span class="closeMsg entypo-icon-close gray"></span>');
		});

		//show close icon on hover and hide on hover out
		supportLi.hover(
			function () {
				$(this).find('.closeMsg').show();
			}, 
			function () {
				$(this).find('.closeMsg').hide();
			}
		);

		//close the msg on click
		supportLi.find('.closeMsg').click(function() {
		    //remove the element
		    $(this).closest('li').animate({
			    opacity: 0.25,
			    height: 'toggle'
			  }, 500, function() {
			    // Animation complete. //callback here
			    $(this).remove()
			    
			  });
		});
		function msgReply(chatText) {
			//create markup
			cont = supportMsg();
			if (chatText.length) {
				cont.append('<li class="admin clearfix"></li>');
				cont.find('li:last-child').append('<a href="#" class="avatar"><img src="images/avatar5.png" alt=""></a><div class="message"><div class="head clearfix"><span class="name"><strong>Sugge</strong> says:</span><span class="time">just now</span></div><p></p></div>');
				cont.find('li:last-child div.message p').append(chatText);
			} else {
				//produce error if not have text in this case pinest notify
				$.pnotify({
					type: 'error',
				    title: 'No text',
		    		text: 'Please enter some text!',
				    icon: 'picon icon24 typ-icon-cancel white',
				    opacity: 0.95,
				    history: false,
				    sticker: false
				});
			}
		}
		//add chat text and auto reply
		supportSec.find('button.send').click(function(e) {
			e.preventDefault();//prevent submit action remove for real app
			var chatText = $('textarea#textarea').val();
			//append to chat window
			msgReply(chatText);
			$('.support-section div.tab-content>.tab-pane.active')
	    	.getNiceScroll().hide();
			updateScroll();
		});

		//add message notification after 5 sec to user
		setTimeout(function(){
	    	supportUl.find('li:nth-child(5)').append('<span class="notification newMsg">1</span>');
	    }, 2000);
		//add new value to msg after 3 sec
		setTimeout(function(){
	    	supportUl.find('li:nth-child(5) .notification').removeClass('newMsg').text('2').addClass('newMsg');
	    }, 5000);		
	}
	
	//put scroll on active pane
	function putScroll() {
		$('.support-section div.tab-content>.tab-pane.active')
		    .niceScroll({
				cursoropacitymax: 0.7,
				cursorborderradius: 6,
				cursorwidth: "5px"
			});
	}
	//update nice scroll
	function updateScroll() {
	    $('.support-section div.tab-content>.tab-pane.active')
	    .getNiceScroll().show();
	}

	//load function only if .support-section is find
	if($('.support-section').length) {
		// Select first tab
		$('#supportTab a:first').tab('show');
		putScroll();
		$('#supportTab a[data-toggle="tab"]').on('shown', function (e) {
		   putScroll();
		})
		supportPage();

	}

});//End document ready functions

