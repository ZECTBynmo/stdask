stdask gives a simple interface for asking the user for command line inputs

Installation
```
npm install stdask
```

Usage
```JavaScript
var ask = require("./stdask").ask;

ask("Enter your name", /.+/, function(name) {
	ask("Enter your email", /^.+@.+$/, function(email) {
	    console.log("Your name is: ", name);
	    console.log("Your email is:", email);
	 
	    process.exit();
  	});
});
```