var ask = function(question, regexFilter, callback) {
	var hasFilter = true;

	// Figure out whether the optional regex filter is being used
	if( callback === undefined ) {
		callback = regexFilter;
		hasFilter = false;
	}

	var stdin = process.stdin, stdout = process.stdout;

	stdin.resume();
	stdout.write( question + ": " );

	stdin.once('data', function(data) {
		data = data.toString().trim();

		if( !hasFilter || regexFilter.test(data) ) {
			callback(data);
		} else {
			stdout.write("Input should match: "+ regexFilter +"\n");
			ask(question, regexFilter, callback);
		}
	});
}

exports.ask = ask;