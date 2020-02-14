
     function greeting(reply) {
	while (reply == null || reply == "" || reply == undefined  || !parseInt(reply) || reply > 24 ) {
		window.alert ('Please write the hour! (WTF?!)');
			return greeting(prompt("Hello. What time is it?")) 
		  } 
	  
if ( reply >= 6 && reply <= 12 ) {
window.alert ('Good Morning')
}
else if ( reply > 12 && reply <= 18 ) {
	window.alert ('Good Afternoon')
}
else if ( reply > 18 && reply <= 24 ) {
window.alert ('Good Evening')
}
else
window.alert ('Good Night');
}
greeting(prompt("Hello. What time is it?"));
  
