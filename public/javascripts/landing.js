var databaseUrl = "bromancer";
var collections = ["messages", "profiles", "users"];


$(document).ready(function(){
	
	$('#dropDown').click(function() {
		$('#signUp').toggle('inline-block');
	});

	$('#lModal').click(function() {
		$('.loginDD').toggle('inline-block');
	})

	$('#register').click(function(){
		event.preventDefault();

		var userName = $("#userName").val();
		var userPass = $("#userPass").val();
		var userEmail = $("#userEmail").val();
		var userZip = $("#userZip").val();
		
		console.log(userName);
		console.log(userPass);
	


		$.ajax({
			type: "POST",
			dataType: "json",
			url: "/user/create",
			data: {
				userName: $("#userName").val(),
				userPass: $("#userPass").val(),
				userEmail: $("#userEmail").val(),
				userZip: $("#userZip").val(),
				created: Date.now()
			},
    	});

    	// $.getJSON('api/user_data', function(data) {
    	// 	console.log(username);
    	// 	console.log(data);
    	// 	var userName = data;
    	// })
  });

});

