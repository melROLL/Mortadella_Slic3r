/**
 * This is a customizable javascript collection for the merchants.
 *
 * Store here whatever you need.
 *
 *
 * @author  Ikaros Kappler
 * @date    2014-06-10
 * @version 1.0.0
 **/


/**
 * The url param may contain the %json_data% placeholder.
 *
 * It will be replace by a JSON object that describes the current settings for the
 * vase generator.
 *
 **/
var seen = [];
function _order_send_to_server( url ) {

    // This is a mandatory size check.
    // Each printer has a max X-Y-sized printing bed. This function call
    // checks if the created mesh would be out of bounds and asks the user
    // if he/she would like to continue though (if too large).
    // If everything is fine (size OK, or user wants to continue) the 
    // function returns true.
    if( !checkSizeBeforeSaving() )
	return false;




    // This function returns a JSON object containing all essential
    // settings. See ZipFileImporter.js for details.
    // Actually all form settings a stored into a JSON object, thus
    // makes it possible to restore the settings the user made each
    // time it's needed (part of the save/load cycle).
    var json_object = ZipFileExporter._build_export_data(); 


    // Fetch the vaseID (if already saved before)
    //var vaseID     = -1;
    //if( document.getElementById("vaseID") )
    //vaseID = document.getElementById("vaseID").value;
    var vaseID = getCurrentVaseID();

    var newURL     = url;
    newURL         = newURL.replace( new RegExp("%bezier_path%", 'g'), 
				     "" // json_object.bezierPath.toJSON()           
				   );
    newURL         = newURL.replace( new RegExp("%bend%", 'g'), 
				     json_object.meshSettings.bendAngle        
				   );
    newURL         = newURL.replace( new RegExp("%id%", 'g'), 
				     vaseID        
				   );
    

    // Now call the URL (might be a remote server)
    // This is the old version: a javascript Popup. Ugly :(
    /* 
    
    window.open( newURL, 
		 "store_custom_vase",  // window name
		 "height=600,width=600" // Params
	       );
    */

    // This is the new version: an AJAX script that runs in background
    _asynchronousURLCall( newURL, 
			  vaseID,
			  json_object 
			);

}

function _asynchronousURLCall( url, 
			       vaseID, 
			       json_object 
			     ) {

    // The createXMLHttpRequest function is defined in the main.js file
    var request   = createXMLHttpRequest();

    //window.alert( window.location.host );
    var originb64 = Base64.encode( window.location.host );
    //window.alert( originb64 );

    // Build POST data
    var postData  = 
	"id="          + vaseID                             + "&" +
	"bend="        + json_object.meshSettings.bendAngle  + "&" +
	"bezier_path=" + json_object.bezierPath.toJSON()     + "&" +
	"origin"       + originb64;
    
    request.onreadystatechange = function () {
        if( request.readyState == 4 ) {
	    
	    
	    if( request.status == 200 ) {
		// Everything OK. Model saved.
		
		// Fetch the ID.
		var vaseID = request.responseText;
		
		// Check if numeric
		if( IKRS.Utils.isNumeric(vaseID) ) {
		    
		    // (Re-)Store the ID into the HTML form (for later updates)
		    messageBox.show( "<br/>\n" +
				     "Your settings have been saved.<br/>\n" +
				     "(vaseID=" + vaseID + ")<br/>\n" +
				     "<br/>\n" +
				     "<button onclick=\"messageBox.hide()\">OK</button>\n"
				   );
		    setStatus( "Your settings have been saved. (id=" + vaseID + ")" );
		    //document.getElementById( "vaseID" ).value = vaseID;
		    setCurrentVaseID( vaseID, "" ); // no hash here

		} else {
		    
		    window.alert("X");
		    // Returned ID is NOT numeric.
		    console.log( "Vase was saved but returned ID is not numeric (" + vaseID + ")." );
		    setStatus( "Vase was saved but returned ID is not numeric (" + vaseID + ")." );
		    messageBox.show( "<br/>Vase was saved but returned ID is not numeric (" + vaseID + ").<br/>\n" +
				     "<br/>\n" +
				     "<button onclick=\"messageBox.hide()\">OK</button>\n" );
		    
		}

	    } else {

		// Error returned.
		console.log( "XMLHttpRequest returned HTTP status code " + request.status + " (" + request.statusText + "): " + request.responseText );
		setStatus( "Failed to save your settings (status " + request.status + ")!" );
		/*
		messageBox.show( "<br/>Failed to save your settings!<br/>\n" +
				 "(status " + request.status + ")!<br/>\n" +
				 "<br/>\n" +
				 "<button onclick=\"messageBox.hide()\">OK</button>\n" );
*/

	    }
	       
        } else {

	    // Error returned.
	    console.log( "XMLHttpRequest returned readyState=" + request.readyState + ": " + request.responseText );
	    setStatus( "Failed to save your settings!" );
	    /*
	    messageBox.show( "<br/>Failed to save your settings!<br/>\n" +
			     "(readyState " + request.readyState + ")!<br/>\n" +
			     "<br/>\n" +
			     "<button onclick=\"messageBox.hide()\">OK</button>\n" );
*/

	}
    };

    request.open( "POST", url, true );
    request.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded");
    request.setRequestHeader( "Content-Length", postData.length );
    request.setRequestHeader( "Connection", "close" );
    request.send( postData ); 


}
