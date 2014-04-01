/* [ ---- Frimouss Admin Panel - standard form elements ---- ] */

	$(document).ready(function() {
	
	
	//* show all elements & remove preloader
	setTimeout('$("html").removeClass("js")',1000);
	
	//* Toggle Standard 
	$('#default-tgbtn').toggleButtons();
	
	
	//* Toggle Buttons 
	$('#text-tgbtn').toggleButtons({
	        width: 200,
	        label: {
	                enabled: "Lorem Ipsum",
	                disabled: "Dolor Sit"
	        },
	        onChange: function ($el, status, e) {
	                console.log($el, status, e);
	                $('#tgbtn-text').html("Status is: <strong>" + status + "</strong>");
	        }
	});
	
	$('#warning-tgbtn').toggleButtons({
	        style: {
	                enabled: "warning",
	                disabled: "danger"
	        }
	});
	
	
	$('#danger-tgbtn').toggleButtons({
	        style: {
	                enabled: "danger",
	                disabled: "info"
	        }
	});
	
	
	$('#info-tgbtn').toggleButtons({
	        style: {
	                enabled: "info",
	                disabled: "success"
	        }
	});
	
	
	$('#success-tgbtn').toggleButtons({
	        style: {
	                enabled: "success",
	                disabled: "warning"
	        }
	});
	$('#blue-tgbtn').toggleButtons({
	        style: {
	                enabled: "blue",
	                disabled: "red"
	        }
	});
	$('#red-tgbtn').toggleButtons({
	        style: {
	                enabled: "red"
	        }
	});
	$('#turgu-tgbtn').toggleButtons({
	        style: {
	                enabled: "turgu",
	                disabled: "red"
	        }
	});
	$('#orange-tgbtn').toggleButtons({
	        style: {
	                enabled: "orange",
	                disabled: "red"
	        }
	});
	$('#green-tgbtn').toggleButtons({
	        style: {
	                enabled: "green",
	                disabled: "red"
	        }
	});
	
	$('#yellow-tgbtn').toggleButtons({
	        style: {
	                enabled: "yellow",
	                disabled: "red"
	        }
	});
	
	});
	