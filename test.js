var ask = require("./stdask").ask;

ask("Enter your name", /.+/, function(name) {
	console.log( "Your name is: " + name );
	
	ask("Enter your email", /^.+@.+$/, function(email) {
	    console.log("Your name is: ", name);
	    console.log("Your email is:", email);
	 
	    process.exit();
  	});
});