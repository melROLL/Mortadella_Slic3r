/**
 * Some functions for the buying panel.
 *
 * @author  Ikaros Kappler
 * @date    2016-04-19
 * @version 1.0.0
 **/


(function($) {
    //$( document ).ready( function() {

	console.log( "Initializing buying panel ..." );

	window._DG_BUYINGPANEL = { };

	window._DG_BUYINGPANEL.addVaseMouldFileToCart = function( vaseID, vaseHash, buttonID ) {
	    window._DG_BUYINGPANEL._displayComingSoon( vaseID, vaseHash, buttonID );
	};

	window._DG_BUYINGPANEL.addVaseMouldPrintToCart = function( vaseID, vaseHash, buttonID ) {
	    window._DG_BUYINGPANEL._displayComingSoon( vaseID, vaseHash, buttonID );
	};

	window._DG_BUYINGPANEL.addVaseFileToCart = function( vaseID, vaseHash, buttonID ) {
	    window._DG_BUYINGPANEL._displayComingSoon( vaseID, vaseHash, buttonID );
	};

	window._DG_BUYINGPANEL._displayComingSoon = function( vaseID, vaseHash, buttonID ) {
	    console.debug( "Coming soon. (buttonID=" + buttonID + ")" );
	    $( "#" + buttonID ).val( "Coming Soon" );
	};
    
    //} );
})(jQuery);
