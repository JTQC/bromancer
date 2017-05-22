$(document).ready(function() {

//Declaring our global variables - 
var tempDivOne = $('<div></div>');
var tempDivTwo = $('<div></div>');
var tempDivThree = $('<div></div>');
var tempDivFour = $('<div></div>');
var tempDivFive = $('<div></div>');
var tempDivSix =$('<div></div>')
var tempDivSeven = $('<div></div>')
var tempDivEight = $('<div></div>')
	
	//Profile picture update
	$('#savePic').click(function() {
		event.preventDefault();
		imgUrl = $('#picUrl').val();
		console.log(imgUrl);
		var profImg = $('<img></img').attr('src', imgUrl);
		
		$(tempDivOne).html(profImg)
		// $('#newProfile').append(tempDivOne);

		// $('#my_image').on({
  //   'click': function(){
  //       $('#my_image').attr('src','second.jpg');
    
});


	//Set user age in profile
	$('#submitDate').click(function() {
		event.preventDefault();
		age = $('#userDOB').val();
		console.log(age);
		$(tempDivTwo).html(age)
	})

	//Set answer to three questions
	$('#factorButton').click(function() {
		event.preventDefault();
		
		politics = $('#politicalType').val();
		polPassion = $('#politicalPassion').val();
		console.log(politics, polPassion);

		religion = $('#reg').val();
		relPassion = $('#religiousPassion').val();
		console.log(religion, relPassion);

		social = $('#social').val();
		socPassion = $('#socialPassion').val();
		console.log(social, socPassion);

		
		$(tempDivThree).html("Political Type: " + politics);
	
		$(tempDivFour).html("On a scale of 1-5 I am a " + polPassion + " regarding politics");

		
		$(tempDivFive).html("Religious Type: " + religion);
		
		$(tempDivSix).html("On a scale of 1-5 I am a " + relPassion + " regarding religion");

		
		$(tempDivSeven).html("On a scale of 1-5 I am a " + socPassion + " for being Social");
	})

	$('#addButton').click(function() {
		event.preventDefault();
		$('#interestBox').empty();
		var newInterest = $('#interestBox').val();
		var interestButton = $('<button></button>').html(newInterest);
		$(tempDivEight).append(interestButton);
		interests = $('<div></div>').append(interestButton);
	})

	$('#saveButton').click(function() {
		event.preventDefault();	
		// $("#intro").empty();
		// $("#intro2").empty();
		// $("#intro3").empty();
		// $("#intro4").empty();
		// $("#intro5").empty();
		//Add our photo to the profile
		$('#newProfile').append(tempDivOne);
		
		//Add our DOB to the profile
		$('#newProfile').append(tempDivTwo);
		
		//Add our answers to the questions
		$("#newProfile").append(tempDivThree);
		$("#newProfile").append(tempDivFour);
		$("#newProfile").append(tempDivFive);
		$("#newProfile").append(tempDivSix);
		$("#newProfile").append(tempDivSeven);
	
		//Add our interests to the page
		$("#newProfile").append(tempDivEight);

		//Add our about me to the page
		var aboutMe = $('#aboutMeText').val();

		$('#newProfile').append(aboutMe);
		
		// send info to DB
		$.ajax({
			type: "POST",
			dataType: "json",
			url: "/user/profile",
			data: {
				userPicture: imgUrl,
				userDOB: age,
				userPolView: politics,
				userRateOfPol: polPassion,
				userRelView: religion,
				userRateOfRel: relPassion,
				userRateOfSoc: socPassion.val(),
				userInterests: interests,
				useraboutMe: $('#aboutMeText').val(),
				updated: Date.now()

			}
		})		
	})
	})