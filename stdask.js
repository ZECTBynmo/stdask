var ask = function(question, regexFilter, callback) {
	var stdin = process.stdin, stdout = process.stdout;

	stdin.resume();
	stdout.write(question + ": ");

	stdin.once('data', function(data) {
		data = data.toString().trim();

		if (regexFilter.test(data)) {
			callback(data);
		} else {
			stdout.write("Input should match: "+ regexFilter +"\n");
			ask(question, regexFilter, callback);
		}
	});
}

exports.ask = ask;