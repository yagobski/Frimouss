/* [ ---- Frimouss Admin Panel - floating list header ---- ] */

	;(function( $, window, document, undefined ) {
		
		$(document).ready(function() {
			
			// When all page resources has finished loading
			
			if($.fn.contactList) {
				
				$( '#contacts' ).contactList();
			
			}
		});
		
	}) (jQuery, window, document);