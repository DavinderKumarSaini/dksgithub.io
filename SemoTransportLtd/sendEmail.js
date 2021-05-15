
$( document ).ready(function() {
    console.log( "ready!" );
	
	$('#sendemail').click(function() {
		console.log( "submit!" );
		ajaxCallToSendEmail();
		console.log( "Finished!" );
	});
});

function ajaxCallToSendEmail()
{
	$.ajax({
	  type: "POST",
	  url: "https://mandrillapp.com/api/1.0/messages/send.json",
	  crossDomain:true,
	  dataType: "json",
	  format: "json",
	  data: {
		'key': '8Zv5rqV9JC7KPB6b6VodyQ',
		'message': {
		  'from_email': 'davinder.kumar.saini@outlook.com',
		  'to': [
			  {
				'email': 'davinder.kumar.saini@gmail.com',
				'name': 'RECIPIENT NAME (OPTIONAL)',
				'type': 'to'
			  }
			],
		  'autotext': 'true',
		  'subject': 'YOUR SUBJECT HERE!',
		  'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
		}
	  }
	 }).done(function(response) {
	   console.log(response); // if you're into that sorta thing
	});
}