$(document).ready(function() {
	$('.style').click(function(e) {
	    var command = $(this).data('command');
	    console.log("This")
	    if (command == 'bold' || command == 'italic' || command == 'underline' || command == "undo" || command == "redo") {
	      document.execCommand(command, false, null);
	  	}
	  	// if (command == 'insertOrderedlist' || command == 'insertUnorderedList'){
	  	//  	document.execCommand('formatBlock', false, command);
	  	// }
	    if (command == 'createLink' || command == 'insertImage') {
	    	url = prompt('Enter the link here: ', 'http:\/\/');
	    	document.execCommand($(this).data('command'), false, url);
	    }
	  });
});

$(document).ready(function (){
	$('#submit').click(function() {
		var text = $("#textEdit").html();
		$('#profile').html(text);
	});

});


